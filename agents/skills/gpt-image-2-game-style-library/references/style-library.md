# GPT-Image2 Game Production Library Reference

Generated from `data/style-library.json`. Use this file as the detailed index for choosing GPT-Image2 game production prompt templates, deliverable categories, production tags, and downstream handoff contexts.

## Selection Rules

- Match the requested downstream deliverable first: character production sheet, sprite animation sheet, UI slicing sheet, icon atlas, tilemap atlas, environment layout, prop/equipment turnaround, VFX sequence, monster readability sheet, building upgrade set, store asset pack, or art style guide.
- Match the downstream owner next, such as concept artist, UI artist, animator, technical artist, level designer, combat designer, marketing artist, or engine integrator.
- Match production constraints to style and scene tags: engine-ready, atlas, transparent asset, reference sheet, Unity, Cocos, mobile, combat, level design, localization, marketing, RPG, strategy, or survival.
- If a request is vague, offer 2-3 deliverable templates with concrete tradeoffs before writing the final prompt.
- Final output should include the selected template name, a copyable GPT-Image2 prompt, and concise acceptance checks for format, slicing/import use, readability, consistency, text handling, and negative constraints.

## Template Index

### Character Production Sheet / 角色生产设定表

- ID: `character-production-sheet`
- Category: Character Production Sheet
- Styles: 2D, 3D, Stylized, Reference Sheet
- Scenes: Concept to Production, Engine Ready, RPG, Mobile
- Tags: production-sheet, reference-sheet, combat-readability, handoff, acceptance
- Cover: `/images/template-covers/character-production.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-character-production

Use when:
- EN: Use when the output must brief concept artists, modelers, animators, and combat designers at the same time.
- ZH: 当角色图要同时服务概念、美术建模、动画和战斗设计时使用。

Guidance:
  - Specify gameplay role, class, faction, rarity or skin tier, and camera distance.
  - Ask for front, side, back, face close-up, weapon/prop callouts, and a readable silhouette strip.
  - Include rig and animation hints such as weapon hand, idle posture, attack arc, cape or hair simulation, and facial expression range.
  - End with acceptance checks for silhouette, palette ownership, scale, and downstream usability.
  - 明确玩法定位、职业、阵营、稀有度或皮肤档位，以及游戏内镜头距离。
  - 要求正面、侧面、背面、头像特写、武器/道具拆解和剪影条。
  - 加入绑定与动画提示，例如武器手、待机姿势、攻击弧线、披风或头发动态、表情范围。
  - 最后写清剪影、配色归属、比例和交付可用性的验收标准。

Pitfalls:
  - Avoid beautiful single-pose splash art when production needs multiple orthographic views.
  - Avoid tiny accessories that disappear at gameplay camera scale.
  - Avoid unreadable faction color language or costume details that conflict with the role.
  - 不要只生成漂亮单姿势立绘，生产需要多视图和可拆解信息。
  - 避免在游戏镜头下看不见的小装饰。
  - 避免阵营色和职业识别不清，或服装细节与玩法定位冲突。

### Sprite Animation Sheet / 2D 动作帧表

- ID: `sprite-animation-sheet`
- Category: Sprite Animation Sheet
- Styles: 2D, Sprite, Pixel Art, Atlas
- Scenes: Engine Ready, Combat, Unity, Cocos
- Tags: sprite-sheet, atlas, engine-ready, transparent-asset, acceptance
- Cover: `/images/template-covers/sprite-animation.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-sprite-animation

Use when:
- EN: Use when the user needs animation frames, not a single illustration.
- ZH: 当用户要的是动作帧而不是单张插画时使用。

