import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { Clock, TrendingUp, DollarSign, Users, BarChart } from 'lucide-react';
import { FeatureCard } from '@/components/ui/feature-card';
import { ValueMetric } from '@/types/metrics';

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

    // Map icon types to color classes
    const getColorClasses = (iconType: string) => {
        switch (iconType) {
            case 'time':
                return {
                    color: 'bg-blue-50',
                    borderColor: 'border-blue-200',
                    shadowColor: 'shadow-blue-100',
                };
            case 'growth':
                return {
                    color: 'bg-green-50',
                    borderColor: 'border-green-200',
                    shadowColor: 'shadow-green-100',
                };
            case 'money':
                return {
                    color: 'bg-emerald-50',
                    borderColor: 'border-emerald-200',
                    shadowColor: 'shadow-emerald-100',
                };
            case 'users':
                return {
                    color: 'bg-purple-50',
                    borderColor: 'border-purple-200',
                    shadowColor: 'shadow-purple-100',
                };
            case 'performance':
                return {
                    color: 'bg-orange-50',
                    borderColor: 'border-orange-200',
                    shadowColor: 'shadow-orange-100',
                };
            default:
                return {
                    color: 'bg-blue-50',
                    borderColor: 'border-blue-200',
                    shadowColor: 'shadow-blue-100',
                };
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
                    <p className="text-lg text-gray-600">{description}</p>
                </motion.div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {metrics.map((metric, index) => {
                        const colorClasses = getColorClasses(metric.icon);

                        return (
                            <motion.div
                                key={metric.label}
                                initial={initialFadeInAnimation}
                                whileInView={fadeInAnimation}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: shouldReduceMotion ? 0 : index * 0.1,
                                }}
                            >
                                <FeatureCard
                                    icon={getIcon(metric.icon)}
                                    title={metric.label}
                                    description={
                                        <>
                                            <div className="mb-2 text-4xl font-extrabold text-gray-900">
                                                {metric.value}
                                            </div>
                                            <p className="text-gray-600">
                                                {metric.description}
                                            </p>
                                        </>
                                    }
                                    color={colorClasses.color}
                                    borderColor={colorClasses.borderColor}
                                    shadowColor={colorClasses.shadowColor}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
