# GPT-Image2 Game Style Library Reference

Generated from `data/style-library.json`. Use this file as the detailed index for choosing GPT-Image2 game prompt templates, asset categories, art-direction tags, and production contexts.

## Selection Rules

- Match explicit game asset types to template categories first, such as character, environment, prop, UI, icon, VFX, map, key art, or card art.
- Match art-direction words to style tags next, such as anime, stylized, realistic, pixel art, low poly, isometric, dark fantasy, sci-fi, or UI.
- Match production context words to scene tags next, such as concept art, production sheet, marketing, live ops, mobile game, RPG, strategy, survival, or casual.
- If a request is vague, offer 2-3 strong template directions and ask the user to choose before writing the final prompt.
- Final output should include the selected template name, a copyable GPT-Image2 prompt, and concise constraints for asset usability, aspect ratio, background, consistency, text, and negative details.

## Template Index

### Game Character Reference Sheet / 游戏角色设定表

- ID: `game-character-reference`
- Category: Game Character Design
- Styles: Anime, Stylized, Realistic
- Scenes: Production, RPG, Mobile Game
- Tags: Concept Art, Production, Anime
- Cover: `/images/case416.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-character
- Example cases: case 439, case 27, case 54

Use when:
- EN: Use for playable characters, NPCs, skins, avatar variants, and any prompt that needs consistent character design.
- ZH: 用于可玩角色、NPC、皮肤、头像变体，以及任何需要角色一致性的设定任务。

Guidance:
  - Lock role, faction, silhouette, costume materials, face anchors, palette, and game genre before style words.
  - Ask for front view plus 2-4 detail callouts; use turnaround only when the user needs production reference.
  - 先锁定职业、阵营、剪影、服装材质、脸部识别点、配色和游戏类型，再写风格词。
  - 默认生成主视图加 2-4 个细节放大；只有需要生产参考时才要求三视图。

Pitfalls:
  - Avoid changing age, face, costume, or faction across panels.
  - Avoid busy backgrounds unless the request is splash art rather than a reference sheet.
  - 避免不同面板换年龄、换脸、换衣服或换阵营。
  - 设定表不要复杂背景；如果用户要的是立绘或宣传图，再加入场景。

### Game Environment Concept / 游戏场景概念图

- ID: `game-environment-concept`
- Category: Game Environment Concept
- Styles: Stylized, Realistic, Dark Fantasy, Sci-Fi
- Scenes: Concept Art, RPG, Survival
- Tags: Environment, Concept Art, Key Art
- Cover: `/images/case473.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-environment
- Example cases: case 473, case 489, case 6

Use when:
- EN: Use for locations, level mood paintings, playable spaces, dungeons, towns, arenas, and environmental storytelling.
- ZH: 用于地点、关卡氛围图、可游玩空间、地下城、城镇、竞技场和环境叙事。

Guidance:
  - Define camera height, player path, landmark, interactable zones, mood, time of day, and scale cues.
  - Separate visual mood from gameplay readability: clear entrances, cover points, routes, and reward focal points.
  - 明确镜头高度、玩家路线、地标、可交互区域、情绪、时间和尺度参照。
  - 把氛围和玩法可读性同时写清：入口、掩体、路线和奖励焦点要能看出来。

Pitfalls:
  - Avoid pure wallpaper scenery with no gameplay function.
  - Avoid overusing fog, bloom, and darkness until important gameplay shapes disappear.
  - 避免只像风景壁纸，看不出游戏功能。
  - 避免雾、泛光和暗部过重，导致关键玩法形状消失。

### Game Prop & Equipment Sheet / 游戏道具装备设定表

