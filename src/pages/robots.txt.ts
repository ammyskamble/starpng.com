import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: string, sitemapXmlURL: string) => `
# StarPNG Robots.txt for Cloudflare Pages (starpng.pages.dev)
# Compliant with Google AdSense, Googlebot & Web Standards

User-agent: *
Allow: /
Disallow: /404/
Disallow: /500/

# Dedicated Google AdSense & Quality Crawlers
User-agent: Mediapartners-Google
Allow: /

User-agent: AdsBot-Google
Allow: /

User-agent: AdsBot-Google-Mobile
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

# Sitemap Locations
Sitemap: ${sitemapURL}
Sitemap: ${sitemapXmlURL}
`.trim() + '\n';

export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.href : 'https://starpng.pages.dev/';
  const sitemapURL = new URL('sitemap-index.xml', origin).href;
  const sitemapXmlURL = new URL('sitemap.xml', origin).href;

  return new Response(getRobotsTxt(sitemapURL, sitemapXmlURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};

