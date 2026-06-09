# GPT-Image2 Game Production Prompt Templates

<a name="section-templates"></a>

These templates turn GPT-Image2 requests into game-development deliverables. Each template is written for production handoff: the prompt names the downstream user, the asset purpose, output format, constraints, and acceptance checks.

Use them as starting points. Replace bracketed fields with your project details, then keep the output-specific constraints intact.

---

<a name="tpl-character-production"></a>
## Character Production Sheet

Use this when a character image must brief concept art, modeling, animation, combat, and UI teams.

~~~text
Create a game character production sheet for [game genre/platform] using GPT-Image2.

Production owner and downstream use:
- Asset type: playable character / NPC / companion / skin / enemy elite.
- Downstream users: concept artist, modeler, animator, combat designer, UI icon artist.
- Gameplay role: [tank / ranged DPS / healer / merchant / quest NPC / boss minion].
- Camera distance in game: [close dialogue / 3rd-person action / isometric combat / mobile portrait].

Character brief:
- Name or archetype: [character name].
- Faction and world: [faction, culture, tech/magic level, biome].
- Personality and combat identity: [3-5 words].
- Key readable silhouette: [large shield, long coat, horn shape, backpack, staff, weapon arc].
- Palette ownership: [main color, accent color, forbidden colors already used by other factions].

Output layout:
- One clean production sheet, not a cinematic poster.
- Include front view, side view, back view, head close-up, weapon/prop callouts, material swatches, and a small gameplay-distance silhouette strip.
- Keep views aligned to the same ground line and scale.
- Add small numbered callouts instead of long decorative text.

Rig and animation notes:
- Show weapon hand, idle posture, attack direction, cape/hair cloth behavior, facial expression range, and any VFX socket points.

Art direction:
- [2D / 3D concept / stylized / realistic / pixel / anime], [line weight], [material finish], [lighting rule].

Acceptance checks:
- Readable at gameplay camera distance.
- Faction and class are identifiable from silhouette and palette.
- Accessories do not block animation joints or weapon grip.
- Sheet gives enough construction information for modeling or sprite production.

Negative constraints:
- No single-pose splash art only.
- No unreadable tiny text.
- No inconsistent costume details between views.
- No background scene that hides the character construction.
~~~

---

<a name="tpl-sprite-animation"></a>
## Sprite Animation Sheet

Use this when the output needs frame-by-frame animation, not a single illustration.

~~~text
Create an import-friendly 2D sprite animation sheet for [character/monster/prop/projectile] in [game genre].

Production owner and downstream use:
- Downstream users: animator, technical artist, Unity/Cocos integrator.
- Engine target: [Unity Sprite Renderer / Unity 2D Animation / Cocos SpriteFrame / custom atlas].
- Final use: [combat unit / NPC idle / projectile / pickup item / UI mascot].

Sprite specification:
- Camera: [side view / three-quarter top-down / top-down / isometric].
- Final frame size target: [64x64 / 128x128 / 256x256 / custom].
- Sheet grid: [columns x rows].
- Action rows: idle [N frames], walk [N], attack [N], hit [N], death [N], special [N].
- Frame order: left to right, row by row.
- Pivot: feet center / body center / weapon socket, marked consistently.
- Ground line: visible guide line or aligned feet baseline.

Visual consistency:
- Same scale, same outline weight, same light direction, same camera angle in every frame.
- [Pixel art / hand-painted / anime / stylized] style with [palette and material notes].
- Transparent or flat-color background with padding between frames.

Import notes:
- Clean frame boundaries, no overlapping frames, no motion blur unless it is separated as its own VFX layer.
- Optional small labels outside the frame area for action names and frame numbers.

Acceptance checks:
- Looping actions can tile without scale popping.
- Feet or pivot stay stable across idle and walk frames.
- Weapon and accessory length stays consistent.
- Silhouette remains readable at final in-game size.

Negative constraints:
- No cinematic smear hiding the body construction.
- No perspective changes between frames.
- No merged contact sheet with uneven cell sizes.
~~~

