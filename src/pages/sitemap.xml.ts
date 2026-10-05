import type { APIRoute } from 'astro';
import { realisations } from '@data/realisations';
import { profil } from '@data/profil';

const SITE = profil.seo.url;

export const GET: APIRoute = () => {
  const staticPaths = ['/', '/referentiel', '/realisations', '/preuves', '/synthese', '/parcours', '/veille'];
  const realPaths = realisations.map((r) => `/realisations/${r.slug}`);
  const all = [...staticPaths, ...realPaths];
  const now = new Date().toISOString().slice(0, 10);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map((p) => `  <url>\n    <loc>${SITE}${p}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`)
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
