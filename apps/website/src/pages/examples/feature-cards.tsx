import { FeatureCard } from '@/components/ui/feature-card';
import {
    Clock,
    Brain,
    Shield,
    Zap,
    Users,
    Star,
    Heart,
    Lightbulb,
} from 'lucide-react';

export default function FeatureCardsExample() {
    // Example features for a standard grid layout
    const standardFeatures = [
        {
            icon: <Clock className="h-6 w-6 text-blue-600" />,
            title: 'Save Valuable Time',
            description:
                'Automate repetitive tasks and workflows to reclaim hours of your day for more meaningful work.',
            color: 'bg-blue-50',
            borderColor: 'border-blue-200',
            shadowColor: 'shadow-blue-100',
        },
        {
            icon: <Brain className="h-6 w-6 text-purple-600" />,
            title: 'Reduce Mental Load',
            description:
                'Let AI handle routine decisions and information processing, reducing cognitive burden and stress.',
            color: 'bg-purple-50',
            borderColor: 'border-purple-200',
            shadowColor: 'shadow-purple-100',
        },
        {
            icon: <Shield className="h-6 w-6 text-green-600" />,
            title: 'Minimize Human Error',
            description:
                'Ensure consistency and accuracy in repetitive tasks that are prone to human mistakes.',
            color: 'bg-green-50',
            borderColor: 'border-green-200',
            shadowColor: 'shadow-green-100',
        },
    ];

    // Example features for a clickable cards layout
    const clickableFeatures = [
        {
            icon: <Star className="h-6 w-6 text-amber-600" />,
            title: 'Premium Features',
            description:
                'Access advanced capabilities and exclusive tools with our premium subscription.',
            color: 'bg-amber-50',
            borderColor: 'border-amber-200',
            shadowColor: 'shadow-amber-100',
        },
        {
            icon: <Heart className="h-6 w-6 text-pink-600" />,
            title: 'Customer Support',
            description:
                'Get priority assistance from our dedicated support team whenever you need help.',
            color: 'bg-pink-50',
            borderColor: 'border-pink-200',
            shadowColor: 'shadow-pink-100',
        },
        {
            icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
            title: 'Learning Resources',
            description:
                'Access tutorials, guides, and best practices to get the most out of our platform.',
            color: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
            shadowColor: 'shadow-yellow-100',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="mb-12 text-center text-4xl font-bold">
                Feature Card Examples
            </h1>

            {/* Standard Grid Layout */}
            <section className="mb-20">
                <h2 className="mb-8 text-2xl font-semibold">
                    Standard Grid Layout
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {standardFeatures.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            color={feature.color}
                            borderColor={feature.borderColor}
                            shadowColor={feature.shadowColor}
                        />
                    ))}
                </div>
            </section>

            {/* Clickable Cards */}
            <section className="mb-20">
                <h2 className="mb-8 text-2xl font-semibold">Clickable Cards</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {clickableFeatures.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            color={feature.color}
                            borderColor={feature.borderColor}
                            shadowColor={feature.shadowColor}
                            onClick={() =>
                                alert(`You clicked on ${feature.title}`)
                            }
                        />
                    ))}
                </div>
            </section>

            {/* Horizontal Layout */}
            <section className="mb-20">
                <h2 className="mb-8 text-2xl font-semibold">
                    Horizontal Layout
                </h2>
                <div className="space-y-4">
                    {standardFeatures.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            color={feature.color}
                            borderColor={feature.borderColor}
                            shadowColor={feature.shadowColor}
                            className="flex-row items-center space-x-4"
                        />
                    ))}
                </div>
            </section>

            {/* Custom Styling */}
            <section>
                <h2 className="mb-8 text-2xl font-semibold">Custom Styling</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FeatureCard
                        icon={<Zap className="h-8 w-8 text-white" />}
                        title="Dark Mode"
                        description="A sleek dark-themed card for modern interfaces."
                        color="bg-gray-800"
                        borderColor="border-gray-700"
                        shadowColor="shadow-gray-900"
                        className="text-white"
                    />
                    <FeatureCard
                        icon={<Users className="h-8 w-8 text-white" />}
                        title="Gradient Style"
                        description="Eye-catching gradient background for important features."
                        className="border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    />
                </div>
            </section>
        </div>
    );
}