- ID: `game-prop-equipment-sheet`
- Category: Game Props & Equipment
- Styles: Stylized, Realistic, Sci-Fi, Dark Fantasy
- Scenes: Production, RPG, Survival
- Tags: Prop, Weapon, Production
- Cover: `/images/case350.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-prop
- Example cases: case 473, case 444

Use when:
- EN: Use for inventory items, weapon concepts, equipment sets, crafting resources, and prop callout sheets.
- ZH: 用于背包物品、武器概念、装备套装、制造资源和道具细节拆解。

Guidance:
  - Lock item class, rarity, gameplay function, scale, materials, damage/wear state, and silhouette language.
  - Ask for one hero item plus 3-6 orthographic callouts or a clean grid of variants.
  - 锁定道具类别、稀有度、玩法功能、尺度、材质、损耗状态和剪影语言。
  - 默认一件主道具加 3-6 个正交细节；变体需求则使用整齐网格。

Pitfalls:
  - Avoid unclear scale and impossible handles, blades, straps, or attachment points.
  - Avoid unreadable tiny text on props; use labels outside the object when needed.
  - 避免比例不清、手柄/刀刃/绑带/接口不可用。
  - 避免在道具上塞小字；需要说明时用外部标注。

### Game UI & HUD Screen / 游戏 UI 与 HUD 画面

- ID: `game-ui-hud-screen`
- Category: Game UI & HUD
- Styles: UI, Anime, Sci-Fi, Stylized
- Scenes: Mobile Game, Live Ops, RPG
- Tags: UI, HUD, Mobile Game
- Cover: `/images/case17.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-ui
- Example cases: case 17

Use when:
- EN: Use for any game interface, especially when layout, readable labels, icon slots, and mobile screen constraints matter.
- ZH: 用于任何游戏界面，尤其是布局、可读标签、图标槽位和移动端比例很重要时。

Guidance:
  - Specify platform, orientation, screen state, core panels, icon counts, text language, and touch-safe spacing.
  - Use exact UI labels only for short headers; avoid asking the image model to typeset long paragraphs.
  - 指定平台、横竖屏、界面状态、核心面板、图标数量、文字语言和触控安全间距。
  - 只锁定短标题和按钮文案；不要让图片模型排长段正文。

Pitfalls:
  - Avoid mixing console, PC, and mobile interface conventions in one screen.
  - Avoid letting UI cover the character face, enemy silhouette, or combat feedback.
  - 避免同一张图混用主机、PC 和手游界面习惯。
  - 避免 UI 遮住角色脸、敌人剪影或战斗反馈。

### Game Icon Pack / 游戏图标套件

- ID: `game-icon-pack`
- Category: Game Icons
- Styles: Icon, Stylized, Anime, Sci-Fi
- Scenes: Production, Mobile Game, Live Ops
- Tags: Icon, UI, Production
- Cover: `/images/case444.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-icon
- Example cases: case 444

Use when:
- EN: Use when the output needs small-size readability, consistent icon families, transparent backgrounds, or square tiles.
- ZH: 用于需要小尺寸可读、图标族统一、透明背景或方形底板的任务。

Guidance:
  - Define icon count, canvas shape, background rule, rarity border, lighting direction, and dominant silhouette for each icon.
  - For production icons, request centered objects, clean edges, strong contrast, and no embedded text.
  - 定义图标数量、画布形状、背景规则、稀有度边框、光源方向和每个图标的主剪影。
  - 生产用图标要求主体居中、边缘干净、强对比、不要内嵌文字。

Pitfalls:
  - Avoid decorative detail that disappears at 64 px.
  - Avoid different camera angles and light directions within one icon pack.
  - 避免 64 像素下看不清的装饰细节。
  - 同一套图标不要混用不同机位和光源方向。

### Game VFX Concept Sheet / 游戏技能特效设定表

- ID: `game-vfx-concept-sheet`
- Category: Game VFX Concept
- Styles: Stylized, Anime, Sci-Fi, Dark Fantasy
- Scenes: Production, RPG, Mobile Game
- Tags: VFX, Concept Art, Production
- Cover: `/images/case310.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-vfx
- Example cases: case 473

Use when:
- EN: Use for skill effects, combat feedback, elemental spell visuals, ultimate abilities, and VFX phase boards.
- ZH: 用于技能特效、战斗反馈、元素法术、大招和特效阶段板。

Guidance:
  - Define gameplay purpose, element, shape language, timing phases, impact point, color temperature, and readability over backgrounds.
  - Use 4-6 phase frames: anticipation, cast, travel, impact, aftermath, loop if needed.
  - 定义玩法目的、元素、形状语言、时间阶段、打击点、色温和在背景上的可读性。
  - 使用 4-6 个阶段帧：预备、施放、飞行、命中、残留，需要循环时补 loop。

