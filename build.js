const fs = require('fs');
const path = require('path');
const root = __dirname;
const out = path.join(root, 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const item of ['index.html', 'style.css', 'script.js', 'public']) {
  const from = path.join(root, item);
  if (!fs.existsSync(from)) continue;
  fs.cpSync(from, path.join(out, item), { recursive: true });
}
console.log('Padhai Point static site built successfully into dist/.');
