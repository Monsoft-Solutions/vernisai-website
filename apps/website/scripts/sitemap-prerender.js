// @ts-check
/**
 * Combined Sitemap and Prerender Script for VernisAI Website
 *
 * This script generates a sitemap.xml file and also pre-renders HTML files for all routes,
 * including dynamic routes like action categories and use cases.
 *
 * Run this script after the build process or independently.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Base paths
const baseDir = path.resolve(__dirname, '..');
const outputDir = path.resolve(baseDir, 'dist');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Define your site URL
const SITE_URL = 'https://vernis.ai';

// ============ ROUTE DEFINITIONS ============

// Define action categories for dynamic routes
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

// Define use case IDs for dynamic routes
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

// Static routes
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

// ============ ROUTE GENERATION ============

// Generate dynamic routes based on action categories and use cases
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

// Combine all routes
const allRoutes = [...staticRoutes, ...generateDynamicRoutes()];

// ============ UTILITIES ============

// Format a kebab-case string to Title Case
function formatTitle(kebabCase) {
    return kebabCase
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Get metadata for a route
function getRouteMetadata(route) {
    const metadata = {
        title: 'VernisAI - AI-Powered No-Code Workflow Automation',
        description:
            'Build, automate, and deploy AI workflows without code. Connect your tools and data to create powerful automations with VernisAI.',
    };

    // Set route-specific titles and descriptions
    if (route.includes('/features/actions/')) {
        const category = route.split('/').pop();
        const formattedCategory = formatTitle(category);
        metadata.title = `${formattedCategory} - VernisAI Actions`;
        metadata.description = `Explore ${formattedCategory} actions and integrations for your AI workflows.`;
    } else if (route.includes('/use-cases/')) {
        const useCase = route.split('/').pop();
        const formattedUseCase = formatTitle(useCase);
        metadata.title = `${formattedUseCase} - VernisAI Use Cases`;
        metadata.description = `Learn how VernisAI can help with ${formattedUseCase} in your business.`;
    } else if (route === '/features') {
        metadata.title = 'VernisAI Features - AI-Powered Workflow Automation';
        metadata.description =
            "Explore the powerful features of VernisAI's no-code AI workflow automation platform.";
    } else if (route === '/pricing') {
        metadata.title = 'VernisAI Pricing - AI Workflow Automation Plans';
        metadata.description =
            "View pricing plans for VernisAI's no-code AI workflow automation platform.";
    } else if (route === '/waitlist') {
        metadata.title = 'Join the VernisAI Waitlist';
        metadata.description =
            "Sign up for early access to VernisAI's no-code AI workflow automation platform.";
    }

    return metadata;
}

// Generate HTML for a route
function generateHtml(route) {
    const metadata = getRouteMetadata(route);

    // Create structured data based on route
    let structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'VernisAI',
        url: SITE_URL,
    };

    // Add specific structured data for products
    if (route.includes('/features/') || route.includes('/use-cases/')) {
        structuredData = {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: metadata.title,
            description: metadata.description,
            url: `${SITE_URL}${route}`,
            category: 'Software',
            brand: {
                '@type': 'Brand',
                name: 'VernisAI',
                logo: `${SITE_URL}/images/vernisai-logo.png`,
            },
            offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/ComingSoon',
                price: '29',
                priceCurrency: 'USD',
                priceValidUntil: '2025-12-31',
            },
        };
    }

    // Create HTML template
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${metadata.description}">
    <title>${metadata.title}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${SITE_URL}${route}">
    <meta property="og:title" content="${metadata.title}">
    <meta property="og:description" content="${metadata.description}">
    <meta property="og:image" content="${SITE_URL}/images/vernisai-logo.png">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${SITE_URL}${route}">
    <meta name="twitter:title" content="${metadata.title}">
    <meta name="twitter:description" content="${metadata.description}">
    <meta name="twitter:image" content="${SITE_URL}/images/vernisai-logo.png">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
    </script>
</head>
<body>
    <div id="root"></div>
    <script>
        window.location.href = '/#${route}';
    </script>
</body>
</html>`;
}

// ============ SITEMAP GENERATION ============

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

// ============ MAIN FUNCTIONS ============

// Generate sitemap and write to file
function writeSitemap() {
    console.log('Generating sitemap...');
    const sitemap = generateSitemap();

    fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemap);
    console.log(
        `Sitemap generated with ${allRoutes.length} URLs (${staticRoutes.length} static, ${allRoutes.length - staticRoutes.length} dynamic)`,
    );
}

// Pre-render all routes
function preRenderRoutes() {
    console.log('Pre-rendering all routes...');

    // Create HTML files for each route
    for (const route of allRoutes) {
        try {
            const routePath = route === '/' ? '' : route;
            const dirPath = path.join(outputDir, routePath.slice(1));

            // Create directory if it doesn't exist
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            // Generate HTML content
            const htmlContent = generateHtml(route);

            // Write the HTML file
            const htmlFilePath = path.join(dirPath, 'index.html');
            fs.writeFileSync(htmlFilePath, htmlContent);

            console.log(`Pre-rendered: ${route} -> ${htmlFilePath}`);
        } catch (error) {
            console.error(`Error pre-rendering route ${route}:`, error);
        }
    }

    console.log('Pre-rendering completed successfully!');
}

// ============ EXECUTION ============

// Run the sitemap generation and pre-rendering process
console.log('Starting sitemap generation and pre-rendering process...');
writeSitemap();
preRenderRoutes();
console.log('All done!');
