import {
    Hero,
    Benefits,
    UseCaseHighlights,
    Waitlist,
    Testimonials,
    EarlyAccessCTA,
    FAQ,
    SEO,
} from '../components';
import { homeFAQItems } from '../data/faq-data';

export function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <SEO
                title="AI-Powered No-Code Workflow Automation"
                description="VernisAI helps you automate workflows, manage knowledge, and create content with AI-powered no-code tools. Boost productivity and streamline operations."
                keywords="AI automation, workflow automation, no-code tools, productivity, AI assistant, knowledge management"
                canonicalUrl="https://vernis.ai/"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'VernisAI',
                    url: 'https://vernis.ai',
                    logo: 'https://vernis.ai/images/vernisai-logo.png',
                    description: 'AI-Powered No-Code Workflow Automation',
                    sameAs: [
                        'https://twitter.com/vernisai',
                        'https://linkedin.com/company/vernisai',
                    ],
                }}
            />
            <main className="flex-1">
                <Hero />
                <Benefits />
                <div className="container mx-auto px-4 py-8">
                    <EarlyAccessCTA />
                </div>
                <UseCaseHighlights />
                <Testimonials />
                <FAQ
                    title="Frequently Asked Questions"
                    summary="Find answers to common questions about VernisAI and how it can help your business."
                    items={homeFAQItems}
                    variant="light"
                />
                <Waitlist />
            </main>
        </div>
    );
}
