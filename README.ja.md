# GPT-Image2 Game Production Template Lab

This fork removed the original broad case gallery and now focuses on game-production prompt templates.

## Included

- 12 game-development deliverable templates in [docs/templates.md](docs/templates.md)
- A template-first preview website
- Codex/Claude skill at [agents/skills/gpt-image-2-game-style-library/SKILL.md](agents/skills/gpt-image-2-game-style-library/SKILL.md)
- Library data in [data/style-library.json](data/style-library.json)
- Empty compatibility case data in [data/cases.json](data/cases.json)

## Run Locally

~~~bash
npm install
npm run dev -- --host 127.0.0.1 --port 5173
npm run build
npm run pack:skill
~~~

The original `docs/gallery*.md` files and `data/images/case*.jpg/png` assets were intentionally removed. New content should be rebuilt as game-production templates or curated game-specific references.

## License

MIT. See [LICENSE](LICENSE).