Pitfalls:
  - Avoid pure bright bloom with no readable shape.
  - Avoid VFX that hides the attacker, target, or hit direction.
  - 避免只有强泛光、没有可读形状。
  - 避免特效遮住施法者、目标或打击方向。

### Game Map & Tile System / 游戏地图与地块系统

- ID: `game-map-tile-system`
- Category: Game Maps & Tiles
- Styles: Isometric, Stylized, Pixel Art, Low Poly
- Scenes: Strategy, Survival, Production
- Tags: Map, Isometric, Production
- Cover: `/images/case489.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-map
- Example cases: case 489

Use when:
- EN: Use for world maps, town maps, tactical boards, tilemap concepts, resource nodes, and route planning visuals.
- ZH: 用于世界地图、城镇地图、战术棋盘、Tilemap 概念、资源点和路线规划视觉。

Guidance:
  - Define projection, grid size, biome rules, landmarks, route hierarchy, interactable markers, and legend style.
  - For tile assets, request separated tiles with consistent perspective, edge compatibility, and no cast shadows crossing tile borders.
  - 定义投影方式、网格尺寸、生态规则、地标、路线层级、交互标记和图例风格。
  - 地块资产要分离展示、透视一致、边缘可拼接，不要让投影跨越地块边界。

Pitfalls:
  - Avoid decorative maps with unreadable routes or inconsistent scale.
  - Avoid mixing top-down, isometric, and perspective camera angles in one tile set.
  - 避免只有装饰性、路线不可读或比例混乱的地图。
  - 同一套地块不要混用俯视、等距和透视视角。

### Card & Gacha Splash Art / 卡牌与抽卡立绘

- ID: `game-card-gacha-art`
- Category: Card & Gacha Art
- Styles: Anime, Stylized, Dark Fantasy, Sci-Fi
- Scenes: Marketing, Live Ops, RPG
- Tags: Card, Key Art, Anime
- Cover: `/images/case6.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-card-art
- Example cases: case 6, case 480

Use when:
- EN: Use for character splash art, collectible card frames, gacha banners, hero portraits, and rarity variants.
- ZH: 用于角色立绘、收藏卡框、抽卡 Banner、英雄头像和稀有度变体。

Guidance:
  - Define rarity, pose, power fantasy, frame shape, title area, background energy, and crop safety.
  - Keep card text short; use frame and icon slots rather than long paragraphs.
  - 定义稀有度、姿态、爽感、卡框形状、标题区、背景能量和裁切安全区。
  - 卡面文字要短；用卡框和图标槽表达信息，不要塞长段文字。

Pitfalls:
  - Avoid frame decorations that hide the character silhouette.
  - Avoid copying known card game layouts, logos, or exact UI frames.
  - 避免卡框装饰遮住角色剪影。
  - 避免照搬知名卡牌游戏版式、Logo 或精确 UI 框。

### Creature & Monster Sheet / 怪物与 Boss 设定表

