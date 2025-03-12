import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { Clock, TrendingUp, DollarSign, Users, BarChart } from 'lucide-react';

interface ValueMetric {
    label: string;
    value: string;
    description: string;
    icon: 'time' | 'growth' | 'money' | 'users' | 'performance';
}

interface ValueMetricsProps {
    title?: string;
    description?: string;
    metrics: ValueMetric[];
    className?: string;
}

export function ValueMetrics({
    title = 'Real Results, Real Value',
    description = 'See how VernisAI delivers measurable ROI for businesses like yours',
    metrics,
    className = '',
}: ValueMetricsProps) {
    const shouldReduceMotion = useReducedMotion();

    // Animation settings that respect reduced motion preferences
    const fadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

    const initialFadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 20 };

    const getIcon = (iconType: string) => {
        switch (iconType) {
            case 'time':
                return <Clock className="h-6 w-6 text-blue-500" />;
            case 'growth':
                return <TrendingUp className="h-6 w-6 text-green-500" />;
            case 'money':
                return <DollarSign className="h-6 w-6 text-emerald-500" />;
            case 'users':
                return <Users className="h-6 w-6 text-purple-500" />;
            case 'performance':
                return <BarChart className="h-6 w-6 text-orange-500" />;
            default:
                return <TrendingUp className="h-6 w-6 text-blue-500" />;
        }
    };

    return (
        <section className={`w-full py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mx-auto mb-12 max-w-3xl text-center"
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

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                            initial={initialFadeInAnimation}
                            whileInView={fadeInAnimation}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: shouldReduceMotion ? 0 : index * 0.1,
                            }}
                            whileHover={shouldReduceMotion ? {} : { y: -5 }}
                        >
                            <div className="mb-4 w-fit rounded-full bg-gray-50 p-3">
                                {getIcon(metric.icon)}
                            </div>
                            <div className="mb-2 text-4xl font-extrabold text-gray-900">
                                {metric.value}
                            </div>
                            <h3 className="mb-4 text-xl font-semibold text-gray-800">
                                {metric.label}
                            </h3>
                            <p className="text-gray-600">
                                {metric.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Example value metrics for different plans
export const starterPlanMetrics: ValueMetric[] = [
    {
        label: 'Time Saved Weekly',
        value: '5+ Hours',
        description:
            'Automate repetitive tasks and reclaim valuable time for strategic work',
        icon: 'time',
    },
    {
        label: 'Productivity Increase',
        value: '23%',
        description:
            'Our Starter users report significant productivity gains within the first month',
        icon: 'performance',
    },
    {
        label: 'ROI',
        value: '2.7x',
        description:
            'Average return on investment for small businesses using our Starter plan',
        icon: 'money',
    },
];

export const proPlanMetrics: ValueMetric[] = [
    {
        label: 'Time Saved Weekly',
        value: '15+ Hours',
        description:
            'Pro users save 3x more time than Starter users with advanced automation capabilities',
        icon: 'time',
    },
    {
        label: 'Productivity Increase',
        value: '42%',
        description:
            'Teams using our Pro plan report nearly double the productivity gains of Starter users',
        icon: 'performance',
    },
    {
        label: 'ROI',
        value: '4.3x',
        description:
            'Average return on investment for businesses using our Pro plan',
        icon: 'money',
    },
];

export const enterprisePlanMetrics: ValueMetric[] = [
    {
        label: 'Time Saved Weekly',
        value: '30+ Hours',
        description:
            'Enterprise-level automation delivers maximum time savings across your organization',
        icon: 'time',
    },
    {
        label: 'Productivity Increase',
        value: '68%',
        description:
            'Enterprise customers experience the highest productivity gains with custom workflows',
        icon: 'performance',
    },
    {
        label: 'ROI',
        value: '6.8x',
        description:
            'Average return on investment for organizations using our Enterprise plan',
        icon: 'money',
    },
];

// Industry-specific metrics
export const industryMetrics: Record<string, ValueMetric[]> = {
    marketing: [
        {
            label: 'Content Creation Speed',
            value: '+75%',
            description:
                'Marketing teams create content faster with AI-powered automation',
            icon: 'performance',
        },
        {
            label: 'Campaign Management',
            value: '4x Faster',
            description:
                'Launch and manage marketing campaigns in a fraction of the time',
            icon: 'time',
        },
        {
            label: 'Reporting Time',
            value: '-82%',
            description:
                'Dramatically reduce time spent on creating marketing reports',
            icon: 'time',
        },
    ],
    sales: [
        {
            label: 'Lead Response Time',
            value: '-68%',
            description: 'Respond to leads faster with automated workflows',
            icon: 'time',
        },
        {
            label: 'Deal Closure Rate',
            value: '+32%',
            description:
                'Improve deal closure rates with better follow-up and engagement',
            icon: 'growth',
        },
        {
            label: 'CRM Data Quality',
            value: '+87%',
            description:
                'Maintain cleaner CRM data with automated entry and validation',
            icon: 'performance',
        },
    ],
    support: [
        {
            label: 'First Response Time',
            value: '-74%',
            description:
                'Dramatically reduce time to first response for customer inquiries',
            icon: 'time',
        },
        {
            label: 'Ticket Resolution',
            value: '2.3x Faster',
            description:
                'Resolve support tickets more than twice as fast with AI assistance',
            icon: 'performance',
        },
        {
            label: 'Customer Satisfaction',
            value: '+41%',
            description:
                'Improve CSAT scores with faster, more accurate support',
            icon: 'users',
        },
    ],
};
