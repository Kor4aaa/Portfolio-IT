// @ts-check
import { defineConfig } from 'astro/config';

// Site statique, déployé sur le domaine personnalisé (CNAME).
export default defineConfig({
  site: 'https://wenselreyes.tech',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
