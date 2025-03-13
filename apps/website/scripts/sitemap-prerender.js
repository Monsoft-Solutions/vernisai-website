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
    const fs = require('fs');
    const path = require('path');

    // Action category metadata
    actionCategoryIds.forEach((categoryId) => {
        const route = `/features/actions/${categoryId}`;
        const formattedCategory = formatTitle(categoryId);

        dynamicMetadata[route] = {
            title: `${formattedCategory} - VernisAI Actions`,
            description: `Explore ${formattedCategory} actions and integrations for your AI workflows.`,
            image: '/images/vernisai-logo.png',
        };
    });

    // Use case metadata
    useCaseIds.forEach((useCaseId) => {
        const route = `/use-cases/${useCaseId}`;
        const formattedUseCase = formatTitle(useCaseId);

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

// Get metadata for a route
function getRouteMetadata(route) {
    return (
        allMetadata[route] || {
            title: 'VernisAI - AI-Powered No-Code Workflow Automation',
            description:
                'Build, automate, and deploy AI workflows without code. Connect your tools and data to create powerful automations with VernisAI.',
            image: '/images/vernisai-logo.png',
        }
    );
}

// Generate HTML for a route
function generateHtml(route) {
    const metadata = getRouteMetadata(route);
    const { title, description, image } = metadata;

    const fullTitle = title.includes('VernisAI')
        ? title
        : `${title} | VernisAI`;
    const fullImageUrl = image.startsWith('http')
        ? image
        : `${SITE_URL}${image}`;
    const canonicalUrl = `${SITE_URL}${route}`;

    // Create structured data based on route
    let structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'VernisAI',
        url: SITE_URL,
        description: description,
        image: fullImageUrl,
    };

    // Add specific structured data for products
    if (route.includes('/features/') || route.includes('/use-cases/')) {
        structuredData = {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: title.replace(' - VernisAI', '').replace(' | VernisAI', ''),
            description: description,
            url: canonicalUrl,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/ComingSoon',
            },
            brand: {
                '@type': 'Brand',
                name: 'VernisAI',
                logo: `${SITE_URL}/images/vernisai-logo.png`,
            },
            screenshot: fullImageUrl,
            image: fullImageUrl,
        };
    }

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
    
    <!-- Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
    </script>
    
    <!-- For client-side routing -->
    <script>
        // This script will run after loading the page
        // It will redirect to the client-side route if JavaScript is enabled
        window.addEventListener('DOMContentLoaded', function() {
            window.location.href = '/#${route}';
        });
    </script>
</head>
<body>
    <div id="root">
        <!-- Fallback content for search engines and when JS is disabled -->
        <h1>${fullTitle}</h1>
        <p>${description}</p>
        <p>Loading VernisAI...</p>
        <noscript>
            <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser settings.</p>
            <p>You can also visit our <a href="/">homepage</a>.</p>
        </noscript>
    </div>
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
    console.warn('Generating sitemap...');
    const sitemap = generateSitemap();

    fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemap);
    console.warn(
        `Sitemap generated with ${allRoutes.length} URLs (${staticRoutes.length} static, ${allRoutes.length - staticRoutes.length} dynamic)`,
    );
}

// Pre-render all routes
function preRenderRoutes() {
    console.warn('Pre-rendering all routes...');

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

            console.warn(`Pre-rendered: ${route} -> ${htmlFilePath}`);
        } catch (error) {
            console.error(`Error pre-rendering route ${route}:`, error);
        }
    }

    console.warn('Pre-rendering completed successfully!');
}

// ============ EXECUTION ============

// Run the sitemap generation and pre-rendering process
console.warn('Starting sitemap generation and pre-rendering process...');
writeSitemap();
preRenderRoutes();
console.warn('All done!');