- ID: `game-creature-monster-sheet`
- Category: Creature & Monster Design
- Styles: Dark Fantasy, Sci-Fi, Stylized, Realistic
- Scenes: Production, RPG, Survival
- Tags: Monster, Concept Art, Production
- Cover: `/images/case439.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-monster
- Example cases: case 439, case 473

Use when:
- EN: Use for enemies, bosses, mutation variants, creature families, attack silhouettes, and combat design sheets.
- ZH: 用于敌人、Boss、变异体、生物族群、攻击剪影和战斗设计表。

Guidance:
  - Define size class, threat role, silhouette, locomotion, weak points, attack tells, materials, and biome origin.
  - Use 3-5 variants only when they share a clear family shape language.
  - 定义体型等级、威胁职责、剪影、移动方式、弱点、攻击前摇、材质和生态来源。
  - 只有共享明确族群形状语言时，才生成 3-5 个变体。

Pitfalls:
  - Avoid adding too many horns, limbs, and eyes without a combat reason.
  - Avoid silhouettes that look impressive but cannot be recognized at gameplay camera distance.
  - 避免没有战斗理由地堆角、肢体和眼睛。
  - 避免设定图很酷，但在游戏镜头距离下认不出的剪影。

### Game Building & Settlement Set / 游戏建筑与据点套件

- ID: `game-building-set`
- Category: Buildings & Settlements
- Styles: Isometric, Stylized, Low Poly, Realistic
- Scenes: Strategy, Survival, Production
- Tags: Environment, Isometric, Production
- Cover: `/images/case338.png`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-building
- Example cases: case 489, case 473

Use when:
- EN: Use for modular buildings, city sets, base upgrades, resource structures, shop facades, and destructible environment props.
- ZH: 用于模块化建筑、城镇套件、基地升级、资源建筑、商店外观和可破坏环境物。

Guidance:
  - Define function, faction, upgrade tier, footprint, roof language, material palette, and gameplay readability.
  - For strategy games, show front/side or isometric views with consistent footprint and clear entrance markers.
  - 定义功能、阵营、升级等级、占地、屋顶语言、材质配色和玩法可读性。
  - 策略游戏建筑使用前侧视或等距视角，保持占地一致并标出入口。

Pitfalls:
  - Avoid buildings that look beautiful but do not communicate function.
  - Avoid inconsistent scale between doors, windows, props, and characters.
  - 避免建筑好看但看不出功能。
  - 避免门窗、道具和角色之间比例不一致。

### Game Key Art & Store Assets / 游戏主视觉与商店素材

- ID: `game-key-art-store-assets`
- Category: Game Key Art & Store Assets
- Styles: Key Art, Realistic, Anime, Stylized
- Scenes: Marketing, Live Ops, Mobile Game
- Tags: Key Art, Marketing, Campaign
- Cover: `/images/case360.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-key-art
- Example cases: case 473, case 6

Use when:
- EN: Use when the output is for player acquisition, store pages, launch campaigns, live events, or game announcements.
- ZH: 用于拉新、商店页、上线 Campaign、活动运营或游戏宣发。

Guidance:
  - Define asset format, title-safe area, hero characters, gameplay promise, background world, logo placement, and crop variants.
  - Ask for no final logo text unless exact title rendering is required; leave clean negative space for later design.
  - 定义素材格式、标题安全区、主角、玩法承诺、世界背景、Logo 位置和裁切变体。
  - 除非明确要生成标题文字，否则保留干净留白给后期设计。

Pitfalls:
  - Avoid poster compositions that cannot crop into capsule, banner, and square formats.
  - Avoid misleading gameplay promises in marketing art.
  - 避免无法裁成胶囊图、Banner 和方图的海报构图。
  - 避免宣发图表达与真实玩法不一致。

### Sprite & Animation Sheet / 精灵图与动作帧表