Guidance:
  - Define action states, exact frame count per state, grid order, pivot point, ground line, and loop behavior.
  - Request consistent character scale, lighting, outline weight, and camera angle across every frame.
  - Use transparent or flat-color background and leave padding between frames for slicing.
  - Call out import notes such as row labels, frame numbers, no motion blur, no overlapping frames.
  - 明确动作状态、每个状态帧数、网格顺序、轴心点、脚底线和循环方式。
  - 要求所有帧保持一致的角色比例、光照、描边粗细和镜头角度。
  - 使用透明或纯色背景，并在帧之间留出切图间距。
  - 写明导入备注，例如行标签、帧编号、不要运动模糊、不要帧重叠。

Pitfalls:
  - Avoid cinematic smears if the frames need clean slicing.
  - Avoid perspective changes between frames.
  - Avoid inconsistent weapon length, feet position, or character height.
  - 如果要拆帧，不要生成电影式拖影。
  - 避免帧与帧之间镜头角度变化。
  - 避免武器长度、脚底位置或角色高度不一致。

### UI Panel Slicing Sheet / UI 面板切图表

- ID: `ui-panel-slicing-sheet`
- Category: UI Panel Slicing Sheet
- Styles: UI, 2D, Atlas, Reference Sheet
- Scenes: Engine Ready, Mobile, Localization, Unity, Cocos
- Tags: ui-slicing, production-sheet, engine-ready, handoff, acceptance
- Cover: `/images/template-covers/ui-panel-slicing.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-ui-panel-slicing

Use when:
- EN: Use for HUD, inventory, shop, quest, upgrade, gacha, settings, and result screens.
- ZH: 用于 HUD、背包、商店、任务、升级、抽卡、设置和结算界面。

Guidance:
  - Start with target resolution, device orientation, safe area, and primary user action.
  - Break the output into background layer, panel frame, buttons, slots, icons, badges, scroll regions, and state variants.
  - Specify empty, normal, selected, disabled, alert, and pressed states when relevant.
  - Use placeholder text blocks or numbered labels if localization or real copy will be added later.
  - 先写目标分辨率、横竖屏、安全区和主操作目标。
  - 把输出拆成背景层、面板框、按钮、槽位、图标、徽章、滚动区域和状态变体。
  - 需要时明确空态、普通、选中、禁用、警告和按下状态。
  - 如果后续要做本地化或真实文案，使用占位文本块或编号标签。

Pitfalls:
  - Avoid baked-in unreadable text if the game must localize UI later.
  - Avoid decorative clutter around tap targets and slot grids.
  - Avoid one-off UI ornaments that cannot become repeatable widgets.
  - 需要本地化时不要把不可编辑文字烘死在图里。
  - 避免点击区和格子周围被装饰干扰。
  - 避免只能看不能复用的一次性装饰。

### Game Icon Atlas / 游戏图标图集

- ID: `game-icon-atlas`
- Category: Game Icon Atlas
- Styles: Icon, Atlas, 2D, Transparent Asset
- Scenes: Engine Ready, Mobile, RPG, Live Ops
- Tags: atlas, transparent-asset, engine-ready, acceptance
- Cover: `/images/template-covers/icon-atlas.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-icon-atlas

Use when:
- EN: Use when the user needs a set of related icons with one visual grammar.
- ZH: 当用户需要一组视觉语法一致的图标时使用。

Guidance:
  - Define icon count, grid dimensions, final pixel size, background shape, rarity frames, and naming order.
  - Keep the silhouette centered, readable at small size, and separated from the frame.
  - Group related icon families by row or column such as weapon, armor, resource, potion, skill, currency.
  - Ask for transparent background variant or plain preview sheet depending on downstream use.
  - 明确图标数量、网格尺寸、最终像素尺寸、底框形状、稀有度框和命名顺序。
  - 主体剪影居中，小尺寸可读，并与边框保持分离。
  - 按行或列组织武器、防具、资源、药水、技能、货币等图标族。
  - 按下游用途要求透明背景版本或普通预览表。

