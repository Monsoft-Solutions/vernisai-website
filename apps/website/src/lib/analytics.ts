import Clarity from '@microsoft/clarity';
import { env } from '@/env';

/**
 * Initialize analytics services (Microsoft Clarity and Google Analytics)
 */
export function initializeAnalytics(): void {
    // Check if analytics is enabled
    const analyticsEnabled = env.NODE_ENV !== 'development';

    if (!analyticsEnabled) {
        console.warn('Analytics is disabled. Skipping initialization.');
        return;
    }

    // Initialize Microsoft Clarity if ID is provided
    const clarityId = env.VITE_MICROSOFT_CLARITY_ID;
    if (clarityId) {
        Clarity.init(clarityId);
    }

    // Initialize Google Analytics if ID is provided
    const gaId = env.VITE_GOOGLE_ANALYTICS_ID;
    console.warn('gaId', gaId);
    if (gaId) {
        // Dynamically load Google Analytics
        loadGoogleAnalytics(gaId);
    }
}

/**
 * Dynamically load Google Analytics
 */
function loadGoogleAnalytics(gaId: string): void {
    // Create the GA script tag
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;

    // Create the GA initialization script
    const gaInitScript = document.createElement('script');
    gaInitScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', '${gaId}');
    `;

    // Add the scripts to the document
    document.head.appendChild(gaScript);
    document.head.appendChild(gaInitScript);
}

/**
 * Track a custom event in analytics platforms
 */
export function trackEvent(
    eventName: string,
    eventProperties?: Record<string, unknown>,
): void {
    // Check if analytics is enabled
    const analyticsEnabled = env.NODE_ENV !== 'development';

    if (!analyticsEnabled) {
        return;
    }

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
