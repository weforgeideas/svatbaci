import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ─────────────────────────────────────────────────────────────
// Hosting: zatím GitHub Pages "project page"
//   → https://weforgeideas.github.io/svatbaci/
//
// Až koupíš doménu (svatbaci.com):
//   1) smaž řádek `base: '/svatbaci',`
//   2) změň `site` na 'https://svatbaci.com'
//   3) přidej soubor public/CNAME s obsahem: svatbaci.com
// Obrázky se opraví samy (používají import.meta.env.BASE_URL).
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://weforgeideas.github.io',
  base: '/svatbaci',
});
