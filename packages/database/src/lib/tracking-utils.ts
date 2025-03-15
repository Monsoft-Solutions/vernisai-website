import { IncomingMessage } from 'http';
import { AudienceTrackingData } from '../schemas/audience-tracking';

/**
 * Parse User-Agent string to extract browser, OS, and device information
 */
export function parseUserAgent(userAgent: string): {
    browser: string;
    os: string;
    deviceType: string;
} {
    // Default values
    let browser = 'unknown';
    let os = 'unknown';
    let deviceType = 'desktop';

    // Browser detection
    if (userAgent.includes('Firefox/')) {
        browser = 'Firefox';
    } else if (userAgent.includes('Chrome/') && !userAgent.includes('Edg/')) {
        browser = 'Chrome';
    } else if (
        userAgent.includes('Safari/') &&
        !userAgent.includes('Chrome/')
    ) {
        browser = 'Safari';
    } else if (userAgent.includes('Edg/')) {
        browser = 'Edge';
    } else if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) {
        browser = 'Internet Explorer';
    } else if (userAgent.includes('Opera/') || userAgent.includes('OPR/')) {
        browser = 'Opera';
    }

    // OS detection
    if (userAgent.includes('Windows')) {
        os = 'Windows';
    } else if (userAgent.includes('Mac OS X')) {
        os = 'macOS';
    } else if (userAgent.includes('Linux')) {
        os = 'Linux';
    } else if (userAgent.includes('Android')) {
        os = 'Android';
    } else if (
        userAgent.includes('iOS') ||
        userAgent.includes('iPhone') ||
        userAgent.includes('iPad')
    ) {
        os = 'iOS';
    }

    // Device type detection
    if (
        userAgent.includes('Mobile') ||
        userAgent.includes('Android') ||
        userAgent.includes('iPhone')
    ) {
        deviceType = 'mobile';
    } else if (userAgent.includes('iPad') || userAgent.includes('Tablet')) {
        deviceType = 'tablet';
    }

    return { browser, os, deviceType };
}

/**
 * Extract UTM parameters from URL query string
 */
export function extractUtmParams(url: string): {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
} {
    try {
        const urlObj = new URL(url);
        const params = urlObj.searchParams;

        return {
            utm_source: params.get('utm_source') || undefined,
            utm_medium: params.get('utm_medium') || undefined,
            utm_campaign: params.get('utm_campaign') || undefined,
            utm_term: params.get('utm_term') || undefined,
            utm_content: params.get('utm_content') || undefined,
        };
    } catch (error) {
        // If URL parsing fails, return empty object
        return {};
    }
}

/**
 * Get location information from IP address
 * This is a placeholder implementation. In a real-world scenario,
 * you would use a geolocation service like MaxMind, ipstack, or similar.
 */
export async function getLocationFromIp(ipAddress: string): Promise<{
    country?: string;
    region?: string;
    city?: string;
}> {
    // This is a placeholder. In a real implementation, you would:
    // 1. Call a geolocation API service
    // 2. Parse the response
    // 3. Return the location data

    // For testing purposes, we'll return mock data for certain IPs
    if (ipAddress === '127.0.0.1' || ipAddress === '::1') {
        return {
            country: 'Local',
            region: 'Development',
            city: 'Localhost',
        };
    }

    // In a real implementation, you would make an API call here
    // For example:
    // const response = await fetch(`https://ipgeolocation.example.com/api/${ipAddress}`);
    // const data = await response.json();
    // return {
    //     country: data.country,
    //     region: data.region,
    //     city: data.city,
    // };

    // For now, return empty object
    return {};
}

/**
 * Extract client IP address from request
 */
export function getClientIp(req: IncomingMessage): string {
    // Check for forwarded IP (when behind a proxy/load balancer)
    const forwarded = req.headers['x-forwarded-for'];
    if (forwarded) {
        // x-forwarded-for can be a comma-separated list of IPs
        // The client's IP will be the first one
        return (
            Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0]
        ).trim();
    }

    // If no forwarded IP, use the direct connection IP
    return req.socket.remoteAddress || '';
}

/**
 * Extract all tracking information from a request
 */
export async function extractTrackingInfo(
    req: IncomingMessage,
    waitlistId: string,
    referrer?: string,
    utmParams?: Record<string, string>,
): Promise<AudienceTrackingData> {
    // Get IP address
    const ipAddress = getClientIp(req);

    // Get user agent
    const userAgent = req.headers['user-agent'] || '';

    // Parse user agent
    const { browser, os, deviceType } = parseUserAgent(userAgent);

    // Get location from IP (async)
    const location = await getLocationFromIp(ipAddress);

    // Get referrer
    const referer = referrer || req.headers.referer || '';

    // Extract UTM parameters from referrer if not provided
    let utmParameters = utmParams || {};
    if (!utmParams && referer) {
        utmParameters = extractUtmParams(referer);
    }

    // Construct tracking data
    const trackingData: AudienceTrackingData = {
        waitlist_id: waitlistId,
        ip_address: ipAddress,
        user_agent: userAgent,
        referrer: referer,
        device_type: deviceType,
        browser,
        os,
        ...utmParameters,
        ...location,
    };

    return trackingData;
}
