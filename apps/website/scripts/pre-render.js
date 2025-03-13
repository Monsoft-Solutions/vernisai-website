// @ts-check
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the dist directory
const distDir = path.resolve(__dirname, '../dist');

// Fallback routes if dynamic import fails
const fallbackRoutes = [
    '/',
    '/waitlist',
    '/features',
    '/pricing',
    '/features/actions',
    '/features/workflows',
    '/features/agents',
    '/features/knowledge-base',
    '/use-cases',
    '/privacy',
    '/terms',
    '/cookies',
];

/**
 * Pre-renders static HTML files for specified routes
 */
async function preRenderRoutes() {
    console.warn('Starting pre-rendering process...');

    try {
        // Try to dynamically import the routes module
        let routes = [];

        try {
            // This path might not exist, so we wrap it in a try-catch
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
                    routes = routesModule.getPrerenderRoutes();
                }
            }
        } catch (importError) {
            console.warn(
                'Could not import routes module:',
                importError.message,
            );
        }

        if (!routes || routes.length === 0) {
            console.warn(
                'No routes found to pre-render. Using fallback routes.',
            );
            routes = fallbackRoutes;
        }

        console.warn(`Found ${routes.length} routes to pre-render`);

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

        // Fallback to manual pre-rendering of known routes
        console.warn('Using fallback pre-rendering approach...');

        // Read the index.html template
        const indexHtmlPath = path.join(distDir, 'index.html');
        const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

        // Create directories and HTML files for each route
        for (const route of fallbackRoutes) {
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

                console.warn(
                    `Pre-rendered (fallback): ${route} -> ${htmlFilePath}`,
                );
            } catch (error) {
                console.error(
                    `Error pre-rendering fallback route ${route}:`,
                    error,
                );
            }
        }
    }
}

// Run the pre-rendering process
preRenderRoutes().catch((error) => {
    console.error('Pre-rendering failed:', error);
    process.exit(1);
});
