> [Back to README](../README.md) | [Gallery](./gallery.md) | [Disclaimer](./disclaimer.md)

<a name="section-templates"></a>

## Game Prompt Templates for GPT-Image2

This fork focuses the original GPT-Image2 prompt gallery on game art production. The templates below are written for concept art, production references, UI mockups, store assets, and reusable visual direction.

Use the placeholders in square brackets, then keep only the constraints that matter for the asset you are producing.

<a name="tpl-game-character"></a>

### Game Character Reference Sheet

```text
Create a production-ready game character reference sheet for [character role].

Game context:
- Genre: [RPG / survival / strategy / action / card battler / casual]
- Faction/world: [faction, culture, technology level, era]
- Gameplay role: [tank / healer / scout / boss / NPC vendor / companion]

Character identity:
- Age range and body type: [specific description]
- Face anchors: [eyes, brows, nose, hairstyle, expression, distinctive feature]
- Costume: [materials, silhouette, armor/cloth layers, accessories]
- Signature prop: [weapon / tool / familiar / relic]
- Palette: [3-5 colors with dominant and accent colors]

Sheet layout:
- Full-body front view as the hero image
- 2-4 detail callouts for face, weapon, material, emblem, or backpack
- Optional: side/back view only if a turnaround is needed
- Clean neutral background, readable labels, no busy scene

Quality constraints:
Keep the same face, costume, proportions, and palette across all panels. Strong readable silhouette, game concept art quality, production sheet layout.

Avoid:
Changing identity between panels, random extra characters, unreadable tiny text, fashion collage, copied franchise logos, and complex backgrounds.
```

<a name="tpl-game-environment"></a>

### Game Environment Concept

```text
Create a game environment concept painting for [location name].

Game context:
- Genre: [RPG / survival / stealth / strategy / cozy / horror]
- Biome and world logic: [forest ruin / desert outpost / flooded city / orbital station]
- Gameplay purpose: [hub / combat arena / puzzle level / resource zone / dungeon entrance]

Composition:
- Camera: [wide establishing shot / low angle / top-down / isometric / third-person exploration]
- Player path: [main route, side route, blocked route]
- Landmark: [large readable focal point]
- Interactable zones: [loot, door, cover, resource node, NPC point]
- Scale cues: [character silhouette, vehicles, trees, buildings]

Mood and art direction:
[time of day], [weather], [lighting], [palette], [stylized / realistic / dark fantasy / sci-fi].

Output:
One finished environment concept with clear gameplay readability, not just a wallpaper. Show entrances, navigation cues, reward focal points, and environmental storytelling.

Avoid:
Over-fogging, unreadable darkness, empty scenery, random decorative clutter, and inconsistent scale.
```

<a name="tpl-game-prop"></a>

### Game Prop & Equipment Sheet

```text
Design a game prop / equipment sheet for [item name].

Item definition:
- Class: [weapon / armor / relic / consumable / crafting material / quest item]
- Rarity: [common / rare / epic / legendary]
- Gameplay function: [damage type, buff, crafting use, puzzle use]
- Owner/faction: [who made or uses it]

Visual design:
- Silhouette: [simple readable shape]
- Materials: [metal, cloth, bone, crystal, leather, polymer]
- Wear state: [new / battle-worn / corrupted / ancient]
- Scale reference: [handheld / backpack-size / building-size]
- Color coding: [rarity border or elemental accent]

Sheet layout:
- One hero render of the item
- Front/side view or 3-6 detail callouts
- Optional variant grid: [3-5 variants sharing one shape language]
- Clean background, external labels only

Avoid:
Impossible handles or attachment points, unclear scale, text printed on tiny surfaces, random spikes with no function, and inconsistent materials.
```

<a name="tpl-game-ui"></a>

### Game UI & HUD Screen

