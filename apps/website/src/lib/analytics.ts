import Clarity from '@microsoft/clarity';

/**
 * Initialize analytics services (Microsoft Clarity and Google Analytics)
 * Note: Google Analytics is loaded via script tag in index.html
 */
export function initializeAnalytics(): void {
    // Initialize Microsoft Clarity
    Clarity.init('qlmpaty319');

    // Google Analytics is initialized via the script tag in index.html
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
