import {
    Hero,
    Benefits,
    UseCaseHighlights,
    Waitlist,
    Testimonials,
    EarlyAccessCTA,
    FAQ,
} from '../components';
import { homeFAQItems } from '../data/faq-data';

export function Home() {
    return (
        <div className="flex min-h-screen flex-col">
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
