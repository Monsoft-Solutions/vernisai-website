import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site URL
const SITE_URL = 'https://vernis.ai';

// Define all routes in your application
const routes = [
    '/',
    '/features',
    '/features/actions',
    '/features/pipelines',
    '/features/agents',
    '/features/knowledge-base',
    '/use-cases',
    '/use-cases/task-automation',
    '/use-cases/knowledge-management',
    '/use-cases/content-creation',
    '/use-cases/meeting-enhancement',
    '/use-cases/project-management',
    '/use-cases/personal-assistant',
    '/use-cases/learning-acceleration',
    '/use-cases/data-analysis',
    '/waitlist',
];

// Generate sitemap XML content
function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    routes.forEach((route) => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${SITE_URL}${route}</loc>\n`;
        sitemap += `    <lastmod>${today}</lastmod>\n`;
        sitemap += '    <changefreq>weekly</changefreq>\n';
        sitemap += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
        sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';

    return sitemap;
}

// Write sitemap to the dist directory
function writeSitemap() {
    const sitemap = generateSitemap();
    const distDir = path.resolve(__dirname, '../dist');

    // Create dist directory if it doesn't exist
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
    }

    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
}

// Execute the function
writeSitemap();
