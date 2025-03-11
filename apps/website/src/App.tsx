import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { WaitlistPage } from './pages/WaitlistPage';
import { Features } from './pages/Features';
import { FeatureDetail } from './pages/FeatureDetail';
import { ActionsFeature } from './pages/features/ActionsFeature';
import { ActionCategory } from './pages/features/ActionCategory';
import { WorkflowsFeature } from './pages/features/WorkflowsFeature';
import { AgentsFeature } from './pages/features/AgentsFeature';
import { KnowledgeBaseFeature } from './pages/features/KnowledgeBaseFeature';
// Import Use Cases pages
import { UseCases } from './pages/UseCases';
import { UseCaseDetail } from './pages/use-cases/UseCaseDetail';
import { useEffect } from 'react';
// Import Legal pages
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';
import { CookiePolicy } from './pages/legal/CookiePolicy';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return null;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="waitlist" element={<WaitlistPage />} />
                    <Route path="features" element={<Features />} />

                    {/* Feature Detail Pages */}
                    <Route
                        path="features/actions"
                        element={<ActionsFeature />}
                    />
                    <Route
                        path="features/actions/:categoryId"
                        element={<ActionCategory />}
                    />
                    <Route
                        path="features/workflows"
                        element={<WorkflowsFeature />}
                    />
                    <Route path="features/agents" element={<AgentsFeature />} />
                    <Route
                        path="features/knowledge-base"
                        element={<KnowledgeBaseFeature />}
                    />

                    {/* Legacy route for backward compatibility */}
                    <Route
                        path="features/:featureId"
                        element={<FeatureDetail />}
                    />

                    {/* Use Cases Routes */}
                    <Route path="use-cases" element={<UseCases />} />
                    <Route path="use-cases/:id" element={<UseCaseDetail />} />

                    {/* Legal Pages */}
                    <Route path="privacy" element={<PrivacyPolicy />} />
                    <Route path="terms" element={<TermsOfService />} />
                    <Route path="cookies" element={<CookiePolicy />} />

                    {/* Add more routes as needed */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
