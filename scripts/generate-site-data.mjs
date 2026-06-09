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
    ['Game UI & HUD', ['ui', 'hud', 'interface', 'dashboard', 'screenshot', 'menu', 'inventory', 'skill tree', '界面', '截图', '背包', '技能树', '战斗界面']],
    ['Game Icons', ['icon', 'badge', 'app icon', 'ability icon', 'item icon', '图标', '徽章', '技能图标', '物品图标']],
    ['Sprites & Animation Sheets', ['sprite', 'pixel art', 'animation sheet', 'frame', '像素', '精灵', '动作帧', '帧动画']],
    ['Game Maps & Tiles', ['map', 'tile', 'isometric', 'route', 'minimap', '地图', '地块', '等距', '小地图']],
    ['Game Props & Equipment', ['weapon', 'armor', 'equipment', 'prop', 'loot', 'relic', '武器', '装备', '道具', '掉落', '遗物']],
    ['Creature & Monster Design', ['monster', 'creature', 'boss', 'enemy', '怪物', 'boss', '敌人', '生物']],
    ['Buildings & Settlements', ['building', 'settlement', 'base', 'shop', 'architecture', '建筑', '据点', '基地', '商店']],
    ['Game Character Design', ['character', 'pose', 'avatar', 'vtuber', '角色', '人物', '头像', '人设', '设定表']],
    ['Game VFX Concept', ['vfx', 'effect', 'spell', 'impact', '技能特效', '特效', '法术', '打击']],
    ['Card & Gacha Art', ['card', 'gacha', 'splash art', 'illustration', '卡牌', '抽卡', '立绘', '插画']],
    ['Game Key Art & Store Assets', ['poster', 'cover', 'campaign', 'banner', 'capsule', 'key art', '海报', '封面', '主视觉', '商店图', '活动']],
    ['Game Environment Concept', ['scene', 'environment', 'worldbuilding', 'dungeon', 'level', '场景', '环境', '关卡', '地下城', '世界观']]
  ];
  return rules.find(([, keys]) => keys.some((key) => text.includes(key)))?.[0] || 'Game Environment Concept';
}

function inferTags(caseItem) {
  const text = `${caseItem.title} ${caseItem.prompt}`.toLowerCase();
  const styleOrder = ['UI', 'Icon', 'Pixel Art', 'Isometric', 'Anime', 'Stylized', 'Realistic', 'Sci-Fi', 'Dark Fantasy', 'Low Poly'];
  const sceneOrder = ['Production', 'Mobile Game', 'RPG', 'Strategy', 'Survival', 'Marketing', 'Live Ops', 'Casual', 'Concept Art'];
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

  return {
    styles: pick(styleRules, caseItem.category === 'Game UI & HUD' ? 'UI' : 'Stylized'),
    scenes: pick(sceneRules, caseItem.category === 'Game Key Art & Store Assets' ? 'Marketing' : 'Concept Art')
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
const categories = [...new Set(cases.map((item) => item.category))].sort();
const styles = [...new Set(cases.flatMap((item) => item.styles))].sort();
const scenes = [...new Set(cases.flatMap((item) => item.scenes))].sort();

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
