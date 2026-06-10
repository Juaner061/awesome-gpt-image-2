# GPT-Image2 Game Production Template Lab

This fork removes the original cross-industry case gallery and rebuilds the project around game-development prompt templates.

## What Is Included

- 12 game-production deliverable templates in [docs/templates.md](docs/templates.md)
- A template-first web app for browsing and copying those templates
- A Codex/Claude skill at [agents/skills/gpt-image-2-game-style-library/SKILL.md](agents/skills/gpt-image-2-game-style-library/SKILL.md)
- Generated library data in [data/style-library.json](data/style-library.json)
- Empty case data in [data/cases.json](data/cases.json), kept only for compatibility with existing app and API code

## Template Set

- Character Production Sheet
- Sprite Animation Sheet
- UI Panel Slicing Sheet
- Game Icon Atlas
- Tilemap Atlas
- Environment Layout Sheet
- Prop & Equipment Turnaround
- VFX Sequence Sheet
- Monster Combat Readability Sheet
- Building Upgrade Set
- Store Asset Pack
- Art Style Guide

## Local Development

Double-click the Windows launcher:

~~~cmd
D:\My-Agent\start-gpt-image-game-lab.cmd
~~~

Or run manually:

~~~bash
npm install
npm run dev -- --host 127.0.0.1 --port 5173
~~~

Build and validate:

~~~bash
npm run build
npm run pack:skill
~~~

## Agent Skill

Use the local skill with requests like:

~~~text
Use gpt-image-2-game-style-library to create a production prompt for a mobile RPG UI panel slicing sheet.
~~~

The skill reference is generated from [data/style-library.json](data/style-library.json):

~~~bash
npm run generate:style-skill
~~~

## Notes

The original `docs/gallery*.md` files and `data/images/case*.jpg/png` assets were intentionally removed. New examples should be added as game-production templates or as deliberately curated game-specific references, not as a broad cross-industry gallery.

## License

MIT. See [LICENSE](LICENSE).
