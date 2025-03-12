import { SEO } from '../components';
import { pricingFAQs } from '../components/EnhancedFAQ';
import { CTAWorkflowAutomation } from '../components/CTA';
import {
    EnhancedPricingTiers,
    pricingTiers,
    featureComparison,
} from '../components/EnhancedPricingTiers';
import { EnhancedFAQ } from '../components/EnhancedFAQ';
import { TrustSignals, securityTrustSignals } from '../components/TrustSignals';
import { UseCaseSection } from '../components/UseCaseSection';
import { ValueMetrics } from '../components/ValueMetrics';
import { CompetitiveComparison } from '../components/CompetitiveComparison';
import { PlanSelector } from '../components/PlanSelector';
import { ProductDemo } from '../components/ProductDemo';

export function Pricing() {
    // Example use cases for different audience segments
    const useCases = [
        {
            id: 'marketing-teams',
            title: 'Marketing Teams',
            description: 'Streamline content creation and campaign management',
            features: [
                {
                    title: 'Automate social media',
                    description:
                        'Schedule and post content across platforms automatically',
                },
                {
                    title: 'AI content generation',
                    description: 'Create marketing copy with AI assistance',
                },
                {
                    title: 'Campaign tracking',
                    description:
                        'Monitor and analyze campaign performance in real-time',
                },
                {
                    title: 'Marketing integrations',
                    description:
                        'Connect with your existing marketing tools seamlessly',
                },
            ],
            image: 'https://via.placeholder.com/800x600?text=Marketing+Teams',
            ctaText: 'Learn more',
            ctaLink: '/use-cases/marketing',
        },
        {
            id: 'customer-support',
            title: 'Customer Support',
            description:
                'Enhance customer experience with intelligent automation',
            features: [
                {
                    title: 'Ticket automation',
                    description:
                        'Route and prioritize support tickets automatically',
                },
                {
                    title: 'AI response suggestions',
                    description:
                        'Get intelligent response recommendations for common issues',
                },
                {
                    title: 'Knowledge base creation',
                    description:
                        'Build and maintain self-service resources efficiently',
                },
                {
                    title: 'Support integrations',
                    description: 'Connect with your CRM and support platforms',
                },
            ],
            image: 'https://via.placeholder.com/800x600?text=Customer+Support',
            ctaText: 'Learn more',
            ctaLink: '/use-cases/customer-support',
        },
        {
            id: 'sales-teams',
            title: 'Sales Teams',
            description: 'Close more deals with automated sales workflows',
            features: [
                {
                    title: 'Lead qualification',
                    description:
                        'Automatically score and prioritize promising leads',
                },
                {
                    title: 'Follow-up automation',
                    description:
                        'Send personalized follow-up emails at the right time',
                },
                {
                    title: 'Meeting scheduling',
                    description:
                        'Automate the booking of demos and sales calls',
                },
                {
                    title: 'CRM synchronization',
                    description:
                        'Keep your data consistent across all your tools',
                },
            ],
            image: 'https://via.placeholder.com/800x600?text=Sales+Teams',
            ctaText: 'Learn more',
            ctaLink: '/use-cases/sales',
        },
    ];

    // Example value metrics to highlight ROI
    const valueMetrics = [
        {
            label: 'Time Saved',
            value: '15+ hours',
            description:
                'Average time saved by teams using VernisAI automation',
            icon: 'time' as const,
        },
        {
            label: 'ROI',
            value: '300%',
            description: 'Return on investment reported by our customers',
            icon: 'money' as const,
        },
        {
            label: 'Productivity',
            value: '40%',
            description:
                'Boost in team productivity after implementing VernisAI',
            icon: 'performance' as const,
        },
        {
            label: 'Error Reduction',
            value: '90%',
            description: 'Reduction in manual errors through automation',
            icon: 'performance' as const,
        },
    ];

    // Example demo screens
    const demoScreens = [
        {
            id: 'workflow-builder',
            title: 'Intuitive Workflow Builder',
            description:
                'Create powerful workflows with our drag-and-drop interface',
            image: 'https://via.placeholder.com/800x500?text=Workflow+Builder',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
            id: 'ai-assistant',
            title: 'AI Workflow Assistant',
            description:
                'Get intelligent suggestions to optimize your workflows',
            image: 'https://via.placeholder.com/800x500?text=AI+Assistant',
        },
        {
            id: 'integration-marketplace',
            title: 'Integration Marketplace',
            description: 'Connect with 100+ apps and services',
            image: 'https://via.placeholder.com/800x500?text=Integration+Marketplace',
        },
    ];

    // Example comparison features
    const comparisonFeatures = [
        {
            name: 'No-code workflow builder',
            description: 'Create workflows without coding knowledge',
            vernisAI: true,
            competitor1: true,
            competitor2: false,
        },
        {
            name: 'AI-powered automation',
            description: 'Use AI to automate complex tasks',
            vernisAI: true,
            competitor1: 'Limited',
            competitor2: true,
        },
        {
            name: 'Natural language workflow creation',
            description: 'Create workflows by describing them in plain English',
            vernisAI: true,
            competitor1: false,
            competitor2: 'Limited',
        },
        {
            name: 'Custom integrations',
            description: 'Connect with any service using custom APIs',
            vernisAI: true,
            competitor1: true,
            competitor2: false,
        },
        {
            name: 'Enterprise-grade security',
            description: 'SOC 2 compliance, encryption, and more',
            vernisAI: true,
            competitor1: true,
            competitor2: 'Limited',
        },
        {
            name: 'Workflow templates',
            description: 'Pre-built workflows for common use cases',
            vernisAI: true,
            competitor1: true,
            competitor2: false,
        },
        {
            name: 'User management',
            description: 'Add and manage team members',
            vernisAI: 'Team plan',
            competitor1: 'Team plans',
            competitor2: 'Enterprise only',
        },
        {
            name: 'Dedicated AI credits',
            description: 'Allocated AI processing capacity',
            vernisAI: true,
            competitor1: false,
            competitor2: 'Subscription based',
        },
        {
            name: 'Specialized for workflows',
            description: 'Platform built specifically for workflow automation',
            vernisAI: true,
            competitor1: true,
            competitor2: false,
        },
        {
            name: 'Content generation',
            description: 'Generate text, images, and other content',
            vernisAI: true,
            competitor1: 'Via integrations',
            competitor2: true,
        },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <SEO
                title="Pricing - VernisAI Workflow Automation Platform"
                description="Simple, transparent pricing for individuals, teams, and enterprises. Choose the plan that's right for you and start automating your workflows today."
                keywords="VernisAI pricing, workflow automation pricing, AI tools pricing, subscription plans"
                canonicalUrl="https://vernis.ai/pricing"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'PriceSpecification',
                    name: 'VernisAI Platform Pricing',
                    description:
                        'Pricing plans for the VernisAI Workflow Automation Platform',
                    url: 'https://vernis.ai/pricing',
                    brand: {
                        '@type': 'Brand',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                }}
            />

            {/* Hero Section with gradient background */}
            <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200 blur-3xl"></div>
                    <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-purple-200 blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-1.5 h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                            </svg>
                            Simple, Transparent Pricing
                        </div>
                        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Pay Only For What You Need
                            </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                            Start for free, upgrade as you grow. All plans come
                            with a 14-day free trial. No credit card required to
                            get started.
                        </p>
                    </div>
                </div>
            </div>

            {/* Enhanced Pricing Tiers */}
            <EnhancedPricingTiers
                tiers={pricingTiers}
                features={featureComparison}
            />

            {/* Value Metrics Section */}
            <ValueMetrics
                metrics={valueMetrics}
                title="The Value VernisAI Delivers"
                description="Our customers see significant improvements in productivity and ROI"
            />

            {/* Plan Selector */}
            <PlanSelector />

            {/* Use Cases Section */}
            <UseCaseSection
                useCases={useCases}
                title="Solutions for Every Team"
                description="See how VernisAI can help different departments in your organization"
            />

            {/* Product Demo */}
            {/* <ProductDemo
                title="See VernisAI in Action"
                description="Explore our intuitive interface and powerful features"
                screens={demoScreens}
            /> */}

            {/* Competitive Comparison */}
            <CompetitiveComparison
                title="How We Compare"
                description="See how VernisAI stacks up against the competition"
                features={comparisonFeatures}
                competitor1Name="Zapier"
                competitor2Name="ChatGPT"
            />

            {/* Trust Signals */}
            <TrustSignals signals={securityTrustSignals} />

            {/* Enhanced FAQ Section */}
            <EnhancedFAQ
                faqs={pricingFAQs}
                title="Frequently Asked Questions"
                description="Find answers to common questions about our pricing and features"
            />

            {/* CTA Section */}
            <CTAWorkflowAutomation
                variant="gradient"
                title="Ready to experience the VernisAI difference?"
                description="Start your 14-day free trial today. No credit card required. Upgrade, downgrade, or cancel anytime."
                buttonText="Start Your Free Trial"
                buttonLink="/waitlist"
                showBadge={true}
                badgeText="Risk-Free Trial"
                showFooterText={true}
                footerText="Join thousands of teams already saving time with VernisAI"
                secondaryButton={{
                    text: 'Schedule a Demo',
                    link: '/contact',
                }}
            />
        </div>
    );
}
