import { routes, RouteConfig } from '../../routes';

/**
 * Get metadata for a specific route
 * @param path The route path
 * @returns The route metadata or undefined if not found
 */
export const getRouteMetadata = (path: string) => {
    const normalizedPath =
        path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;

    const findRoute = (
        routeConfigs: RouteConfig[],
        searchPath: string,
    ): RouteConfig | undefined => {
        for (const route of routeConfigs) {
            // Handle index routes
            if (route.path === '/' && searchPath === '/') {
                return route;
            }

            // Handle exact matches
            if (route.path === searchPath) {
                return route;
            }

            // Handle nested routes
            if (route.children) {
                const childRoute = findRoute(route.children, searchPath);
                if (childRoute) {
                    return childRoute;
                }
            }
        }

        return undefined;
    };

    return findRoute(routes, normalizedPath)?.metadata;
};

/**
 * Generate HTML metadata tags based on route metadata
 * @param path The current route path
 * @returns Object containing title and meta tags
 */
export const generateMetaTags = (path: string) => {
    const metadata = getRouteMetadata(path) || {
        title: 'VernisAI - AI-Powered No-Code Workflow Automation',
        description: 'Build, automate, and deploy AI workflows without code.',
        prerender: false,
    };

    return {
        title: metadata.title,
        meta: [
            {
                name: 'description',
                content: metadata.description,
            },
            {
                property: 'og:title',
                content: metadata.title,
            },
            {
                property: 'og:description',
                content: metadata.description,
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:url',
                content: `https://vernis.ai${path}`,
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                name: 'twitter:title',
                content: metadata.title,
            },
            {
                name: 'twitter:description',
                content: metadata.description,
            },
        ],
    };
};
