import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const docsDir = join(root, 'docs');
const outFile = join(root, 'data', 'cases.json');
const styleLibraryFile = join(root, 'data', 'style-library.json');
const styleLibrary = JSON.parse(readFileSync(styleLibraryFile, 'utf8'));

const galleryFiles = [
  { file: 'gallery-part-1.md', part: 1 },
  { file: 'gallery-part-2.md', part: 2 }
];

const categoryLabels = Object.fromEntries(
  styleLibrary.categories.map((category) => [category.anchor, category.value])
);
const knownCategories = new Set(styleLibrary.categories.map((category) => category.value));
const repoUrl = styleLibrary.repository || 'https://github.com/Juaner061/awesome-gpt-image-2';

const featuredIds = new Set([
  1, 2, 6, 17, 166, 310, 330, 334, 338, 341, 344, 346, 350, 353, 354, 359, 360,
  361, 362, 365, 370, 373, 375, 376, 377, 378
]);

function cleanText(value = '') {
  return value
    .replace(/\\_/g, '_')
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .trim();
}

function stripMarkdown(value = '') {
  return cleanText(value)
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .trim();
}

function parseCategoryMap() {
  const text = readFileSync(join(docsDir, 'gallery.md'), 'utf8');
  const map = new Map();
  const sections = text.split(/<a name="(cat-[^"]+)"><\/a>/g);

  for (let i = 1; i < sections.length; i += 2) {
    const categoryId = sections[i];
    const body = sections[i + 1] || '';
    const category = categoryLabels[categoryId] || 'Other Use Cases';
    for (const match of body.matchAll(/#case-(\d+)\)/g)) {
      map.set(Number(match[1]), category);
    }
  }

  return map;
}

function extractPrompt(block) {
  const normalized = block.replace(/\r/g, '');
  const match = normalized.match(/\*\*提示词：\*\*[\s\S]*?```(?:text)?\n([\s\S]*?)```/);
  return cleanText(match?.[1] || '');
}

function extractSource(block) {
  const line = block.match(/\*\*来源：\*\*\s*([^\n]+)/)?.[1] || '';
  const link = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (link) {
    return {
      label: stripMarkdown(link[1]),
      url: link[2]
    };
  }
  return {
    label: stripMarkdown(line) || 'Community',
    url: ''
  };
}

function inferCategory(caseItem) {
  if (caseItem.category && knownCategories.has(caseItem.category)) return caseItem.category;
  const text = `${caseItem.title} ${caseItem.prompt}`.toLowerCase();
  const rules = [
    ['UI Panel Slicing Sheet', ['ui', 'hud', 'interface', 'dashboard', 'screenshot', 'menu', 'inventory', 'shop', 'quest', 'upgrade', 'panel', 'button', 'slot', 'slicing', 'localization', '界面', '面板', '背包', '商店', '按钮', '切图', '本地化']],
    ['Game Icon Atlas', ['icon', 'badge', 'app icon', 'ability icon', 'item icon', 'currency', 'resource icon', 'atlas icon', '图标', '徽章', '技能图标', '物品图标', '货币']],
    ['Sprite Animation Sheet', ['sprite', 'spritesheet', 'pixel art', 'animation sheet', 'frame', 'idle', 'walk cycle', 'attack frame', '2d animation', '精灵', '像素', '动作帧', '帧表']],
    ['Tilemap Atlas', ['tile', 'tilemap', 'tileset', 'isometric tile', 'terrain', 'grid', 'seamless', 'map tile', '瓦片', '地块', '拼接', '地形']],
    ['Prop & Equipment Turnaround', ['weapon', 'armor', 'equipment', 'prop', 'loot', 'relic', 'vehicle', 'consumable', 'turnaround', 'front side back', '武器', '装备', '道具', '掉落', '三视图']],
    ['VFX Sequence Sheet', ['vfx', 'effect', 'spell', 'impact', 'projectile', 'buff', 'aura', 'hit effect', 'sequence', '特效', '技能特效', '命中', '弹体', '序列']],
    ['Monster Combat Readability Sheet', ['monster', 'creature', 'boss', 'enemy', 'telegraph', 'weak point', 'combat readability', '怪物', 'boss', '敌人', '弱点', '预兆']],
    ['Building Upgrade Set', ['building', 'settlement', 'base', 'shop', 'factory', 'tower', 'upgrade tier', 'footprint', '建筑', '据点', '基地', '商店', '防御塔', '升级']],
    ['Character Production Sheet', ['character', 'pose', 'avatar', 'vtuber', 'hero', 'npc', 'skin', 'class', 'model sheet', '角色', '人物', '头像', '人设', '设定表']],
    ['Store Asset Pack', ['poster', 'cover', 'campaign', 'banner', 'capsule', 'key art', 'store', 'marketing', 'ad creative', '海报', '封面', '主视觉', '商店图', '活动', '投放']],
    ['Art Style Guide', ['style guide', 'art direction', 'palette', 'mood board', 'visual rules', 'do and do not', '风格规范', '美术规范', '色板', '正反例']],
    ['Environment Layout Sheet', ['scene', 'environment', 'worldbuilding', 'dungeon', 'level', 'route', 'spawn', 'landmark', 'layout', '场景', '环境', '关卡', '路线', '出生点', '布局']]
  ];
  return rules.find(([, keys]) => keys.some((key) => text.includes(key)))?.[0] || 'Environment Layout Sheet';
}

