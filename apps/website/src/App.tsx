import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { lazy, Suspense, useEffect } from 'react';
import { Layout } from './components/Layout';
import { generateMetaTags } from './lib/ssg';

// Loading component for Suspense
const PageLoader = () => (
    <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
    </div>
);

// Lazy load page components
const Home = lazy(() =>
    import('./pages/Home').then((module) => ({ default: module.Home })),
);
const WaitlistPage = lazy(() =>
    import('./pages/WaitlistPage').then((module) => ({
        default: module.WaitlistPage,
    })),
);
const Features = lazy(() =>
    import('./pages/Features').then((module) => ({ default: module.Features })),
);
const Pricing = lazy(() =>
    import('./pages/Pricing').then((module) => ({ default: module.Pricing })),
);
const FeatureDetail = lazy(() =>
    import('./pages/FeatureDetail').then((module) => ({
        default: module.FeatureDetail,
    })),
);
const ActionsFeature = lazy(() =>
    import('./pages/features/ActionsFeature').then((module) => ({
        default: module.ActionsFeature,
    })),
);
const ActionCategory = lazy(() =>
    import('./pages/features/ActionCategory').then((module) => ({
        default: module.ActionCategory,
    })),
);
const WorkflowsFeature = lazy(() =>
    import('./pages/features/WorkflowsFeature').then((module) => ({
        default: module.WorkflowsFeature,
    })),
);
const AgentsFeature = lazy(() =>
    import('./pages/features/AgentsFeature').then((module) => ({
        default: module.AgentsFeature,
    })),
);
const KnowledgeBaseFeature = lazy(() =>
    import('./pages/features/KnowledgeBaseFeature').then((module) => ({
        default: module.KnowledgeBaseFeature,
    })),
);
const UseCases = lazy(() =>
    import('./pages/UseCases').then((module) => ({ default: module.UseCases })),
);
const UseCaseDetail = lazy(() =>
    import('./pages/use-cases/UseCaseDetail').then((module) => ({
        default: module.UseCaseDetail,
    })),
);
const PrivacyPolicy = lazy(() =>
    import('./pages/legal/PrivacyPolicy').then((module) => ({
        default: module.PrivacyPolicy,
    })),
);
const TermsOfService = lazy(() =>
    import('./pages/legal/TermsOfService').then((module) => ({
        default: module.TermsOfService,
    })),
);
const CookiePolicy = lazy(() =>
    import('./pages/legal/CookiePolicy').then((module) => ({
        default: module.CookiePolicy,
    })),
);

function RouteMetadata() {
    const { pathname } = useLocation();
    const metaTags = generateMetaTags(pathname);

    return (
        <Helmet>
            <title>{metaTags.title}</title>
            {metaTags.meta.map((meta, index) => (
                <meta
                    key={`${meta.name || meta.property}-${index}`}
                    {...meta}
                />
            ))}
        </Helmet>
    );
}

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
            <RouteMetadata />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="waitlist"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <WaitlistPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="features"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Features />
                            </Suspense>
                        }
                    />
                    <Route
                        path="pricing"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <Pricing />
                            </Suspense>
                        }
                    />

                    {/* Feature Detail Pages */}
                    <Route
                        path="features/actions"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <ActionsFeature />
                            </Suspense>
                        }
                    />
                    <Route
                        path="features/actions/:categoryId"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <ActionCategory />
                            </Suspense>
                        }
                    />
                    <Route
                        path="features/workflows"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <WorkflowsFeature />
                            </Suspense>
                        }
                    />
                    <Route
                        path="features/agents"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <AgentsFeature />
                            </Suspense>
                        }
                    />
                    <Route
                        path="features/knowledge-base"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <KnowledgeBaseFeature />
                            </Suspense>
                        }
                    />

                    {/* Legacy route for backward compatibility */}
                    <Route
                        path="features/:featureId"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <FeatureDetail />
                            </Suspense>
                        }
                    />

                    {/* Use Cases Routes */}
                    <Route
                        path="use-cases"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <UseCases />
                            </Suspense>
                        }
                    />
                    <Route
                        path="use-cases/:id"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <UseCaseDetail />
                            </Suspense>
                        }
                    />

                    {/* Legal Pages */}
                    <Route
                        path="privacy"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <PrivacyPolicy />
                            </Suspense>
                        }
                    />
                    <Route
                        path="terms"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <TermsOfService />
                            </Suspense>
                        }
                    />
                    <Route
                        path="cookies"
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <CookiePolicy />
                            </Suspense>
                        }
                    />

                    {/* Add more routes as needed */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