---

<a name="tpl-ui-panel-slicing"></a>
## UI Panel Slicing Sheet

Use this for HUDs, inventory, shop, quest, upgrade, gacha, settings, and result screens that need reusable UI pieces.

~~~text
Create a game UI panel slicing sheet for [screen name] in [game genre/platform].

Production owner and downstream use:
- Downstream users: UI artist, UX designer, Unity/Cocos UI implementer, localization owner.
- Target resolution and orientation: [1920x1080 landscape / 1080x1920 portrait / tablet adaptive].
- Main player task: [claim reward / equip item / upgrade building / start battle / buy item].

Screen structure:
- Background layer: [dim overlay / scene blur / flat panel backplate].
- Main panel frame: nine-slice friendly corners and edges.
- Content regions: title area, tabs, scroll list, grid slots, detail preview, primary CTA, secondary buttons, currency bar, close button.
- States: normal, selected, disabled, pressed, alert, empty, locked, maxed.

Slicing output:
- Show the full screen mockup plus a separate asset breakdown sheet.
- Break out panel frame, buttons, slot frames, tabs, badges, icons, dividers, progress bars, and notification markers.
- Use numbered placeholder labels instead of final localized text.
- Keep touch targets clear and leave safe areas for phone notches and platform overlays.

Art direction:
- UI mood: [survival utilitarian / cozy fantasy / sci-fi tactical / premium gacha / casual puzzle].
- Shape language, border weight, texture density, color hierarchy, rarity color rules.

Acceptance checks:
- Every repeated widget can become a reusable prefab/component.
- Primary action is visually dominant.
- UI remains readable with translated text length changes.
- Icon and button states are distinguishable at mobile size.

Negative constraints:
- No baked-in unreadable copy.
- No decorative clutter over tap targets.
- No one-off ornament that cannot be sliced or reused.
~~~

---

<a name="tpl-icon-atlas"></a>
## Game Icon Atlas

Use this for consistent ability, item, currency, badge, resource, and menu icon sets.

~~~text
Create a game icon atlas for [icon family] in [game genre].

Production owner and downstream use:
- Downstream users: UI artist, item designer, economy designer, engine integrator.
- Final icon sizes: [32, 64, 128, 256 px] with source drawn larger.
- Atlas grid: [4x4 / 6x6 / 8x8], one centered icon per cell.

Icon set:
- Families by row or column: [weapons, armor, potions, resources, currencies, skills, badges].
- Count: [number] icons.
- Visual grammar: [camera angle], [outline style], [background frame], [rarity frame], [material rendering].
- Rarity or state colors: common, rare, epic, legendary / locked, active, disabled.

Output format:
- Contact sheet with clean grid and equal padding.
- Transparent-background version preferred, plus preview with neutral checker or dark background if useful.
- Each icon should have strong silhouette, centered subject, and no dependency on tiny text.

Acceptance checks:
- Meaning is readable at 32 or 64 px.
- Same camera angle and lighting across the full set.
- Frame, rarity color, and item silhouette are visually separated.
- Icons can be sliced into equal cells.

Negative constraints:
- No mixed perspective in the same atlas.
- No tiny labels or numbers as the main identifier.
- No excessive details that collapse at small size.
~~~

---

<a name="tpl-tilemap-atlas"></a>
## Tilemap Atlas

Use this for terrain tiles, modular floors, roads, walls, overlays, decals, and biome variants.

~~~text
Create an engine-ready tilemap atlas for [biome / dungeon / city / battlefield] in [game genre].

Production owner and downstream use:
- Downstream users: environment artist, level designer, technical artist, Unity/Cocos tilemap integrator.
- Target projection: [top-down / isometric / side-view platformer].
- Tile size: [32x32 / 64x64 / 128x128 / custom].
- Grid layout: equal cells, row and column alignment visible.

