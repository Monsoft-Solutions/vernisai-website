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
        const specificImagePath = path.join(
            __dirname,
            '../public',
            useSpecificImage,
        );

        // Check if the specific image exists, otherwise use default
        const imageExists = fs.existsSync(specificImagePath);
        const finalImage = imageExists
            ? useSpecificImage
            : '/images/use-cases/default.png';

        dynamicMetadata[route] = {
            title: `${formattedUseCase} - VernisAI Use Case`,
            description: `Learn how VernisAI can help with ${formattedUseCase} in your business.`,
            image: finalImage,
        };
    });

    return dynamicMetadata;
}

// Combine static and dynamic metadata
const allMetadata = {
    ...routeMetadata,
    ...generateDynamicRouteMetadata(),
};

// Generate basic HTML file for prerendering
function generatePrerenderedHtml(route) {
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
    console.warn('Starting standalone pre-rendering process...');

    console.warn(
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

            console.warn(`Pre-rendered: ${route} -> ${htmlFilePath}`);
        } catch (error) {
            console.error(`Error pre-rendering route ${route}:`, error);
        }
    }

    console.warn('Pre-rendering completed successfully!');
}

// Run the pre-rendering process
preRenderRoutes();
