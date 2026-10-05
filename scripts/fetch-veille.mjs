// ============================================================================
//  Veille automatisée — agrège des flux RSS/Atom de sécurité & sysadmin et
//  écrit src/data/veille-feed.json. Aucune dépendance externe (Node 20+).
//  Exécuté chaque jour par GitHub Actions (.github/workflows/veille.yml).
// ============================================================================
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'veille-feed.json');

// Sources de veille (FR, sécurité / systèmes & réseaux). Tolérant aux pannes.
const FEEDS = [
  { source: 'CERT-FR · Avis', url: 'https://www.cert.ssi.gouv.fr/avis/feed/', theme: 'Vulnérabilités' },
  { source: 'CERT-FR · Alertes', url: 'https://www.cert.ssi.gouv.fr/alerte/feed/', theme: 'Alertes' },
  { source: 'LeMagIT', url: 'https://www.lemagit.fr/rss/securite.xml', theme: 'Sécurité' },
  { source: 'Le Monde Informatique', url: 'https://www.lemondeinformatique.fr/flux-rss/thematique/securite/rss.xml', theme: 'Sécurité' },
];

const MAX_ITEMS = 24;
const MAX_PER_FEED = 8;

function decode(s = '') {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/\s+/g, ' ')
    .trim();
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? m[1] : '';
}

function parseItems(xml, feed) {
  const items = [];
  const isAtom = /<entry[\s>]/i.test(xml) && !/<item[\s>]/i.test(xml);
  const re = isAtom ? /<entry[\s>][\s\S]*?<\/entry>/gi : /<item[\s>][\s\S]*?<\/item>/gi;
  const blocks = xml.match(re) || [];
  for (const block of blocks.slice(0, MAX_PER_FEED)) {
    const title = decode(tag(block, 'title'));
    let link = '';
    if (isAtom) {
      const lm = block.match(/<link[^>]*href="([^"]+)"[^>]*\/?>/i);
      link = lm ? lm[1] : '';
    } else {
      link = decode(tag(block, 'link'));
    }
    const rawDate = tag(block, 'pubDate') || tag(block, 'updated') || tag(block, 'published') || tag(block, 'dc:date');
    const d = new Date(decode(rawDate));
    const iso = isNaN(d.getTime()) ? null : d.toISOString();
    if (title && link) items.push({ title, link, date: iso, source: feed.source, theme: feed.theme });
  }
  return items;
}

async function fetchFeed(feed) {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    const res = await fetch(feed.url, {
      signal: ctrl.signal,
      headers: { 'User-Agent': 'veille-bot/1.0 (+https://wenselreyes.tech)', Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml' },
    });
    clearTimeout(t);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const xml = await res.text();
    return parseItems(xml, feed);
  } catch (e) {
    console.warn(`[veille] échec ${feed.source} : ${e.message}`);
    return [];
  }
}

const all = [];
for (const feed of FEEDS) all.push(...(await fetchFeed(feed)));

// Dédoublonnage par lien, tri par date décroissante, plafonnement.
const seen = new Set();
const items = all
  .filter((it) => (seen.has(it.link) ? false : (seen.add(it.link), true)))
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  .slice(0, MAX_ITEMS);

const payload = { updated: new Date().toISOString(), count: items.length, items };
await writeFile(OUT, JSON.stringify(payload, null, 2) + '\n', 'utf8');
console.log(`[veille] ${items.length} entrées écrites dans ${OUT}`);
