import { google, indexing_v3 } from 'googleapis';
import type { JWT } from 'google-auth-library';
import { GoogleIndexingConfig, IndexableUrl, IndexingResult } from './types';

export class GoogleIndexingClient {
    private readonly config: GoogleIndexingConfig;
    private initialized = false;
    private authClient: JWT | null = null;
    private indexingApi: indexing_v3.Indexing | null = null;

    constructor(config: GoogleIndexingConfig) {
        this.config = config;
    }

    /**
     * Initialize the Google API client with service account credentials
     */
    async initialize() {
        if (this.initialized) return;

        try {
            // Create JWT client using service account credentials
            this.authClient = new google.auth.JWT(
                this.config.clientEmail,
                undefined,
                this.config.privateKey,
                ['https://www.googleapis.com/auth/indexing'],
                undefined,
            );

            console.warn('authClient', this.authClient);

            // Initialize the indexing API
            this.indexingApi = google.indexing({
                version: 'v3',
                auth: this.authClient,
            });

            // Verify auth client works
            await this.authClient.authorize();

            this.initialized = true;
        } catch (error) {
            throw new Error(
                `Failed to initialize Google Indexing API client: ${error instanceof Error ? error.message : String(error)}`,
            );
        }
    }

    /**
     * Notify Google about a URL update or deletion
     */
    async notifyUrlUpdate(indexableUrl: IndexableUrl): Promise<IndexingResult> {
        if (!this.initialized) {
            await this.initialize();
        }

        try {
            if (!this.indexingApi) {
                throw new Error('Indexing API not initialized');
            }

            const response = await this.indexingApi.urlNotifications.publish({
                requestBody: {
                    url: indexableUrl.url,
                    type: indexableUrl.type,
                },
            });

            return {
                url: indexableUrl.url,
                success: response.status === 200,
            };
        } catch (error) {
            return {
                url: indexableUrl.url,
                success: false,
                error: error instanceof Error ? error.message : String(error),
            };
        }
    }

    /**
     * Notify Google about multiple URLs
     */
    async notifyUrlUpdates(urls: IndexableUrl[]): Promise<IndexingResult[]> {
        if (!this.initialized) {
            await this.initialize();
        }

        // Process all URLs in parallel
        const results = await Promise.all(
            urls.map((url) => this.notifyUrlUpdate(url)),
        );

        return results;
    }
}
