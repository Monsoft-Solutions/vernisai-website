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
// Import the generatePrerenderedHtml function from prerender-standalone
// Note: This assumes you've moved the necessary functions to a shared module
// For now, we'll reimplement the route metadata and HTML generation here

// Route metadata configurations for SEO
const routeMetadata = {
    '/': {
        title: 'VernisAI - AI-Powered No-Code Workflow Automation',
        description:
            'Build, automate, and deploy AI workflows without code. Connect your tools and data to create powerful automations with VernisAI.',
        image: '/images/vernisai-logo.png',
    },
    '/features': {
        title: 'VernisAI Features - AI-Powered Workflow Automation',
        description:
            "Explore the powerful features of VernisAI's no-code AI workflow automation platform.",
        image: '/images/vernisai-logo.png',
    },
    '/features/actions': {
        title: 'VernisAI Actions - Connect Your Tools and Services',
        description:
            'Explore integrations and actions to connect your tools and services with VernisAI.',
        image: '/images/vernisai-logo.png',
    },
    '/features/workflows': {
        title: 'VernisAI Workflows - Create Powerful AI Automations',
        description:
            'Build automated workflows that combine your tools, data, and AI capabilities.',
        image: '/images/vernisai-logo.png',
    },
    '/features/agents': {
        title: 'VernisAI Agents - Intelligent Automation Assistants',
        description:
            'Deploy AI agents that autonomously execute tasks and workflows for your business.',
        image: '/images/vernisai-logo.png',
    },
    '/features/knowledge-base': {
        title: 'VernisAI Knowledge Base - Train AI on Your Data',
        description:
            'Create custom knowledge bases to train AI on your business data and documents.',
        image: '/images/vernisai-logo.png',
    },
    '/use-cases': {
        title: 'VernisAI Use Cases - Business AI Solutions',
        description:
            'Discover how businesses use VernisAI to automate workflows and improve productivity.',
        image: '/images/vernisai-logo.png',
    },
    '/pricing': {
        title: 'VernisAI Pricing - AI Workflow Automation Plans',
        description:
            "View pricing plans for VernisAI's no-code AI workflow automation platform.",
        image: '/images/vernisai-logo.png',
    },
    '/waitlist': {
        title: 'Join the VernisAI Waitlist',
        description:
            "Sign up for early access to VernisAI's no-code AI workflow automation platform.",
        image: '/images/vernisai-logo.png',
    },
    '/privacy': {
        title: 'Privacy Policy - VernisAI',
        description:
            'Read the VernisAI privacy policy to understand how we handle your data.',
        image: '/images/vernisai-logo.png',
    },
    '/terms': {
        title: 'Terms of Service - VernisAI',
        description:
            'View the terms of service for using the VernisAI platform.',
        image: '/images/vernisai-logo.png',
    },
    '/cookies': {
        title: 'Cookie Policy - VernisAI',
        description:
            'Learn about how VernisAI uses cookies and similar technologies.',
        image: '/images/vernisai-logo.png',
    },
};

// Generate dynamic route metadata
function generateDynamicRouteMetadata() {
    const dynamicMetadata = {};

    // Action category metadata
    actionCategoryIds.forEach((categoryId) => {
        const route = `/features/actions/${categoryId}`;
        const formattedCategory = categoryId
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        dynamicMetadata[route] = {
            title: `${formattedCategory} - VernisAI Actions`,
            description: `Explore ${formattedCategory} actions and integrations for your AI workflows.`,
            image: '/images/vernisai-logo.png',
        };
    });

    // Use case metadata
    useCaseIds.forEach((useCaseId) => {
        const route = `/use-cases/${useCaseId}`;
        const formattedUseCase = useCaseId
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Custom images for use cases (when available)
        const useSpecificImage = `/images/use-cases/${useCaseId}.png`;

        dynamicMetadata[route] = {
            title: `${formattedUseCase} - VernisAI Use Case`,
            description: `Learn how VernisAI can help with ${formattedUseCase} in your business.`,
            image: useSpecificImage,
        };
    });

    return dynamicMetadata;
}

// Combine static and dynamic metadata
const allMetadata = {
    ...routeMetadata,
    ...generateDynamicRouteMetadata(),
};

// Generate HTML with proper meta tags for SEO
function generatePrerenderedHtml(route, jsFiles = [], cssFiles = []) {
    // Get metadata for the current route, or use defaults
    const metadata = allMetadata[route] || {
        title: 'VernisAI - AI-Powered No-Code Workflow Automation',
        description:
            'Build, automate, and deploy AI workflows without code. Connect your tools and data to create powerful automations with VernisAI.',
        image: '/images/vernisai-logo.png',
    };

    const { title, description, image } = metadata;
    const fullTitle = title.includes('VernisAI')
        ? title
        : `${title} | VernisAI`;
    const siteUrl = 'https://vernis.ai';
    const fullImageUrl = image.startsWith('http')
        ? image
        : `${siteUrl}${image}`;
    const canonicalUrl = `${siteUrl}${route}`;

    // Generate script tags for JS files
    const scriptTags = jsFiles
        .map((file) => `<script type="module" src="${file}"></script>`)
        .join('\n    ');

    // Generate link tags for CSS files
    const cssTags = cssFiles
        .map((file) => `<link rel="stylesheet" href="${file}">`)
        .join('\n    ');

    // Create HTML template with comprehensive meta tags
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${description}">
    <title>${fullTitle}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${fullTitle}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${fullImageUrl}">
    <meta property="og:site_name" content="VernisAI">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${fullTitle}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${fullImageUrl}">
    
    ${cssTags}
</head>
<body>
    <div id="root"></div>
    ${scriptTags}
</body>
</html>`;
}

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

        // Scan the dist directory for JS and CSS files
        const assetsDir = path.join(distDir, 'assets');
        const assetFiles = fs.readdirSync(assetsDir);

        const jsFiles = assetFiles
            .filter((file) => file.endsWith('.js'))
            .map((file) => `/assets/${file}`);

        const cssFiles = assetFiles
            .filter((file) => file.endsWith('.css'))
            .map((file) => `/assets/${file}`);

        // Create directories and HTML files for each route
        for (const route of routes) {
            try {
                // For the root route, update the existing index.html
                if (route === '/') {
                    const htmlContent = generatePrerenderedHtml(
                        route,
                        jsFiles,
                        cssFiles,
                    );
                    fs.writeFileSync(
                        path.join(distDir, 'index.html'),
                        htmlContent,
                    );
                    console.warn(
                        'Updated root index.html with proper meta tags',
                    );
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

                // Generate HTML with proper meta tags for SEO
                const htmlContent = generatePrerenderedHtml(
                    route,
                    jsFiles,
                    cssFiles,
                );

                // Write the HTML file
                const htmlFilePath = path.join(dirPath, 'index.html');
                fs.writeFileSync(htmlFilePath, htmlContent);

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