Pitfalls:
  - Avoid icons whose meaning depends on tiny text.
  - Avoid mixed camera angles across the same atlas.
  - Avoid over-rendered details that collapse at 32 or 64 pixels.
  - 不要让图标含义依赖微小文字。
  - 同一图集不要混用多个镜头角度。
  - 避免 32 或 64 像素下糊成一团的过度细节。

### Tilemap Atlas / Tilemap 瓦片图集

- ID: `tilemap-atlas`
- Category: Tilemap Atlas
- Styles: Tilemap, Atlas, Isometric, 2D
- Scenes: Engine Ready, Level Design, Strategy, Survival
- Tags: tilemap, atlas, engine-ready, layout, acceptance
- Cover: `/images/template-covers/tilemap-atlas.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-tilemap-atlas

Use when:
- EN: Use when level designers need modular art that can repeat, connect, and communicate collision or traversal.
- ZH: 当关卡需要可重复、可拼接、能表达碰撞或通行规则的模块美术时使用。

Guidance:
  - Specify tile size, camera type, grid layout, terrain family, edge transitions, corners, decals, and variant density.
  - Ask for visual markers that separate walkable, blocked, water, hazard, resource, and decoration tiles.
  - Include seamless edge compatibility and a small sample assembled map for readability testing.
  - Keep lighting direction and scale consistent across all tiles.
  - 明确瓦片尺寸、镜头类型、网格布局、地形族、边缘过渡、角块、贴花和变体密度。
  - 要求可行走、阻挡、水体、危险、资源和装饰瓦片有清晰视觉区分。
  - 加入无缝边缘兼容要求，并附一个小型拼装示例用于读图测试。
  - 所有瓦片保持统一光向和比例。

Pitfalls:
  - Avoid painterly scenes that cannot tile.
  - Avoid shadows that reveal tile boundaries unintentionally.
  - Avoid mixing top-down and isometric projection in one atlas.
  - 不要生成不能拼接的完整场景插画。
  - 避免阴影把瓦片边界暴露出来。
  - 不要在同一图集中混用俯视和等距投影。

### Environment Layout Sheet / 场景关卡布局表

- ID: `environment-layout-sheet`
- Category: Environment Layout Sheet
- Styles: 2D, 3D, Isometric, Reference Sheet
- Scenes: Concept to Production, Level Design, Survival, PC
- Tags: layout, production-sheet, handoff, acceptance
- Cover: `/images/template-covers/environment-layout.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-environment-layout

Use when:
- EN: Use when the user is designing a level, hub, dungeon, combat arena, base, or overworld region.
- ZH: 用于关卡、主城、地牢、战斗场、基地或大地图区域设计。

Guidance:
  - State camera angle, player route, entry and exit, landmarks, encounter beats, interactables, and scale reference.
  - Ask for an annotated layout version plus a mood/color version when the downstream team needs both.
  - Separate foreground blockers, navigable space, background set dressing, and UI-safe camera frame.
  - Include performance-minded asset grouping such as repeatable props, large silhouettes, and modular structures.
  - 写清镜头角度、玩家路线、入口出口、地标、遭遇节奏、交互物和比例参照。
  - 下游需要时，同时要求带标注布局版和氛围配色版。
  - 区分前景遮挡、可通行区域、背景陈设和 UI 安全镜头框。
  - 加入性能友好的资产组织，例如可复用道具、大剪影和模块建筑。

Pitfalls:
  - Avoid purely atmospheric landscapes with no playable information.
  - Avoid impossible paths, ambiguous scale, or hidden interaction points.
  - Avoid excessive detail that cannot be split into reusable environment assets.
  - 不要只生成氛围风景而没有可玩信息。
  - 避免路径不可用、比例含糊或交互点藏得太深。
  - 避免细节过多，无法拆成可复用场景资产。

### Prop & Equipment Turnaround / 道具装备三视图

