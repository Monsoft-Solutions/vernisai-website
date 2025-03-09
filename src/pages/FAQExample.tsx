import { FAQ } from '../components';
import {
    generalFAQItems,
    pricingFAQItems,
    technicalFAQItems,
    gettingStartedFAQItems,
} from '../data/faq-data';

const FAQExample: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Light variant example */}
            <div className="py-8">
                <h1 className="mb-4 text-center text-3xl font-bold">
                    Light Variant Example
                </h1>
                <FAQ
                    title="Frequently Asked Questions"
                    summary="Find answers to commonly asked questions about our platform and services."
                    items={generalFAQItems}
                    variant="light"
                />
            </div>

            {/* Dark variant example */}
            <div className="py-8">
                <h1 className="mb-4 text-center text-3xl font-bold">
                    Dark Variant Example
                </h1>
                <FAQ
                    title="Technical Questions"
                    summary="Technical details about our platform, integrations, and requirements."
                    items={technicalFAQItems}
                    variant="dark"
                    titleClassName="text-blue-400"
                />
            </div>

            {/* Light variant with custom styling */}
            <div className="py-8">
                <h1 className="mb-4 text-center text-3xl font-bold">
                    Light Variant with Custom Styling
                </h1>
                <FAQ
                    title="Pricing Questions"
                    summary="Everything you need to know about our pricing plans and billing."
                    items={pricingFAQItems}
                    variant="light"
                    className="rounded-lg border border-gray-200 shadow-lg"
                    titleClassName="text-green-600"
                />
            </div>

            {/* Dark variant with custom styling */}
            <div className="py-8">
                <h1 className="mb-4 text-center text-3xl font-bold">
                    Dark Variant with Custom Styling
                </h1>
                <FAQ
                    title="Getting Started"
                    summary="Learn how to get started with VernisAI and make the most of our platform."
                    items={gettingStartedFAQItems}
                    variant="dark"
                    className="rounded-lg border border-gray-700 shadow-lg"
                    titleClassName="text-purple-400"
                />
            </div>
        </div>
    );
};

export default FAQExample;
