import { Clock, Brain, Shield, Zap, Users, Sparkles } from 'lucide-react';
import { FeatureCard } from './ui/feature-card';

export function Benefits() {
    const benefits = [
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
        {
            icon: <Zap className="h-6 w-6 text-yellow-600" />,
            title: 'Boost Productivity',
            description:
                'Accomplish more in less time by delegating routine work to AI assistants that never sleep.',
            color: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
            shadowColor: 'shadow-yellow-100',
        },
        {
            icon: <Users className="h-6 w-6 text-red-600" />,
            title: 'Enhance Collaboration',
            description:
                'Streamline teamwork with automated information sharing and workflow coordination.',
            color: 'bg-red-50',
            borderColor: 'border-red-200',
            shadowColor: 'shadow-red-100',
        },
        {
            icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
            title: 'Focus on What Matters',
            description:
                'Dedicate your energy to creative and strategic work while AI handles the routine.',
            color: 'bg-indigo-50',
            borderColor: 'border-indigo-200',
            shadowColor: 'shadow-indigo-100',
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
            {/* Background elements */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-100 opacity-30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-100 opacity-30 blur-3xl" />

            <div className="px-4 md:px-6">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Why Choose{' '}
                        <span className="text-blue-600">VernisAI</span>?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Experience the transformative power of AI automation in
                        your daily life
                    </p>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <FeatureCard
                                key={index}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                color={benefit.color}
                                borderColor={benefit.borderColor}
                                shadowColor={benefit.shadowColor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