```text
Create a high-fidelity game UI screen for [screen state].

Platform:
[mobile portrait 9:16 / mobile landscape 16:9 / PC 16:9 / console safe-area UI]

Game context:
- Genre: [RPG / strategy / gacha / survival / action]
- Art direction: [fantasy parchment / sci-fi hologram / cozy pastel / dark metal]
- Current state: [combat HUD / inventory / character panel / shop / gacha / skill tree / event page]

Layout:
- Top area: [currency, player info, title, tabs]
- Main panel: [cards, equipment slots, grid, character preview, map, battle field]
- Action area: [buttons, skill bar, confirm/cancel, claim reward]
- Icon count: [exact slots or approximate count]
- Required visible text: [short labels only]

Constraints:
Readable short text, consistent icon style, touch-safe spacing, clear hierarchy, no placeholder gibberish. Keep UI from covering faces, enemies, or combat feedback.

Avoid:
Mixing PC/console/mobile conventions, long paragraphs, random unreadable labels, and decorative frames that destroy usability.
```

<a name="tpl-game-icon"></a>

### Game Icon Pack

```text
Create a consistent game icon pack for [icon family].

Icon set:
- Count: [1 / 4 / 8 / 12]
- Type: [skill icons / item icons / currency / status effects / achievements / app icon]
- Canvas: [square tile / rounded square / transparent background / circular badge]
- Size intent: readable at [64px / 128px / 512px]

Style:
- Game genre: [fantasy / sci-fi / survival / casual / card battler]
- Rendering: [hand-painted / 3D / cel shaded / flat vector / pixel art]
- Light direction: [top-left / front studio / dramatic rim light]
- Border/ranking: [none / rarity frame / elemental color border]

Per-icon subjects:
[List icon names and short visual ideas.]

Constraints:
Centered subject, strong silhouette, high contrast, clean edge, consistent camera angle and lighting, no embedded text.

Avoid:
Tiny decorative detail, inconsistent backgrounds, different perspective per icon, watermark, logos, and unreadable symbols.
```

<a name="tpl-game-vfx"></a>

### Game VFX Concept Sheet

```text
Create a game VFX concept sheet for [ability name].

Gameplay definition:
- Ability type: [projectile / slash / area spell / heal / shield / ultimate / hit impact]
- Element: [fire / ice / lightning / poison / holy / void / tech]
- Gameplay purpose: [damage, crowd control, buff, warning, reward feedback]
- Caster and target scale: [small hero / boss / squad / building]

Visual language:
- Primary shape: [ring / cone / spiral / beam / shards / particles]
- Color temperature: [palette and accent]
- Motion feeling: [fast snap / heavy impact / floating aura / pulsing loop]
- Readability: visible over [dark dungeon / bright grass / UI overlay]

Phase layout:
1. Anticipation
2. Cast
3. Travel or expansion
4. Impact
5. Aftermath
6. Optional loop frame

Constraints:
Each phase should be clearly separated, with consistent element language and visible hit direction.

Avoid:
Pure bloom with no shape, effects that hide attacker or target, random particles, and unreadable combat feedback.
```

<a name="tpl-game-map"></a>

### Game Map & Tile System

```text
Create a game map / tile system concept for [map type].

Projection:
[top-down / isometric / orthographic 3/4 / side-view tile]

Game context:
- Genre: [strategy / survival / RPG / cozy sim / roguelike]
- Map purpose: [world map / tactical board / minimap / route map / resource field / tile kit]
- Biomes: [list 3-6 terrain types]
- Key markers: [town, dungeon, resource, boss, shop, gate, safe zone]

Layout requirements:
- Clear route hierarchy
- Landmark-readable regions
- Legend or icon language
- Optional grid: [square / hex / isometric diamond]
- Optional tile count: [number and terrain variants]

For tile assets:
Show separated tiles with consistent perspective, edge compatibility, and no shadows crossing tile borders.

Avoid:
Decorative maps with unreadable routes, inconsistent scale, mixed camera angles, and labels too small to read.
```

<a name="tpl-game-card-art"></a>

### Card & Gacha Splash Art

```text
Create game card / gacha splash art for [character or unit name].

Game context:
- Genre: [card RPG / gacha RPG / strategy card / collectible battler]
- Rarity: [R / SR / SSR / legendary]
- Element/faction: [fire, forest, machine, shadow, kingdom]
- Power fantasy: [elegant assassin / holy defender / chaotic mage / cute healer]

Composition:
- Character pose: [dynamic action / elegant idle / attack wind-up]
- Frame area: [ornate card frame / clean banner / no frame, art only]
- Title-safe zone: [top / bottom / left blank area]
- Background energy: [elemental effect, symbolic environment, faction motif]
- Crop: [portrait card / square avatar / wide banner]

Constraints:
The character silhouette must stay dominant. Keep text minimal and exact if used. Leave safe negative space for later UI or logo placement.

Avoid:
Known franchise card frames, copied logos, overdecorated borders, unreadable title text, and effects that hide the character.
```

