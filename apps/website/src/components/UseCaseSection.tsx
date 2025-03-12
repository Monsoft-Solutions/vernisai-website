import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface UseCaseFeature {
    title: string;
    description: string;
}

interface UseCase {
    id: string;
    title: string;
    description: string;
    features: UseCaseFeature[];
    image: string;
    ctaText: string;
    ctaLink: string;
}

interface UseCaseSectionProps {
    useCases: UseCase[];
    title?: string;
    description?: string;
    className?: string;
}

export function UseCaseSection({
    useCases,
    title = 'Perfect for Every Team',
    description = 'See how VernisAI can transform workflows for different teams and industries',
    className = '',
}: UseCaseSectionProps) {
    const shouldReduceMotion = useReducedMotion();

    // Animation settings that respect reduced motion preferences
    const fadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

    const initialFadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 20 };

    return (
        <section className={`w-full py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mx-auto mb-16 max-w-3xl text-center"
                    initial={initialFadeInAnimation}
                    whileInView={fadeInAnimation}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600">{description}</p>
                </motion.div>

                <div className="space-y-24">
                    {useCases.map((useCase, index) => (
                        <UseCaseRow
                            key={useCase.id}
                            useCase={useCase}
                            index={index}
                            initialFadeInAnimation={initialFadeInAnimation}
                            fadeInAnimation={fadeInAnimation}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface UseCaseRowProps {
    useCase: UseCase;
    index: number;
    initialFadeInAnimation: TargetAndTransition;
    fadeInAnimation: TargetAndTransition;
}

function UseCaseRow({
    useCase,
    index,
    initialFadeInAnimation,
    fadeInAnimation,
}: UseCaseRowProps) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="grid gap-12 md:grid-cols-2 md:items-center"
            initial={initialFadeInAnimation}
            whileInView={fadeInAnimation}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="rounded-xl shadow-lg"
                />
            </div>
            <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {useCase.title}
                </h3>
                <p className="mb-6 text-lg text-gray-600">
                    {useCase.description}
                </p>

                <ul className="mb-8 space-y-4">
                    {useCase.features.map((feature) => (
                        <li key={feature.title} className="flex">
                            <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                <Button asChild className="group">
                    <Link to={useCase.ctaLink}>
                        <span>{useCase.ctaText}</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </motion.div>
    );
}

// Example use cases for different audience segments
export const pricingUseCases: UseCase[] = [
    {
        id: 'marketing-teams',
        title: 'For Marketing Teams',
        description:
            'Streamline content creation, campaign management, and analytics reporting with AI-powered automation.',
        features: [
            {
                title: 'Content Creation Acceleration',
                description:
                    'Generate drafts, optimize content, and schedule publications across multiple channels.',
            },
            {
                title: 'Campaign Automation',
                description:
                    'Set up, monitor, and optimize marketing campaigns with minimal manual intervention.',
            },
            {
                title: 'Automated Reporting',
                description:
                    'Generate comprehensive marketing reports in minutes instead of hours.',
            },
        ],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        ctaText: 'See Marketing Solutions',
        ctaLink: '/use-cases/marketing',
    },
    {
        id: 'customer-support',
        title: 'For Customer Support',
        description:
            'Enhance customer satisfaction with faster response times and more accurate support through intelligent automation.',
        features: [
            {
                title: 'Automated Ticket Routing',
                description:
                    'Ensure inquiries reach the right team member instantly based on content and priority.',
            },
            {
                title: 'AI-Powered Responses',
                description:
                    'Generate accurate response drafts for common questions to speed up resolution times.',
            },
            {
                title: 'Knowledge Base Integration',
                description:
                    'Automatically pull relevant information from your knowledge base to assist agents.',
            },
        ],
        image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        ctaText: 'Explore Support Solutions',
        ctaLink: '/use-cases/support',
    },
    {
        id: 'sales-teams',
        title: 'For Sales Teams',
        description:
            'Close more deals with automated follow-ups, intelligent lead scoring, and streamlined sales processes.',
        features: [
            {
                title: 'Automated Follow-ups',
                description:
                    'Never miss a follow-up with intelligent scheduling and personalized messaging.',
            },
            {
                title: 'Lead Prioritization',
                description:
                    'Focus on the most promising leads with AI-powered scoring and insights.',
            },
            {
                title: 'Sales Process Automation',
                description:
                    'Streamline repetitive tasks from prospecting to closing to focus on relationships.',
            },
        ],
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        ctaText: 'Discover Sales Solutions',
        ctaLink: '/use-cases/sales',
    },
];
