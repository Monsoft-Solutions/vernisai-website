/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_ENABLE_ANALYTICS: string;
    readonly VITE_ENABLE_FEATURE_X: string;
    readonly VITE_GOOGLE_ANALYTICS_ID?: string;
    readonly VITE_MICROSOFT_CLARITY_ID?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
