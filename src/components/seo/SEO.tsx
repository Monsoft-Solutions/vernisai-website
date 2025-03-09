import { Helmet } from 'react-helmet-async';

// Define a more specific type for structured data
type StructuredDataType = {
    '@context': string;
    '@type': string;
    [key: string]:
        | string
        | number
        | boolean
        | null
        | undefined
        | string[]
        | Record<string, unknown>
        | Array<Record<string, unknown>>;
};

export interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogUrl?: string;
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
    canonicalUrl?: string;
    structuredData?: StructuredDataType;
}

export function SEO({
    title,
    description,
    keywords,
    ogImage,
    ogUrl,
    twitterCard = 'summary_large_image',
    canonicalUrl,
    structuredData,
}: SEOProps) {
    const siteUrl = 'https://vernisai.com'; // Replace with actual URL when deployed
    const defaultImage = '/og-image.jpg'; // Default OG image path
    const fullTitle = `${title} | VernisAI`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl || siteUrl} />
            <meta
                property="og:image"
                content={ogImage || `${siteUrl}${defaultImage}`}
            />
            <meta property="og:site_name" content="VernisAI" />

            {/* Twitter Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta
                name="twitter:image"
                content={ogImage || `${siteUrl}${defaultImage}`}
            />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl || ogUrl || siteUrl} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
}