- ID: `game-sprite-animation-sheet`
- Category: Sprites & Animation Sheets
- Styles: Pixel Art, Stylized, Anime, Sprite
- Scenes: Production, Mobile Game, RPG
- Tags: Sprite, Pixel Art, Production
- Cover: `/images/case27.jpg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-game-sprite
- Example cases: case 27, case 54

Use when:
- EN: Use for sprite sheets, animation references, side-view characters, top-down units, idle/run/attack loops, and pixel art assets.
- ZH: 用于精灵图、动作参考、横版角色、俯视单位、待机/奔跑/攻击循环和像素资产。

Guidance:
  - Define camera angle, frame count, grid dimensions, animation sequence, silhouette consistency, and transparent background.
  - For pixel art, specify tile size, pixel density, outline rule, palette limit, and no anti-aliased painterly edges.
  - 定义镜头角度、帧数、网格尺寸、动作顺序、剪影一致性和透明背景。
  - 像素风要指定 tile 尺寸、像素密度、描边规则、色板限制，并避免绘画式抗锯齿边缘。

Pitfalls:
  - Avoid changing the character costume or proportions between frames.
  - Avoid uneven frame boxes that make animation extraction painful.
  - 避免不同帧换服装或比例。
  - 避免帧框大小不一，导致后续切图痛苦。

## Categories

- Game Character Design: 游戏角色设计 | Playable heroes, NPCs, skins, expression sheets, turnarounds, and production-ready character references.
- Game Environment Concept: 游戏场景概念 | Biome concepts, level mood paintings, hub areas, dungeons, cities, and combat arenas.
- Game Props & Equipment: 游戏道具装备 | Weapons, armor, consumables, loot, relics, crafting items, and inventory-ready prop designs.
- Game UI & HUD: 游戏 UI 与 HUD | HUDs, menus, inventory screens, character panels, skill trees, battle overlays, and mobile game interfaces.
- Game Icons: 游戏图标 | Skill icons, item icons, app icons, achievement badges, status effects, and resource currencies.
- Game VFX Concept: 游戏技能特效 | Magic spells, elemental attacks, impact frames, hit effects, aura loops, and VFX concept sheets.
- Game Maps & Tiles: 游戏地图与地块 | World maps, tactical maps, isometric tiles, resource nodes, route boards, and readable minimap concepts.
- Card & Gacha Art: 卡牌与抽卡立绘 | Hero cards, gacha splash art, collectible illustrations, frame variants, and rarity-driven visuals.
- Creature & Monster Design: 怪物与 Boss 设计 | Enemies, bosses, creatures, mutation variants, readable silhouettes, weak points, and attack cues.
- Buildings & Settlements: 建筑与据点 | Base buildings, town sets, shops, resource facilities, destructible props, and modular settlement kits.
- Game Key Art & Store Assets: 游戏主视觉与商店素材 | Steam capsules, app store screenshots, launch posters, event banners, seasonal campaigns, and social ads.
- Sprites & Animation Sheets: 精灵图与动作帧 | 2D sprites, pixel characters, idle/run/attack sheets, hit reactions, and clean frame grids.

## Styles

- Stylized: 风格化 | Keywords: stylized, hand-painted, exaggerated, chunky, clean silhouette, 风格化, 手绘, 夸张, 清晰剪影
- Anime: 二次元 | Keywords: anime, manga, gacha, cel shading, 二次元, 日系, 赛璐璐, 抽卡
- Realistic: 写实 | Keywords: realistic, AAA, PBR, Unreal Engine, photoreal, 写实, 真实材质, 电影感
- Pixel Art: 像素风 | Keywords: pixel art, sprite, 8-bit, 16-bit, tile, 像素, 精灵, 帧动画
- Low Poly: 低多边形 | Keywords: low poly, flat shaded, mobile optimized, 低多边形, 低模, 轻量化
- Isometric: 等距视角 | Keywords: isometric, orthographic, 3/4 view, tilemap, 等距, 正交, 三分之四视角
- UI: 界面 | Keywords: UI, HUD, menu, inventory, skill tree, battle overlay, 界面, 背包, 技能树, 战斗 UI
- Icon: 图标 | Keywords: icon, badge, ability icon, item icon, 图标, 徽章, 技能图标, 物品图标
- Dark Fantasy: 暗黑奇幻 | Keywords: dark fantasy, gothic, grim, dungeon, 暗黑, 哥特, 地下城, 诡秘
- Sci-Fi: 科幻 | Keywords: sci-fi, cyberpunk, mecha, hologram, 科幻, 赛博, 机甲, 全息

## Scenes

- Concept Art: 概念设计 | Keywords: concept art, mood painting, ideation, visual development, 概念设计, 氛围图, 视觉开发
- Production: 生产设定表 | Keywords: reference sheet, turnaround, production sheet, orthographic, 设定表, 三视图, 生产资料
- Mobile Game: 手游 | Keywords: mobile game, portrait, 9:16, touch UI, 手游, 竖屏, 触控
- RPG: 角色扮演 | Keywords: RPG, hero, party, quest, loot, 角色扮演, 英雄, 任务, 装备
- Strategy: 策略 | Keywords: strategy, base, world map, resource, 策略, 基地, 世界地图, 资源
- Survival: 生存 | Keywords: survival, crafting, shelter, post-apocalyptic, 生存, 制造, 避难所, 末日
- Marketing: 宣发 | Keywords: key art, store asset, capsule, poster, banner, 主视觉, 商店图, 海报, 活动
- Live Ops: 活动运营 | Keywords: event, season, battle pass, limited skin, 活动, 赛季, 通行证, 限定皮肤
- Casual: 休闲 | Keywords: casual, cozy, cute, puzzle, merge, 休闲, 治愈, 可爱, 合成