- ID: `prop-equipment-turnaround`
- Category: Prop & Equipment Turnaround
- Styles: 3D, 2D, Orthographic, Reference Sheet
- Scenes: Concept to Production, Engine Ready, RPG, Survival
- Tags: production-sheet, reference-sheet, transparent-asset, handoff, acceptance
- Cover: `/images/template-covers/prop-equipment.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-prop-equipment-turnaround

Use when:
- EN: Use when an item must be modeled, equipped, animated, picked up, or turned into an icon.
- ZH: 当物品要被建模、装备、动画、拾取或转成图标时使用。

Guidance:
  - Request front, side, back, top or detail views, plus scale beside a hand or character silhouette.
  - Describe materials, wear, faction markings, rarity tier, gameplay function, and attach or grip points.
  - Ask for a clean isolated render and a small in-context thumbnail if both production and UI need it.
  - Add notes for animation hazards such as dangling parts, moving pieces, sharp silhouettes, or VFX sockets.
  - 要求正面、侧面、背面、顶部或细节视图，并用手或角色剪影做比例参照。
  - 描述材质、磨损、阵营标识、稀有度、玩法功能和挂点/握持点。
  - 如果生产和 UI 都需要，要求干净独立渲染和一张小尺寸情境缩略图。
  - 补充动画风险，例如垂挂件、可动部件、尖锐剪影或特效挂点。

Pitfalls:
  - Avoid single dramatic perspective that hides construction details.
  - Avoid decorative pieces that block hand grip or animation sockets.
  - Avoid rarity colors that conflict with the game inventory system.
  - 不要只给一个戏剧透视，导致结构细节被遮住。
  - 避免装饰件挡住握持点或动画挂点。
  - 避免稀有度颜色和游戏背包系统冲突。

### VFX Sequence Sheet / 技能特效序列表

- ID: `vfx-sequence-sheet`
- Category: VFX Sequence Sheet
- Styles: 2D, Atlas, Transparent Asset, Reference Sheet
- Scenes: Combat, Engine Ready, Unity, Cocos
- Tags: vfx-sequence, atlas, combat-readability, transparent-asset, acceptance
- Cover: `/images/template-covers/vfx-sequence.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-vfx-sequence

Use when:
- EN: Use when the effect must communicate gameplay timing or hit direction, not just mood.
- ZH: 当特效要表达玩法时机或命中方向，而不只是氛围时使用。

Guidance:
  - Define skill role, damage type, faction color, cast time, active frames, impact moment, and cleanup duration.
  - Ask for a left-to-right phase sheet with clear labels: anticipation, charge, travel, impact, linger, dissipate.
  - Specify alpha-friendly background, no dense smoke over gameplay targets, and readable centerline of action.
  - Include alternate preview on dark and light backgrounds if the effect will appear across many maps.
  - 明确技能作用、伤害类型、阵营色、起手时间、有效帧、命中瞬间和消散时长。
  - 要求从左到右的阶段表：预兆、蓄力、飞行、命中、停留、消散。
  - 指定适合透明通道的背景，不要用浓烟遮住目标，并保持动作中心线可读。
  - 如果会出现在多种地图上，加入深浅背景预览。

Pitfalls:
  - Avoid effects that cover enemies, UI, or hit feedback for too long.
  - Avoid random particle noise with no readable phase structure.
  - Avoid colors that are already reserved for another damage type or faction.
  - 避免特效长时间遮挡敌人、UI 或命中反馈。
  - 避免只有随机粒子噪声，没有清晰阶段结构。
  - 避免使用已经分配给其他伤害类型或阵营的颜色。

### Monster Combat Readability Sheet / 怪物战斗可读性表

