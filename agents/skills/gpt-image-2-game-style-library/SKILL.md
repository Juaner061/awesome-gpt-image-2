---
name: gpt-image-2-game-style-library
description: Choose GPT-Image2 / gpt-image-2 game art prompt templates for characters, environments, props, UI/HUD, icons, VFX, maps, card art, monsters, buildings, key art, and sprite sheets. Use when an agent needs to create, rewrite, classify, or improve image-generation prompts for game development assets, game marketing images, production reference sheets, mobile/PC game UI, or reusable game art direction.
---

# GPT-Image2 Game Style Library

Use this skill to turn a game-art intent into a production-ready GPT-Image2 prompt using this fork's game-focused prompt template library.

## Reference

- Read `references/style-library.md` before choosing a template or style.
- The reference is generated from `data/style-library.json` in the repository.
- Prefer the reference over memory when template names, categories, covers, style tags, production contexts, or pitfalls matter.

## Workflow

1. Detect the user's language and answer in that language.
2. Identify the target game asset type: character, environment, prop/equipment, UI/HUD, icon, VFX, map/tile, card/gacha art, monster, building, key art/store asset, or sprite/animation sheet.
3. Identify production context: concept art, production reference, marketing, live ops, mobile game, RPG, strategy, survival, casual, or another game genre.
4. Match the request in this order: asset category, production context, art-direction tag, then nearest example cases.
5. If one template is clearly strongest, use it directly. If several are plausible, present 2-3 options with short reasons and ask the user to choose.
6. Build the final prompt with these blocks:
   - game asset and intended use
   - subject, world, faction, and gameplay function
   - composition, layout, camera, and production format
   - art direction, materials, palette, and rendering style
   - usability constraints such as transparent background, readable silhouette, safe crop, grid, frame count, or no text
   - negative constraints and common failure modes
7. Include the selected template name and any useful example case IDs.

## Output Defaults

- Provide a copyable prompt first.
- Keep constraints concrete: exact asset type, aspect ratio, camera, background rule, text rule, and production-use requirement.
- For Chinese requests, write the final prompt in Chinese unless the user asks for English.
- For English requests, write the final prompt in English unless the user asks for Chinese.
- When the user asks for multiple concepts, reuse one template and vary subject, faction, palette, gameplay role, and silhouette.
- For production assets, favor clean backgrounds, consistent lighting, strong silhouettes, and extraction-friendly layouts over decorative scene complexity.
- For marketing assets, include crop-safe areas, logo-safe space, and the honest gameplay promise.

## Maintenance

When the source library changes, run:

```bash
npm run generate:style-skill
```

To install the skill into local agent skill folders, run:

```bash
npm run install:skill codex
```

