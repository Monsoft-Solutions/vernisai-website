// @ts-check
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/**
 * Enhanced Pre-rendering Script for VernisAI Website
 *
 * This script generates static HTML files for all routes, including:
 * - Static routes defined in the application
 * - Dynamic routes like action categories and use cases
 *
 * It works together with the sitemap generator to ensure all pages
 * are properly pre-rendered for SEO optimization and faster loading.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the dist directory
const distDir = path.resolve(__dirname, '../dist');

// Define action categories for the dynamic routes
// IMPORTANT: Keep this list in sync with actionCategoryIds in generate-sitemap.js
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

// Define use case IDs for the dynamic routes
// IMPORTANT: Keep this list in sync with useCaseIds in generate-sitemap.js
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

// Base static routes (also defined in routes.js)
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

// Combine all routes to pre-render
const allRoutes = [...staticRoutes, ...generateDynamicRoutes()];

/**
 * Pre-renders static HTML files for all routes
 */
async function preRenderRoutes() {
    console.warn('Starting enhanced pre-rendering process...');

    try {
        // Try to import routes from the built application
        let routes = [];

        try {
            // Look for the routes file in the built assets
            const routesModulePath = path.resolve(distDir, 'assets');
            const files = fs.readdirSync(routesModulePath);
            const routesFile = files.find(
                (file) => file.includes('routes') && file.endsWith('.js'),
            );

            if (routesFile) {
                const routesModule = await import(
                    path.join('file://', routesModulePath, routesFile)
                );

                if (routesModule.getPrerenderRoutes) {
                    // Get routes from the application's routing configuration
                    const applicationRoutes = routesModule.getPrerenderRoutes();
                    console.warn(
                        `Found ${applicationRoutes.length} routes from application configuration`,
                    );

                    // Add the application routes to our list
                    routes = [...new Set([...applicationRoutes, ...allRoutes])];
                }
            }
        } catch (importError) {
            console.warn(
                'Could not import routes module:',
                importError.message,
            );
        }

        // Fallback to our manually defined routes
        if (!routes || routes.length === 0) {
            console.warn('Using manually defined routes for pre-rendering');
            routes = allRoutes;
        }

        console.warn(
            `Pre-rendering ${routes.length} routes (${staticRoutes.length} static, ${routes.length - staticRoutes.length} dynamic)`,
        );

        // Read the index.html template
        const indexHtmlPath = path.join(distDir, 'index.html');
        const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

        // Create directories and HTML files for each route
        for (const route of routes) {
            try {
                // Skip the root route as it's already handled by index.html
                if (route === '/') {
                    console.warn('Skipping root route (/)');
                    continue;
                }

                // Create the directory structure
                const routePath = route.endsWith('/')
                    ? route.slice(0, -1)
                    : route;
                const dirPath = path.join(distDir, routePath.slice(1));

                if (!fs.existsSync(dirPath)) {
                    fs.mkdirSync(dirPath, { recursive: true });
                }

                // Write the HTML file
                const htmlFilePath = path.join(dirPath, 'index.html');
                fs.writeFileSync(htmlFilePath, indexHtml);

                console.warn(`Pre-rendered: ${route} -> ${htmlFilePath}`);
            } catch (error) {
                console.error(`Error pre-rendering route ${route}:`, error);
            }
        }

        console.warn('Pre-rendering completed successfully!');
    } catch (error) {
        console.error('Error during pre-rendering:', error);
        process.exit(1);
    }
}

// Run the pre-rendering process
preRenderRoutes().catch((error) => {
    console.error('Pre-rendering failed:', error);
    process.exit(1);
});
