import { readFileSync } from 'fs';
import { XMLParser } from 'fast-xml-parser';

type SitemapUrl = {
    loc: string;
    lastmod?: string;
    changefreq?: string;
    priority?: string;
};

type SitemapData = {
    urlset: {
        url: SitemapUrl[] | SitemapUrl;
    };
};

/**
 * Extracts URLs from a sitemap.xml file
 */
export function extractUrlsFromSitemap(sitemapPath: string): string[] {
    try {
        // Read sitemap file
        const sitemapContent = readFileSync(sitemapPath, 'utf8');

        // Parse XML
        const parser = new XMLParser({
            ignoreAttributes: false,
            isArray: (name) => name === 'url',
        });

        const parsedData = parser.parse(sitemapContent) as SitemapData;

        // Extract URLs
        if (!parsedData?.urlset?.url) {
            return [];
        }

        const urls = Array.isArray(parsedData.urlset.url)
            ? parsedData.urlset.url
            : [parsedData.urlset.url];

        return urls.map((url) => url.loc);
    } catch (error) {
        console.error('Error parsing sitemap:', error);
        return [];
    }
}