Tile families:
- Base terrain: [grass, dirt, stone, road, water, lava, floor].
- Edge transitions: straight edges, inner corners, outer corners, T-junctions, cross junctions.
- Gameplay markers: walkable, blocked, hazard, resource, spawn, interactable.
- Variants: clean, cracked, mossy, damaged, wet, decorated.
- Decals and overlays: shadows, footprints, cracks, plants, rubble.

Output layout:
- Atlas sheet with modular tiles.
- Small sample assembled map in one corner to prove edge compatibility.
- Optional collision/readability overlay using simple colored markers outside the final tile area.

Art direction:
- [Stylized / realistic / pixel art / hand-painted], consistent lighting direction, scale, texture density, and color hierarchy.

Acceptance checks:
- Tiles connect seamlessly on all required edges.
- Walkable and blocked spaces are visually distinct.
- Repetition looks acceptable after several tiles.
- Projection does not mix top-down and isometric rules.

Negative constraints:
- No single painted environment that cannot tile.
- No shadows that unintentionally expose cell boundaries.
- No inconsistent scale between props and terrain.
~~~

---

<a name="tpl-environment-layout"></a>
## Environment Layout Sheet

Use this for a playable space: level, hub, dungeon room, combat arena, base, overworld region, or resource node area.

~~~text
Create a game environment layout sheet for [level/area name] in [game genre/platform].

Production owner and downstream use:
- Downstream users: concept artist, level designer, environment artist, narrative designer, engine integrator.
- Camera: [top-down / isometric / side-scrolling / third-person / fixed tactical].
- Player scale reference: [character height, grid size, building footprint, vehicle size].

Playable layout:
- Entry points, exit points, main route, optional route, loopback, landmark, objective location.
- Spawn zones, combat encounter zones, resource nodes, interactables, blockers, cover, hazards, treasure or reward points.
- Foreground blockers, navigable space, background set dressing, UI-safe camera frame.

Output layout:
- Version A: annotated blockout/layout view with readable labels and simple symbols.
- Version B: mood/color pass showing final atmosphere and art direction.
- Include scale guide and camera crop guide.

Art direction:
- World/faction/biome: [details].
- Mood: [tense, cozy, ruined, sacred, tactical, playful].
- Asset reuse plan: modular props, landmark assets, background pieces, repeated decals.

Acceptance checks:
- Route and interaction hierarchy are readable at a glance.
- Landmarks support player navigation.
- Combat or traversal spaces have usable scale.
- Scene can be decomposed into reusable assets.

Negative constraints:
- No purely atmospheric landscape with no gameplay information.
- No hidden objective or ambiguous route.
- No impossible scale relationships.
~~~

---

<a name="tpl-prop-equipment-turnaround"></a>
## Prop & Equipment Turnaround

Use this for weapons, armor, loot, consumables, vehicles, interactables, crafting materials, and world props.

~~~text
Create a production turnaround sheet for [prop/equipment name] in [game genre].

Production owner and downstream use:
- Downstream users: concept artist, modeler, animator, item designer, UI icon artist.
- Asset type: [weapon / armor / consumable / crafting material / interactable prop / vehicle].
- Gameplay function: [damage type, stat bonus, interaction, rarity, crafting recipe, quest use].

Construction views:
- Front, side, back, top or detail views as needed.
- Scale next to a hand, character silhouette, grid tile, or inventory slot.
- Material swatches and wear/damage variants.
- Grip points, attach points, moving parts, VFX sockets, danger/sharp areas.

Output layout:
- Clean isolated object render.
- Construction callouts with numbered labels.
- Optional in-context thumbnail showing how it appears in hand, on the ground, in inventory, or in the world.
- Optional icon crop suggestion.

Art direction:
- [Faction], [rarity tier], [material language], [shape language], [palette], [rendering style].

Acceptance checks:
- Modeler can understand volume, material, and silhouette.
- Animator can identify grip or attach points.
- Item designer can identify gameplay function and rarity.
- Icon artist can crop a readable inventory icon.

Negative constraints:
- No single dramatic angle that hides construction.
- No decoration blocking the grip or socket.
- No rarity color conflict with the inventory system.
~~~

