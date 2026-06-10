import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outFile = join(root, 'data', 'cases.json');
const styleLibraryFile = join(root, 'data', 'style-library.json');
const styleLibrary = JSON.parse(readFileSync(styleLibraryFile, 'utf8'));
const repoUrl = styleLibrary.repository || 'https://github.com/Juaner061/awesome-gpt-image-2';

const payload = {
  repository: repoUrl,
  totalCases: 0,
  categories: styleLibrary.categories.map((category) => category.value).sort(),
  styles: styleLibrary.styles.map((style) => style.value).sort(),
  scenes: styleLibrary.scenes.map((scene) => scene.value).sort(),
  cases: []
};

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Generated empty case library at ${outFile}`);
