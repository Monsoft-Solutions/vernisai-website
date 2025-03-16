import { RouteConfig, RouteMetadata } from './types/routes';
import { actionCategories } from './data';
import { useCases } from './data/use-cases';

// Re-export types for other modules to use
export type { RouteConfig, RouteMetadata };

// Static routes with metadata
export const routes: RouteConfig[] = [
    {
        path: '/',
        metadata: {
            title: 'VernisAI - AI-Powered No-Code Workflow Automation',
            description:
                'Build, automate, and deploy AI workflows without code. Connect your tools and data to create powerful automations with VernisAI.',
            prerender: true,
        },
    },
    {
        path: '/waitlist',
        metadata: {
            title: 'Join the VernisAI Waitlist',
            description:
                "Sign up for early access to VernisAI's no-code AI workflow automation platform.",
            prerender: true,
        },
    },
    {
        path: '/thank-you',
        metadata: {
            title: 'Thank You - VernisAI Waitlist',
            description:
                "Thank you for joining the VernisAI waitlist. We'll notify you when we have availability.",
            prerender: true,
        },
    },
    {
        path: '/features',
        metadata: {
            title: 'VernisAI Features - AI-Powered Workflow Automation',
            description:
                "Explore the powerful features of VernisAI's no-code AI workflow automation platform.",
            prerender: true,
        },
    },
    {
        path: '/pricing',
        metadata: {
            title: 'VernisAI Pricing - AI Workflow Automation Plans',
            description:
                "View pricing plans for VernisAI's no-code AI workflow automation platform.",
            prerender: true,
        },
    },
    {
        path: '/features/actions',
        metadata: {
            title: 'VernisAI Actions - Connect Your Tools and Data',
            description:
                "Connect your tools and data with VernisAI's extensive library of pre-built actions.",
            prerender: true,
        },
    },
    {
        path: '/features/workflows',
        metadata: {
            title: 'VernisAI Workflows - Build Powerful Automations',
            description:
                "Create powerful automations with VernisAI's visual workflow builder.",
            prerender: true,
        },
    },
    {
        path: '/features/agents',
        metadata: {
            title: 'VernisAI Agents - AI-Powered Automation',
            description:
                'Deploy AI agents to automate complex tasks and workflows.',
            prerender: true,
        },
    },
    {
        path: '/features/knowledge-base',
        metadata: {
            title: 'VernisAI Knowledge Base - Connect Your Data',
            description:
                'Connect your data sources to create a powerful knowledge base for your AI workflows.',
            prerender: true,
        },
    },
    {
        path: '/use-cases',
        metadata: {
            title: 'VernisAI Use Cases - AI Workflow Automation Examples',
            description:
                'Explore real-world examples of how businesses use VernisAI for AI-powered workflow automation.',
            prerender: true,
        },
    },
    {
        path: '/privacy',
        metadata: {
            title: 'VernisAI Privacy Policy',
            description:
                "Read VernisAI's privacy policy to understand how we collect and use your data.",
            prerender: true,
        },
    },
    {
        path: '/terms',
        metadata: {
            title: 'VernisAI Terms of Service',
            description: "Read VernisAI's terms of service agreement.",
            prerender: true,
        },
    },
    {
        path: '/cookies',
        metadata: {
            title: 'VernisAI Cookie Policy',
            description:
                "Read VernisAI's cookie policy to understand how we use cookies on our website.",
            prerender: true,
        },
    },
];

// Removed unused function

// Generate dynamic routes for action categories
export const getActionCategoryRoutes = (): RouteConfig[] => {
    if (!actionCategories) return [];

    return actionCategories.map((category) => ({
        path: `/features/actions/${category.id}`,
        metadata: {
            title: `${category.name} - VernisAI Actions`,
            description: `Explore ${category.name} actions and integrations for your AI workflows.`,
            prerender: true,
        },
    }));
};

// Generate dynamic routes for use cases
export const getUseCaseRoutes = (): RouteConfig[] => {
    if (!useCases) return [];

    return useCases.map((useCase) => ({
        path: `/use-cases/${useCase.id}`,
        metadata: {
            title: `${useCase.name} - VernisAI Use Cases`,
            description: `Learn how VernisAI can help with ${useCase.name} in your business.`,
            prerender: true,
        },
    }));
};

// Get all dynamic routes
export const getDynamicRoutes = (): RouteConfig[] => {
    return [...getActionCategoryRoutes(), ...getUseCaseRoutes()];
};

// Get all routes (static + dynamic)
export const getAllRoutes = (): RouteConfig[] => {
    return [...routes, ...getDynamicRoutes()];
};

/**
 * Get all routes that should be prerendered
 * @returns Array of route paths to prerender
 */
export const getPrerenderRoutes = (): string[] => {
    const prerenderRoutes: string[] = [];
    const allRoutes = getAllRoutes();

    const extractRoutes = (
        routeConfigs: RouteConfig[],
        parentPath: string = '',
    ) => {
        for (const route of routeConfigs) {
            const fullPath = parentPath + (route.path || '');

            if (route.metadata?.prerender) {
                prerenderRoutes.push(fullPath);
            }

            if (route.children) {
                extractRoutes(route.children, fullPath);
            }
        }
    };

    extractRoutes(allRoutes);
    return prerenderRoutes;
};
