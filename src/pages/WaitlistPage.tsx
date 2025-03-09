import { Waitlist, SEO } from '../components';

export function WaitlistPage() {
    return (
        <div className="mx-auto px-4 py-8">
            <SEO
                title="Join the Waitlist - Early Access to VernisAI"
                description="Sign up for early access to VernisAI's AI-powered workflow automation platform. Be among the first to experience our no-code tools for business automation."
                keywords="waitlist, early access, AI platform, workflow automation, sign up"
                canonicalUrl="https://vernis.ai/waitlist"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'WebPage',
                    name: 'VernisAI Waitlist',
                    description:
                        "Sign up for early access to VernisAI's AI-powered workflow automation platform.",
                    url: 'https://vernis.ai/waitlist',
                    publisher: {
                        '@type': 'Organization',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                }}
            />
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-8 text-center text-3xl font-bold">
                    Join the VernisAI Waitlist
                </h1>
                <Waitlist />
            </div>
        </div>
    );
}
