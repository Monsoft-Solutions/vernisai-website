// @ts-check
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/**
 * Standalone Pre-rendering Script for VernisAI Website
 *
 * This script creates a basic HTML file for each route, which will
 * load the JavaScript bundle and properly handle client-side rendering.
 *
 * It doesn't depend on the existing build process and can be run separately.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Base directory path
const baseDir = path.resolve(__dirname, '..');
const outputDir = path.resolve(baseDir, 'dist');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Define action categories for the dynamic routes
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

// Base static routes
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

// Generate basic HTML file for prerendering
function generatePrerenderedHtml(route) {
    // Extract page title and description based on route
    let title = 'VernisAI - AI-Powered No-Code Workflow Automation';
    let description =
        'Build, automate, and deploy AI workflows without code. Connect your tools and data to create powerful automations with VernisAI.';

    // Set route-specific titles and descriptions
    if (route.includes('/features/actions/')) {
        const category = route.split('/').pop();
        const formattedCategory = category
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        title = `${formattedCategory} - VernisAI Actions`;
        description = `Explore ${formattedCategory} actions and integrations for your AI workflows.`;
    } else if (route.includes('/use-cases/')) {
        const useCase = route.split('/').pop();
        const formattedUseCase = useCase
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        title = `${formattedUseCase} - VernisAI Use Cases`;
        description = `Learn how VernisAI can help with ${formattedUseCase} in your business.`;
    } else if (route === '/features') {
        title = 'VernisAI Features - AI-Powered Workflow Automation';
        description =
            "Explore the powerful features of VernisAI's no-code AI workflow automation platform.";
    } else if (route === '/pricing') {
        title = 'VernisAI Pricing - AI Workflow Automation Plans';
        description =
            "View pricing plans for VernisAI's no-code AI workflow automation platform.";
    } else if (route === '/waitlist') {
        title = 'Join the VernisAI Waitlist';
        description =
            "Sign up for early access to VernisAI's no-code AI workflow automation platform.";
    }

    // Create HTML template
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${description}">
    <title>${title}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://vernis.ai${route}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="https://vernis.ai/images/vernisai-logo.png">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://vernis.ai${route}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="https://vernis.ai/images/vernisai-logo.png">
    
    <!-- Preloading -->
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/vendor.js" as="script">
    <link rel="stylesheet" href="/assets/index.css">
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/assets/vendor.js"></script>
</body>
</html>`;
}

/**
 * Creates pre-rendered HTML files for all routes
 */
function preRenderRoutes() {
    console.log('Starting standalone pre-rendering process...');

    console.log(
        `Pre-rendering ${allRoutes.length} routes (${staticRoutes.length} static, ${allRoutes.length - staticRoutes.length} dynamic)`,
    );

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
            const htmlContent = generatePrerenderedHtml(route);

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

// Run the pre-rendering process
preRenderRoutes();