---

<a name="tpl-vfx-sequence"></a>
## VFX Sequence Sheet

Use this when an effect needs readable gameplay timing: cast, projectile, impact, buff, aura, trail, or cleanup.

~~~text
Create a gameplay VFX sequence sheet for [skill/effect name] in [game genre].

Production owner and downstream use:
- Downstream users: VFX artist, combat designer, animator, technical artist.
- Skill role: [telegraph / cast / projectile / impact / area hazard / buff / heal / pickup / ambient].
- Damage or element type: [fire, ice, poison, holy, kinetic, electric, faction color].
- Camera distance and background conditions: [mobile combat / dark dungeon / bright overworld / UI overlay].

Timing phases:
- Anticipation or warning.
- Charge or cast.
- Travel or expansion.
- Impact or active hit moment.
- Linger or damage-over-time area.
- Dissipate or cleanup.

Output layout:
- Left-to-right phase sheet with equal cells and readable phase labels.
- Alpha-friendly effect on neutral background.
- Optional preview on dark and light map backgrounds.
- Show centerline, hit direction, area radius, and priority focal point when useful.

Art direction:
- Shape language, color ownership, particle density, edge softness, glow amount, and contrast level.

Acceptance checks:
- Players can read danger, timing, and direction quickly.
- Effect does not cover enemies, UI, or hit feedback for too long.
- Active frames are visually stronger than buildup and cleanup.
- Color does not conflict with another damage type or faction.

Negative constraints:
- No random particle cloud without phase structure.
- No dense smoke hiding gameplay targets.
- No excessive bloom that destroys silhouette readability.
~~~

---

<a name="tpl-monster-combat-readability"></a>
## Monster Combat Readability Sheet

Use this for enemies and bosses whose visuals must support encounter design.

~~~text
Create a monster combat readability sheet for [enemy/boss name] in [game genre].

Production owner and downstream use:
- Downstream users: concept artist, animator, combat designer, VFX artist, modeler.
- Enemy tier: [grunt / elite / mini-boss / boss / raid boss].
- Size class and camera distance: [small / medium / huge], [mobile isometric / third-person / side-view].
- Combat role: [charger / sniper / summoner / tank / ambusher / area-control boss].

Design requirements:
- Idle silhouette and readable body mass.
- Attack wind-up poses for each major attack.
- Weak point callouts and protected armor zones.
- Hit reaction, stagger, enraged phase, damaged phase, death or dissolve cue.
- Optional danger zone or attack arc overlay for design handoff.

Output layout:
- Main monster view plus side/back views if model handoff matters.
- Silhouette strip at gameplay camera size.
- Attack telegraph mini-poses and phase variant thumbnails.
- Callouts for weak points, weapons, limbs, VFX sockets, and hit zones.

Art direction:
- Faction/biome origin, material language, color ownership, horror/fantasy/sci-fi level, readability priority.

Acceptance checks:
- Player can identify attack direction before impact.
- Weak point is readable without relying on tiny detail.
- Boss phases feel related but clearly escalated.
- Size and threat level are clear from silhouette.

Negative constraints:
- No impressive shape that hides gameplay direction.
- No weak point buried in noisy textures.
- No unrelated phase forms unless the design explicitly requires transformation.
~~~

---

<a name="tpl-building-upgrade-set"></a>
## Building Upgrade Set

Use this for base, settlement, shop, factory, tower, defense, and resource buildings across multiple tiers.

~~~text
Create a building upgrade set for [building name/function] in [game genre].

Production owner and downstream use:
- Downstream users: environment artist, level designer, economy designer, UI icon artist, engine integrator.
- Building function: [resource production / defense / shop / healing / crafting / housing / command center].
- Footprint: [1x1 / 2x2 / 3x3 / custom grid].
- Camera projection: [isometric / top-down / side-view / orthographic 3D].

Upgrade tiers:
- Tier count: [3 / 5 / custom].
- Tier progression: silhouette complexity, height, materials, lights, banners, machinery, faction marks.
- Required states: normal, construction, damaged, disabled, max level.
- Optional thumbnail/icon crop for building menu.

