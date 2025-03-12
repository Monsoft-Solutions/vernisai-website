// Type definitions for Vite environment variables
// This file enables TypeScript support for import.meta.env

/// <reference types="vite/client" />

interface ImportMetaEnv {
    // Add your environment variables here
    readonly VITE_API_URL: string;
    readonly VITE_ENABLE_ANALYTICS: string;
    readonly VITE_ENABLE_FEATURE_X: string;
    readonly VITE_GOOGLE_ANALYTICS_ID?: string;
    readonly VITE_MICROSOFT_CLARITY_ID?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// Vite's global environment variable injection
interface Window {
    __VITE_INJECT_ENV__?: Record<string, string | undefined>;
    __vite_plugin_react_preamble_installed__?: boolean;
}