- ID: `monster-combat-readability`
- Category: Monster Combat Readability Sheet
- Styles: 2D, 3D, Stylized, Reference Sheet
- Scenes: Combat, Concept to Production, RPG, Survival
- Tags: combat-readability, production-sheet, reference-sheet, handoff, acceptance
- Cover: `/images/template-covers/monster-readability.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-monster-combat-readability

Use when:
- EN: Use when monster visuals must support combat readability and encounter design.
- ZH: 当怪物视觉必须服务战斗识别和遭遇设计时使用。

Guidance:
  - Specify enemy tier, size class, movement pattern, attack kit, damage type, and camera distance.
  - Ask for idle silhouette, attack wind-up, enraged phase, weak-point callouts, and hit-reaction cues.
  - Show danger zones or attack arcs as visual overlays only when useful for design handoff.
  - Separate scary detail from gameplay markers so players can read the threat quickly.
  - 明确怪物等级、体型级别、移动方式、攻击组、伤害类型和镜头距离。
  - 要求待机剪影、攻击前摇、狂暴阶段、弱点标注和受击反馈提示。
  - 必要时以视觉覆盖层展示危险区域或攻击弧线，用于设计交付。
  - 把恐怖细节和玩法标识分开，让玩家能快速读懂威胁。

Pitfalls:
  - Avoid impressive silhouettes that do not reveal attack direction.
  - Avoid weak points hidden inside noisy texture detail.
  - Avoid boss forms that look unrelated across phases unless the design calls for it.
  - 不要只追求震撼剪影，却看不出攻击方向。
  - 避免弱点被复杂纹理淹没。
  - 除非设计需要，不要让 Boss 阶段之间看起来毫无关联。

### Building Upgrade Set / 建筑升级套装

- ID: `building-upgrade-set`
- Category: Building Upgrade Set
- Styles: Isometric, 3D, 2D, Reference Sheet
- Scenes: Strategy, Engine Ready, Level Design, Survival
- Tags: upgrade-set, production-sheet, engine-ready, layout, acceptance
- Cover: `/images/template-covers/building-upgrade.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-building-upgrade-set

Use when:
- EN: Use when the game needs clear building tiers, footprints, factions, and functional readability.
- ZH: 当游戏需要清晰建筑等级、占地、阵营和功能识别时使用。

Guidance:
  - Define building function, footprint size, camera angle, tier count, faction, biome, and unlock progression.
  - Ask for tier-by-tier silhouettes where upgrades increase complexity without changing the footprint unexpectedly.
  - Include entrance, interactable area, roof height, construction state, damaged state, and icon thumbnail if needed.
  - Keep lighting, projection, shadow direction, and scale consistent across all tiers.
  - 明确建筑功能、占地尺寸、镜头角度、等级数量、阵营、生态和解锁节奏。
  - 要求逐级递进的剪影，升级增加复杂度但不随意改变占地。
  - 需要时包含入口、交互区、屋顶高度、建造中状态、损坏状态和图标缩略图。
  - 所有等级保持统一光照、投影、阴影方向和比例。

Pitfalls:
  - Avoid upgrade tiers that become unreadable at the strategy camera distance.
  - Avoid changing footprint or entrance direction without saying so.
  - Avoid adding decoration that hides the building function.
  - 避免升级后在策略镜头距离下不可读。
  - 不要无说明地改变占地或入口方向。
  - 避免装饰遮住建筑功能。

### Store Asset Pack / 商店与投放素材包

