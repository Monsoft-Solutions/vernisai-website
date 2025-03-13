export type UrlNotificationType = 'URL_UPDATED' | 'URL_DELETED';

export type GoogleIndexingConfig = {
    /**
     * The client email of the Google service account
     */
    clientEmail: string;

    /**
     * The private key of the Google service account
     */
    privateKey: string;

    /**
     * Base URL of the website (e.g., https://vernis.ai)
     */
    baseUrl: string;

    /**
     * Optional file path to the sitemap.xml
     */
    sitemapPath?: string;
};

export type IndexableUrl = {
    /**
     * The full URL to be indexed
     */
    url: string;

    /**
     * Type of notification to send to Google
     */
    type: UrlNotificationType;
};

export type IndexingResult = {
    /**
     * URL that was processed
     */
    url: string;

    /**
     * Whether the indexing request was successful
     */
    success: boolean;

    /**
     * Error message if the request failed
     */
    error?: string;
};
