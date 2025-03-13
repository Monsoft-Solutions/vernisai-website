// Main client and types
export { GoogleIndexingClient } from './lib/google-indexing-client';
export { extractUrlsFromSitemap } from './lib/sitemap-parser';
export { createVercelDeploymentHandler } from './lib/vercel-integration';
export { main, runCli } from './lib/cli';
export type {
    GoogleIndexingConfig,
    IndexableUrl,
    IndexingResult,
    UrlNotificationType,
} from './lib/types';
