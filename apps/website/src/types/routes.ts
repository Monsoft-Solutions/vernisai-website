import { RouteObject } from 'react-router-dom';

/**
 * Metadata for a route
 */
export type RouteMetadata = {
    /**
     * The page title
     */
    title: string;

    /**
     * The page description for SEO
     */
    description: string;

    /**
     * Whether the route should be pre-rendered
     */
    prerender: boolean;
};

/**
 * Extended route configuration with metadata
 */
export type RouteConfig = RouteObject & {
    /**
     * Metadata for the route
     */
    metadata: RouteMetadata;

    /**
     * Child routes
     */
    children?: RouteConfig[];
};
