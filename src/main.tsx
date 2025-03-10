import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.tsx';
import { initializeAnalytics } from './lib/analytics';
import { initSmoothScroll } from './lib/utils';

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
