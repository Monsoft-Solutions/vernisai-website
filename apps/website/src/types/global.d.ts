// Type declarations for global window object
interface Window {
    // Google Tag Manager
    gtag?: (...args: unknown[]) => void;

    // Facebook Pixel
    fbq?: (...args: unknown[]) => void;
}