<a name="tpl-game-monster"></a>

### Creature & Monster Sheet

```text
Create a creature / monster design sheet for [enemy name].

Combat definition:
- Threat role: [swarm minion / ranged elite / tank / ambusher / boss]
- Size class: [small / human-scale / large / giant]
- Biome/origin: [swamp mutation / alien lab / cursed forest / volcanic cave]
- Attack tells: [glowing weak point, raised claw, breath charge, exposed core]

Visual design:
- Silhouette: [recognizable shape at gameplay camera distance]
- Locomotion: [crawl / fly / burrow / biped / quadruped / hover]
- Materials: [skin, shell, armor, crystal, machine parts]
- Weak points: [color, exposed anatomy, mechanical core]

Sheet layout:
- Main full-body view
- 2-4 attack or idle pose thumbnails
- Detail callouts for weak point, mouth, claws, armor, or core
- Optional family variants sharing the same shape language

Avoid:
Too many limbs or horns without combat reason, silhouettes that collapse at small size, and random horror detail unrelated to gameplay.
```

<a name="tpl-game-building"></a>

### Game Building & Settlement Set

```text
Create a game building / settlement asset set for [building family].

Game context:
- Genre: [strategy / survival / city builder / RPG town / cozy sim]
- Faction or culture: [visual identity and materials]
- Function: [shop / barracks / forge / shelter / resource extractor / town hall]
- Upgrade tiers: [tier 1-3 or one finished tier]

Design rules:
- Footprint: [small / medium / large / exact grid size]
- Camera: [isometric / orthographic front / 3/4 view]
- Materials: [wood, stone, metal, cloth, neon, scrap]
- Function read: [signage, chimney, crates, banners, machine parts]
- Scale reference: [door size, person silhouette, props]

Layout:
Show 3-5 buildings or upgrade tiers in one clean sheet, with consistent perspective and spacing.

Avoid:
Beautiful but functionless buildings, inconsistent door/window scale, mixed camera angles, and unreadable tiny signage.
```

<a name="tpl-game-key-art"></a>

### Game Key Art & Store Assets

```text
Create game key art / store asset artwork for [game title or event].

Marketing purpose:
[Steam capsule / App Store screenshot / launch poster / seasonal event banner / social ad / store hero image]

Game promise:
- Genre: [what players do]
- Core fantasy: [survive 33 days, build a base, command heroes, explore ruins]
- Main subject: [hero, squad, monster, vehicle, city, world]
- Secondary subjects: [2-4 supporting elements]

Composition:
- Format: [16:9 / 4:5 / 1:1 / 9:16 / wide capsule]
- Safe area: [where title/logo will go]
- Focal hierarchy: [largest subject, secondary subject, background]
- Mood: [epic, cozy, tense, comedic, premium, mysterious]

Constraints:
Leave clean negative space for logo or UI overlays unless exact title text is required. Make the gameplay promise honest and visually clear.

Avoid:
Poster layouts that cannot crop, misleading gameplay scenes, copied franchise aesthetics, and unreadable title typography.
```

<a name="tpl-game-sprite"></a>

### Sprite & Animation Sheet

```text
Create a sprite / animation sheet for [character or object].

Game context:
- Camera: [side-view / top-down / isometric / 3/4]
- Style: [pixel art / hand-painted 2D / cel-shaded sprite]
- Tile or frame size: [32x32 / 64x64 / 128x128 / custom]
- Palette rule: [limited palette / outline color / shadow style]

Animation:
- Sequence: [idle / run / attack / jump / hit / death]
- Frame count: [4 / 6 / 8 / 12]
- Grid: [columns x rows]
- Background: transparent or flat key color

Consistency:
Keep the same costume, face, proportions, weapon, and silhouette across all frames. Equal frame boxes, centered pivot, consistent ground line.

Avoid:
Uneven frame sizes, changing outfit between frames, painterly blur for pixel art, complex backgrounds, and motion trails that cannot be separated.
```