- ID: `store-asset-pack`
- Category: Store Asset Pack
- Styles: Realistic, Stylized, UI, Reference Sheet
- Scenes: Marketing, Live Ops, Mobile, PC
- Tags: store-assets, layout, style-guide, acceptance
- Cover: `/images/template-covers/store-asset-pack.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-store-asset-pack

Use when:
- EN: Use when the output must become a set of production marketing images across formats.
- ZH: 当输出需要变成多规格营销图片素材包时使用。

Guidance:
  - List required formats such as 16:9 key art, 9:16 vertical ad, 1:1 social square, Steam capsule, and store screenshot.
  - Reserve safe zones for logo, rating badge, CTA, platform overlays, and crop variation.
  - Show actual game promise through characters, UI moment, core mechanic, enemy, reward, or base progress.
  - Ask for a clean art-only version and a composition guide version with safe-area overlays.
  - 列出所需规格，例如 16:9 主视觉、9:16 竖版广告、1:1 社媒图、Steam capsule、商店截图。
  - 为 logo、评级标、CTA、平台覆盖层和裁切变化预留安全区。
  - 用角色、UI 片段、核心机制、敌人、奖励或基地进度表达真实游戏卖点。
  - 要求一张纯画面版和一张带安全区覆盖层的构图说明版。

Pitfalls:
  - Avoid misleading gameplay that the product cannot deliver.
  - Avoid tiny UI or text baked into the art when variants need localization.
  - Avoid placing key faces or rewards outside crop-safe areas.
  - 不要生成产品无法兑现的误导玩法。
  - 需要多语言变体时，不要把小 UI 或文字烘进画面。
  - 避免把关键脸部或奖励放在安全裁切区外。

### Art Style Guide / 项目美术风格规范

- ID: `art-style-guide`
- Category: Art Style Guide
- Styles: Reference Sheet, 2D, 3D, Stylized
- Scenes: Concept to Production, Engine Ready, Marketing, Localization
- Tags: style-guide, production-sheet, handoff, acceptance
- Cover: `/images/template-covers/art-style-guide.svg`
- Template source: https://github.com/Juaner061/awesome-gpt-image-2/blob/main/docs/templates.md#tpl-art-style-guide

Use when:
- EN: Use when the team needs a repeatable visual standard before generating many assets.
- ZH: 当团队在批量生成资产前，需要先沉淀可复用视觉标准时使用。

Guidance:
  - Define genre, audience, camera, platform, target mood, shape language, line weight, material rules, lighting, and palette.
  - Ask for do and do-not examples across character, environment, UI, icon, prop, and marketing samples.
  - Include scale, contrast, saturation, texture density, readability at gameplay distance, and localization rules.
  - End with a compact checklist the team can reuse before approving any generated asset.
  - 明确品类、受众、镜头、平台、目标情绪、形状语言、线条粗细、材质规则、光照和色板。
  - 要求覆盖角色、场景、UI、图标、道具和投放样张的正例与反例。
  - 包含比例、对比度、饱和度、纹理密度、游戏镜头可读性和本地化规则。
  - 最后输出一份团队可复用的资产验收清单。

Pitfalls:
  - Avoid vague mood-board language without enforceable rules.
  - Avoid a palette that works for marketing but fails in UI or combat readability.
  - Avoid style rules that only fit one hero image and cannot scale to hundreds of assets.
  - 避免只有情绪板词汇，没有可执行规则。
  - 避免配色只适合宣传图，却破坏 UI 或战斗可读性。
  - 避免风格规则只服务一张主视觉，无法扩展到大量资产。

## Categories

- Character Production Sheet: 角色生产设定表 | Character prompts that hand off gameplay role, views, silhouette, rig notes, and acceptance checks.
- Sprite Animation Sheet: 2D 动作帧表 | Frame grids for idle, move, attack, hit, death, and other import-friendly 2D animation states.
- UI Panel Slicing Sheet: UI 面板切图表 | HUD, dialog, inventory, shop, and upgrade panels designed for states, slots, safe areas, and localization.
- Game Icon Atlas: 游戏图标图集 | Consistent ability, item, rarity, currency, badge, and menu icons with atlas layout rules.
- Tilemap Atlas: Tilemap 瓦片图集 | Tile sets with edge compatibility, variants, decals, collision hints, and camera-scale readability.
- Environment Layout Sheet: 场景关卡布局表 | Level and environment sheets that show routes, landmarks, spawn zones, camera framing, and interactables.
- Prop & Equipment Turnaround: 道具装备三视图 | Weapons, armor, loot, consumables, and interactable props with scale, views, attach points, and icon extraction notes.
- VFX Sequence Sheet: 技能特效序列表 | Readable hit, cast, projectile, impact, buff, and ambient effect sheets with phase timing and cleanup rules.
- Monster Combat Readability Sheet: 怪物战斗可读性表 | Enemies and bosses designed around silhouette, weak points, telegraphs, attack ranges, and camera-distance readability.
- Building Upgrade Set: 建筑升级套装 | Base, settlement, shop, factory, and tower upgrade tiers with footprint, function, and faction consistency.
- Store Asset Pack: 商店与投放素材包 | App store, Steam capsule, social ad, event banner, and key-art prompt packs with crop-safe variants.
- Art Style Guide: 项目美术风格规范 | Reusable visual direction sheets for palette, shape language, camera rules, materials, lighting, and do/don't examples.

## Styles

- 2D: 2D | Keywords: 2d, side view, top-down, orthographic, flat shaded, hand painted, 二维, 俯视, 横版
- 3D: 3D | Keywords: 3d, model, turnaround, render, pbr, sculpt, 三维, 模型, 三视图
- UI: UI | Keywords: ui, hud, interface, panel, button, modal, 界面, 面板, 按钮
- Icon: 图标 | Keywords: icon, badge, item icon, ability icon, currency, 图标, 徽章
- Sprite: 精灵图 | Keywords: sprite, frame, animation sheet, frame sheet, spritesheet, 精灵, 帧表, 动作帧
- Tilemap: 瓦片 | Keywords: tile, tilemap, tileset, grid, seamless, 瓦片, 地块, 拼接
- Isometric: 等距 | Keywords: isometric, iso, three-quarter top-down, 等距, 斜45
- Orthographic: 正交 | Keywords: orthographic, front view, side view, top view, no perspective, 正交, 正视, 侧视
- Pixel Art: 像素 | Keywords: pixel, 8-bit, 16-bit, low resolution, 像素
- Stylized: 风格化 | Keywords: stylized, hand-painted, cartoon, toon, 风格化, 手绘, 卡通
- Realistic: 写实 | Keywords: realistic, cinematic, photoreal, pbr, 写实, 电影感
- Transparent Asset: 透明资产 | Keywords: transparent background, alpha, cutout, isolated, 透明, 白底, 单独物件
- Atlas: 图集 | Keywords: atlas, grid, contact sheet, sheet, 图集, 九宫格, 网格
- Reference Sheet: 设定表 | Keywords: reference sheet, production sheet, model sheet, turnaround, 设定表, 生产表

## Scenes

- Concept to Production: 概念到生产 | Keywords: concept, production, handoff, brief, reference, 概念, 生产, 交付, 设定
- Engine Ready: 引擎可用 | Keywords: engine, unity, cocos, unreal, import, runtime, 引擎, 导入, 运行时
- Unity: Unity | Keywords: unity, ugui, prefab, sprite renderer
- Cocos: Cocos | Keywords: cocos, creator, spriteframe, prefab
- Mobile: 移动端 | Keywords: mobile, portrait, landscape mobile, touch, phone, 移动端, 手机
- PC: PC | Keywords: pc, desktop, steam, keyboard, mouse
- Combat: 战斗 | Keywords: combat, attack, hit, telegraph, skill, battle, 战斗, 攻击, 受击, 技能
- Level Design: 关卡设计 | Keywords: level, route, spawn, encounter, blockout, 关卡, 路线, 出生点
- Live Ops: 运营活动 | Keywords: event, live ops, season, banner, 活动, 赛季, 运营
- Marketing: 投放营销 | Keywords: marketing, store, capsule, ad, key art, banner, 商店, 投放, 广告, 主视觉
- Localization: 本地化 | Keywords: localization, safe text, no text, multi-language, 本地化, 多语言, 无文字
- RPG: RPG | Keywords: rpg, class, loot, quest, hero, 角色扮演
- Strategy: 策略 | Keywords: strategy, base, tower, building, settlement, 策略, 基地, 防御塔
- Survival: 生存 | Keywords: survival, crafting, resource, wasteland, zombie, 生存, 资源, 末日

