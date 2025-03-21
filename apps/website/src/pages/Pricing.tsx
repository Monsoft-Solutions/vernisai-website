import { SEO } from '../components';
import { CTAWorkflowAutomation } from '../components/CTA';
import { EnhancedPricingTiers } from '../components/EnhancedPricingTiers';
import { pricingTiers } from '../data/pricing/pricing-tiers';
import { featureComparison } from '../data/pricing/feature-comparison';
import { EnhancedFAQ } from '../components/EnhancedFAQ';
import { UseCaseSection } from '../components/UseCaseSection';
import { ValueMetrics } from '../components/ValueMetrics';
import { CompetitiveComparison } from '../components/CompetitiveComparison';
import { useCaseMetrics, useCaseLabels } from '@/data/metrics';
import { pricingFAQs } from '@/data/faq-data';
import { useState } from 'react';
import { useCasesForSection } from '@/data/use-cases';
import { comparisonFeatures } from '@/data/comparison-features';
export function Pricing() {
    // State to track which metrics to display
    const [activeUseCase, setActiveUseCase] = useState<string>(
        Object.keys(useCaseMetrics)[0],
    );

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

            {/* Value Metrics Section with Use Case Selector */}
            <ValueMetrics
                metrics={useCaseMetrics[activeUseCase]}
                title={`${useCaseLabels[activeUseCase]} Metrics`}
                description="See how VernisAI delivers measurable results for your specific use case"
                useCaseMetrics={useCaseMetrics}
                useCaseLabels={useCaseLabels}
                activeUseCase={activeUseCase}
                onUseCaseChange={setActiveUseCase}
                showUseCaseSelector={true}
            />

            {/* Use Cases Section */}
            <UseCaseSection
                useCases={useCasesForSection}
                title="Solutions for Every Team"
                description="See how VernisAI can help different departments in your organization"
            />

            {/* Competitive Comparison */}
            <CompetitiveComparison
                title="How We Compare"
                description="See how VernisAI stacks up against the competition"
                features={comparisonFeatures}
                competitor1Name="Zapier"
                competitor2Name="ChatGPT"
            />

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