function inferTags(caseItem) {
  const text = `${caseItem.title} ${caseItem.prompt}`.toLowerCase();
  const styleOrder = ['UI', 'Icon', 'Sprite', 'Tilemap', 'Isometric', 'Orthographic', 'Pixel Art', 'Transparent Asset', 'Atlas', 'Reference Sheet', '2D', '3D', 'Stylized', 'Realistic'];
  const sceneOrder = ['Engine Ready', 'Concept to Production', 'Unity', 'Cocos', 'Mobile', 'PC', 'Combat', 'Level Design', 'Live Ops', 'Marketing', 'Localization', 'RPG', 'Strategy', 'Survival'];
  const styleByValue = new Map(styleLibrary.styles.map((style) => [style.value, style]));
  const sceneByValue = new Map(styleLibrary.scenes.map((scene) => [scene.value, scene]));
  const styleRules = styleOrder.map((value) => [
    value,
    (styleByValue.get(value)?.keywords || []).map((key) => key.toLowerCase())
  ]);
  const sceneRules = sceneOrder.map((value) => [
    value,
    (sceneByValue.get(value)?.keywords || []).map((key) => key.toLowerCase())
  ]);

  const pick = (rules, fallback) => {
    const tags = rules
      .filter(([, keys]) => keys.some((key) => text.includes(key)))
      .map(([label]) => label);
    return tags.length ? tags.slice(0, 3) : [fallback];
  };

  const categoryFallbackStyle = {
    'UI Panel Slicing Sheet': 'UI',
    'Game Icon Atlas': 'Icon',
    'Sprite Animation Sheet': 'Sprite',
    'Tilemap Atlas': 'Tilemap',
    'Prop & Equipment Turnaround': 'Reference Sheet',
    'VFX Sequence Sheet': 'Transparent Asset',
    'Monster Combat Readability Sheet': 'Reference Sheet',
    'Building Upgrade Set': 'Isometric',
    'Character Production Sheet': 'Reference Sheet',
    'Store Asset Pack': 'Reference Sheet',
    'Art Style Guide': 'Reference Sheet',
    'Environment Layout Sheet': 'Reference Sheet'
  };
  const categoryFallbackScene = {
    'UI Panel Slicing Sheet': 'Engine Ready',
    'Game Icon Atlas': 'Engine Ready',
    'Sprite Animation Sheet': 'Engine Ready',
    'Tilemap Atlas': 'Level Design',
    'Prop & Equipment Turnaround': 'Concept to Production',
    'VFX Sequence Sheet': 'Combat',
    'Monster Combat Readability Sheet': 'Combat',
    'Building Upgrade Set': 'Strategy',
    'Character Production Sheet': 'Concept to Production',
    'Store Asset Pack': 'Marketing',
    'Art Style Guide': 'Concept to Production',
    'Environment Layout Sheet': 'Level Design'
  };

  return {
    styles: pick(styleRules, categoryFallbackStyle[caseItem.category] || 'Reference Sheet'),
    scenes: pick(sceneRules, categoryFallbackScene[caseItem.category] || 'Concept to Production')
  };
}
function parseCases() {
  const categoryMap = parseCategoryMap();
  const cases = [];

  for (const { file, part } of galleryFiles) {
    const text = readFileSync(join(docsDir, file), 'utf8');
    const chunks = text.split(/<a name="case-(\d+)"><\/a>/g);

    for (let i = 1; i < chunks.length; i += 2) {
      const id = Number(chunks[i]);
      const block = chunks[i + 1] || '';
      const title = stripMarkdown(block.match(/###\s*例\s*\d+：([^\n]+)/)?.[1] || `Case ${id}`);
      const imageMatch = block.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      const prompt = extractPrompt(block);
      const source = extractSource(block);
      const category = inferCategory({
        title,
        prompt,
        category: categoryMap.get(id)
      });
      const image = imageMatch?.[2]
        ? imageMatch[2].replace('../data/', '/')
        : `/images/case${id}.jpg`;
      const tags = inferTags({ title, prompt, category });

      cases.push({
        id,
        title,
        image,
        imageAlt: stripMarkdown(imageMatch?.[1] || title),
        sourceLabel: source.label,
        sourceUrl: source.url,
        prompt,
        promptPreview: prompt.replace(/\n+/g, ' ').slice(0, 220),
        category,
        styles: tags.styles,
        scenes: tags.scenes,
        featured: featuredIds.has(id),
        githubUrl: `${repoUrl}/blob/main/docs/gallery-part-${part}.md#case-${id}`
      });
    }
  }

  return cases.sort((a, b) => b.id - a.id);
}

const cases = parseCases();
const categories = [
  ...new Set([...styleLibrary.categories.map((category) => category.value), ...cases.map((item) => item.category)])
].sort();
const styles = [
  ...new Set([...styleLibrary.styles.map((style) => style.value), ...cases.flatMap((item) => item.styles)])
].sort();
const scenes = [
  ...new Set([...styleLibrary.scenes.map((scene) => scene.value), ...cases.flatMap((item) => item.scenes)])
].sort();

const payload = {
  repository: repoUrl,
  totalCases: cases.length,
  categories,
  styles,
  scenes,
  cases
};

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Generated ${cases.length} cases at ${outFile}`);
