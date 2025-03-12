import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.tsx';
import { initializeAnalytics } from './lib/analytics';
import { initSmoothScroll } from './lib/utils';
import { env } from '@/env';

// Validate environment variables
try {
    // This will throw an error if any required variables are missing
    console.log('Validating environment variables...');

    // Check for required API URL
    if (!env.VITE_API_URL) {
        throw new Error(
            'Required environment variable VITE_API_URL is missing',
        );
    }

    console.log('Environment validation successful');
} catch (error) {
    // Create a more user-friendly error message
    console.error('Environment validation failed:', error);

    // In development, show a helpful error message in the UI
    if (env.NODE_ENV === 'development') {
        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.innerHTML = `
                <div style="font-family: system-ui, sans-serif; padding: 2rem; max-width: 800px; margin: 0 auto;">
                    <h1 style="color: #ef4444;">Environment Error</h1>
                    <p>There was a problem with your environment configuration:</p>
                    <pre style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; overflow: auto;">${error instanceof Error ? error.message : String(error)}</pre>
                    <h2>Troubleshooting:</h2>
                    <ol>
                        <li>Check that you have a <code>.env</code> file in the <code>apps/website</code> directory</li>
                        <li>Ensure all required variables are set (see <code>.env.example</code>)</li>
                        <li>For Vercel deployments, configure environment variables in the Vercel dashboard</li>
                    </ol>
                </div>
            `;
            // Prevent the rest of the app from loading
            throw error;
        }
    }

    // In production, we'll let the app try to continue if possible
    console.warn('Continuing with default environment values where available');
}

// Initialize analytics
initializeAnalytics();

// Initialize smooth scrolling
initSmoothScroll();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>,
);
