import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Enhanced Sitemap Generator
 *
 * This script generates a sitemap.xml file for the VernisAI website.
 * It includes both static routes and dynamic routes based on action categories and use cases.
 *
 * IMPORTANT: When adding new action categories or use cases to the application,
 * you must update the corresponding arrays below to ensure they're included in the sitemap.
 *
 * To run this script manually:
 * - node scripts/generate-sitemap.js
 *
 * The script is automatically run during the build process.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define action categories manually for the sitemap
// IMPORTANT: Keep this list in sync with actionCategories in src/data/index.ts
const actionCategoryIds = [
    'file-operations',
    'development-tools',
    'web-search',
    'communication',
    'smart-home',
    'ai-data',
    'marketing-social-media',
    'ecommerce',
    'task-project-management',
    'analytics-reporting',
    'notifications-alerts',
    'content-documentation',
];

// Define use case IDs manually for the sitemap
// IMPORTANT: Keep this list in sync with useCases in src/data/use-cases/index.ts
const useCaseIds = [
    'content-creation',
    'data-analysis',
    'social-media-management',
    'knowledge-management',
    'learning-acceleration',
    'personal-assistant',
    'project-management',
    'email-management',
    'customer-support',
    'schedule-management',
];

// Define your site URL
const SITE_URL = 'https://vernis.ai';

// Define static routes in your application
const staticRoutes = [
    '/',
    '/features',
    '/features/actions',
    '/features/workflows',
    '/features/agents',
    '/features/knowledge-base',
    '/use-cases',
    '/waitlist',
    '/pricing',
    '/privacy',
    '/terms',
    '/cookies',
];

// Generate dynamic routes based on the defined IDs
function generateDynamicRoutes() {
    const dynamicRoutes = [];

    // Add action category routes
    actionCategoryIds.forEach((categoryId) => {
        dynamicRoutes.push(`/features/actions/${categoryId}`);
    });

    // Add use case routes
    useCaseIds.forEach((useCaseId) => {
        dynamicRoutes.push(`/use-cases/${useCaseId}`);
    });

    return dynamicRoutes;
}

// Combine static and dynamic routes
const allRoutes = [...staticRoutes, ...generateDynamicRoutes()];

// Generate sitemap XML content
function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    allRoutes.forEach((route) => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${SITE_URL}${route}</loc>\n`;
        sitemap += `    <lastmod>${today}</lastmod>\n`;
        sitemap += '    <changefreq>weekly</changefreq>\n';
        // Homepage gets highest priority, dynamic pages get slightly lower priority
        const priority = route === '/' ? '1.0' : '0.8';
        sitemap += `    <priority>${priority}</priority>\n`;
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
    console.warn(
        `Sitemap generated with ${allRoutes.length} URLs (${staticRoutes.length} static, ${allRoutes.length - staticRoutes.length} dynamic)`,
    );
}

// Execute the function
writeSitemap();
