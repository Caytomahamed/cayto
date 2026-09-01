// Canonical, single source of truth for technology "logo" colors.
// Anywhere a tech tag or skill icon needs a background color — project
// tag pills, the project detail page, the About page skills grid — all
// pull from this same map, so a given technology looks the same
// everywhere on the site instead of drifting between pages.
// Keys are normalized (see normalizeKey below) so "redux-toolkit",
// "Redux Toolkit", and "reduxtoolkit" all resolve to the same entry
// regardless of how a given project's data happens to spell the tag.
export const techColors = {
  bootstrap: '#7952B3',
  javascript: '#F7DF1E',
  js: '#F7DF1E',
  css: '#1572B6',
  scss: '#CC6699',
  sass: '#CC6699',
  tailwindcss: '#06B6D4',
  tailwind: '#06B6D4',
  reactjs: '#61DAFB',
  react: '#61DAFB',
  reactnative: '#61DAFB',
  expo: '#000020',
  nodejs: '#339933',
  node: '#339933',
  expressjs: '#000000',
  express: '#000000',
  php: '#777BB4',
  laravel: '#FF2D20',
  reduxtoolkit: '#764ABC',
  redux: '#764ABC',
  materialui: '#007FFF',
  mui: '#007FFF',
  sqlite: '#003B57',
  mysql: '#4479A1',
  mongodb: '#47A248',
  postgresql: '#336791',
  postgres: '#336791',
  git: '#F05032',
  github: '#181717',
  figma: '#F24E1E',
  knexjs: '#D2232A',
  knex: '#D2232A',
  api: '#FF6C37',
  html: '#E34F26',
  html5: '#E34F26',
  typescript: '#3178C6',
  ts: '#3178C6',
  socketio: '#010101',
  socket: '#010101',
  redis: '#DC382D',
  nextjs: '#000000',
  next: '#000000',
  r2: '#F38020',
  cloudflare: '#F38020',
  railway: '#7C3AED',
  docker: '#2496ED',
  nestjs: '#E0234E',
  nest: '#E0234E',
  preview: '#FF6B35',
  leaflet: '#199900',
  chartjs: '#FF6384',
  multer: '#FF6C37',
};

// Strip everything but letters/digits and lowercase, so "redux-toolkit",
// "Redux Toolkit", and "reduxtoolkit" all hit the same map entry.
const normalizeKey = (tag) => (tag || '').toLowerCase().replace(/[^a-z0-9]/g, '');

// Deterministic fallback for a tag that isn't in the curated map above —
// so a new/unexpected tech name still gets its own distinct, readable
// color instead of silently collapsing to the site's default purple.
const hashHue = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash % 360;
};

// Pick readable text (near-black or white) for a given hex background,
// using perceived brightness so light logo colors (React cyan,
// JavaScript yellow, Tailwind cyan) don't end up with unreadable
// white-on-light text.
export const getContrastText = (hex) => {
  if (!hex || !hex.startsWith('#')) return '#fff';
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000 / 255;
  return brightness > 0.6 ? '#151515' : '#fff';
};

// One-stop lookup: normalizes the tag, resolves its curated brand color
// (or a deterministic fallback color if it isn't in the map yet), and
// returns a background/text pair that's always readable.
export const getTagStyle = (tag) => {
  const key = normalizeKey(tag);
  const curated = techColors[key];

  if (curated) {
    return { bg: curated, text: getContrastText(curated) };
  }

  // Fixed lightness (42%) is dark enough that white text always reads
  // clearly, so no per-color contrast check is needed for the fallback.
  return { bg: `hsl(${hashHue(key)}, 55%, 42%)`, text: '#fff' };
};
