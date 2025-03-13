/// <reference types="vite/client" />

interface ImportMetaEnv {
    // Required variables
    readonly VITE_API_URL: string;

    // Optional variables with defaults
    readonly VITE_DEBUG_MODE?: string;
    readonly VITE_APP_ENV?: string;

    // Analytics (optional)
    readonly VITE_GOOGLE_ANALYTICS_ID?: string;
    readonly VITE_MICROSOFT_CLARITY_ID?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
