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
        console.warn('Analytics disabled in non-production environment');
        return;
    }

    // Initialize Microsoft Clarity if ID is available
    if (env.VITE_MICROSOFT_CLARITY_ID) {
        try {
            Clarity.init(env.VITE_MICROSOFT_CLARITY_ID);
            console.warn('Microsoft Clarity initialized');
        } catch (error) {
            console.error('Error initializing Microsoft Clarity:', error);
        }
    } else {
        console.warn(
            'Microsoft Clarity ID not found in environment variables. Clarity not initialized.',
        );
    }

    // Log Google Analytics status - initialization is handled in index.html
    if (env.VITE_GOOGLE_ANALYTICS_ID) {
        console.warn('Google Analytics configuration available');
    } else {
        console.warn('Google Analytics ID not found in environment variables');
    }
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
