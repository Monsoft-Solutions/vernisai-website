import Clarity from '@microsoft/clarity';
import { getEnv, isProduction } from './env';

/**
 * Initialize analytics services (Microsoft Clarity and Google Analytics)
 * Only initializes in production environment unless debug mode is enabled
 */
export function initializeAnalytics(): void {
    const env = getEnv();

    // Only initialize analytics in production or if explicitly enabled in debug mode
    if (!isProduction() && env.VITE_DEBUG_MODE !== 'true') {
        console.log('Analytics disabled in non-production environment');
        return;
    }

    // Initialize Microsoft Clarity if ID is available
    if (env.VITE_MICROSOFT_CLARITY_ID) {
        Clarity.init(env.VITE_MICROSOFT_CLARITY_ID);
    }

    // Google Analytics is initialized via the script tag, but we can add custom configuration here
    // This function can be extended if we need to add custom GA events
}

/**
 * Track a custom event in analytics platforms
 */
export function trackEvent(
    eventName: string,
    eventProperties?: Record<string, unknown>,
): void {
    // Track in Google Analytics if gtag is available
    if (window.gtag) {
        window.gtag('event', eventName, eventProperties);
    }

    // Track in Clarity if needed
    // Clarity automatically tracks most interactions
}

// Add TypeScript declaration for gtag
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}