Output layout:
- Row of upgrade tiers with consistent footprint, camera angle, lighting, and scale.
- Small footprint guide and entrance/interactable zone marker.
- Material and faction callouts.
- Optional in-map preview showing nearby road/path/grid relationship.

Art direction:
- Biome, faction, tech level, color hierarchy, readability at strategy-camera distance.

Acceptance checks:
- Function is readable before reading text.
- Tier upgrades feel incremental and satisfying.
- Footprint and entrance direction stay consistent unless noted.
- Building can sit on the intended grid without perspective mismatch.

Negative constraints:
- No random footprint changes between tiers.
- No decorative additions that hide the building function.
- No scale drift across the upgrade row.
~~~

---

<a name="tpl-store-asset-pack"></a>
## Store Asset Pack

Use this for app-store screenshots, Steam capsules, social ads, event banners, and key-art variants.

~~~text
Create a game store and marketing asset pack for [game name / event / feature].

Production owner and downstream use:
- Downstream users: marketing artist, UA designer, store listing owner, community manager.
- Product promise to show honestly: [core mechanic / battle fantasy / base building / story moment / collection loop].
- Target audience and platform: [mobile casual / Steam survival / premium RPG / strategy live ops].

Required formats:
- 16:9 key art.
- 9:16 vertical ad composition.
- 1:1 social square.
- Steam capsule or store banner format if relevant.
- Store screenshot composition with UI-safe framing if relevant.

Composition rules:
- Reserve safe zones for logo, CTA, rating badge, platform overlays, and localized headline.
- Show actual game elements: character, enemy, reward, UI moment, core mechanic, environment, progression.
- Provide clean art-only version and guide version with crop-safe overlays.
- Keep faces, reward objects, and main action inside all crop-safe zones.

Art direction:
- Mood, palette, lighting, character focus, action beat, value proposition, seasonal/event visual rules.

Acceptance checks:
- Image communicates the real gameplay promise in under 2 seconds.
- Composition works across listed aspect ratios.
- Text areas remain editable and localizable.
- Key object is not cropped out in mobile or capsule variants.

Negative constraints:
- No fake gameplay or misleading mechanics.
- No baked-in tiny text.
- No key face or reward outside safe crop.
~~~

---

<a name="tpl-art-style-guide"></a>
## Art Style Guide

Use this before generating many assets, or when a team needs a reusable visual standard.

~~~text
Create a game art style guide sheet for [project name / genre / platform].

Production owner and downstream use:
- Downstream users: art director, concept artists, UI artists, outsource vendors, prompt authors, reviewers.
- Asset families covered: characters, environments, props, UI, icons, VFX, marketing.
- Platform and camera constraints: [mobile/PC/console], [isometric/top-down/side-view/third-person].

Core style rules:
- Genre and audience: [cozy survival / tactical sci-fi / dark fantasy RPG / casual merge].
- Shape language: [rounded, angular, chunky, elegant, mechanical, organic].
- Line and edge treatment: [clean outline / painterly edge / no outline / pixel border].
- Palette: primary, secondary, accent, warning, rarity, enemy/friendly colors.
- Lighting and materials: light direction, contrast, texture density, roughness, glow/bloom limits.
- Camera and scale: asset viewing angle, character-to-prop scale, UI/icon readability size.

Output layout:
- Palette strip and material swatches.
- Character sample, prop sample, environment sample, UI panel sample, icon sample, VFX sample, marketing crop sample.
- Do examples and do-not examples with short numbered callouts.
- Final approval checklist.

Acceptance checks:
- Rules are specific enough for multiple artists or agents to reproduce.
- Visual language supports gameplay readability and UI clarity.
- Style can scale from single hero image to hundreds of assets.
- Localization and platform constraints are documented.

Negative constraints:
- No vague mood board without enforceable rules.
- No palette that fails UI or combat readability.
- No style rule that only works for a single poster image.
~~~
