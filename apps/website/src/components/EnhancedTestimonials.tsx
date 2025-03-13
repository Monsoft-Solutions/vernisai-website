import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { Quote, TrendingUp, Award, Briefcase } from 'lucide-react';
import { Testimonial } from '../data/testimonials';

interface EnhancedTestimonialsProps {
    testimonials: Testimonial[];
    title?: string;
    description?: string;
    showMetrics?: boolean;
    showCompany?: boolean;
    showIndustry?: boolean;
    showUseCase?: boolean;
    variant?: 'default' | 'grid' | 'carousel';
    className?: string;
}

export function EnhancedTestimonials({
    testimonials,
    title = 'What Our Customers Say',
    description = 'Real results from real businesses using VernisAI',
    showMetrics = true,
    showCompany = true,
    showIndustry = true,
    showUseCase = true,
    variant = 'default',
    className = '',
}: EnhancedTestimonialsProps) {
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

                {variant === 'grid' ? (
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={`${testimonial.author}-${index}`}
                                testimonial={testimonial}
                                index={index}
                                showMetrics={showMetrics}
                                showCompany={showCompany}
                                showIndustry={showIndustry}
                                showUseCase={showUseCase}
                                initialFadeInAnimation={initialFadeInAnimation}
                                fadeInAnimation={fadeInAnimation}
                                shouldReduceMotion={shouldReduceMotion ?? false}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mx-auto max-w-7xl">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialRow
                                key={`${testimonial.author}-${index}`}
                                testimonial={testimonial}
                                index={index}
                                showMetrics={showMetrics}
                                showCompany={showCompany}
                                showIndustry={showIndustry}
                                showUseCase={showUseCase}
                                initialFadeInAnimation={initialFadeInAnimation}
                                fadeInAnimation={fadeInAnimation}
                                shouldReduceMotion={shouldReduceMotion ?? false}
                                isEven={index % 2 === 0}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
    showMetrics: boolean;
    showCompany: boolean;
    showIndustry: boolean;
    showUseCase: boolean;
    initialFadeInAnimation: TargetAndTransition;
    fadeInAnimation: TargetAndTransition;
    shouldReduceMotion: boolean;
}

function TestimonialCard({
    testimonial,
    index,
    showMetrics,
    showCompany,
    showIndustry,
    showUseCase,
    initialFadeInAnimation,
    fadeInAnimation,
    shouldReduceMotion,
}: TestimonialCardProps) {
    return (
        <motion.div
            className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            initial={initialFadeInAnimation}
            whileInView={fadeInAnimation}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
            }}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
        >
            {(showIndustry || showUseCase) &&
                (testimonial.industry || testimonial.useCase) && (
                    <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-6 py-3">
                        {testimonial.industry && showIndustry && (
                            <div className="flex items-center text-xs font-medium text-gray-500">
                                <Briefcase className="mr-1 h-3 w-3" />
                                {testimonial.industry}
                            </div>
                        )}
                        {testimonial.useCase && showUseCase && (
                            <div className="flex items-center text-xs font-medium text-gray-500">
                                <Award className="mr-1 h-3 w-3" />
                                {testimonial.useCase}
                            </div>
                        )}
                    </div>
                )}

            <div className="flex flex-grow flex-col p-6">
                <div className="mb-4 text-blue-500">
                    <Quote className="h-8 w-8" />
                </div>
                <p className="mb-6 flex-grow text-gray-700">
                    "{testimonial.quote}"
                </p>

                {showMetrics &&
                    testimonial.metrics &&
                    testimonial.metrics.length > 0 && (
                        <div className="mb-6 grid grid-cols-2 gap-4 rounded-lg bg-blue-50 p-4 sm:grid-cols-3">
                            {testimonial.metrics.map((metric, i) => (
                                <div key={i} className="text-center">
                                    <div className="mb-1 text-xs font-medium text-gray-500 uppercase">
                                        {metric.label}
                                    </div>
                                    <div className="flex items-center justify-center text-lg font-bold text-blue-600">
                                        <TrendingUp className="mr-1 h-4 w-4" />
                                        {metric.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                <div className="mt-auto flex items-center">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="mr-4 h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-gray-900">
                            {testimonial.author}
                        </h4>
                        <p className="text-sm text-gray-600">
                            {testimonial.title}
                        </p>
                        {showCompany && (
                            <p className="text-xs text-gray-500">
                                {testimonial.company}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

interface TestimonialRowProps extends TestimonialCardProps {
    isEven: boolean;
}

function TestimonialRow({
    testimonial,
    index,
    showMetrics,
    showCompany,
    showIndustry,
    showUseCase,
    initialFadeInAnimation,
    fadeInAnimation,
    shouldReduceMotion,
    isEven,
}: TestimonialRowProps) {
    return (
        <motion.div
            className={`mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow last:mb-0 hover:shadow-md`}
            initial={initialFadeInAnimation}
            whileInView={fadeInAnimation}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
            }}
        >
            <div
                className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
                <div className="flex-1 p-6 md:p-8">
                    <div className="mb-4 text-blue-500">
                        <Quote className="h-8 w-8" />
                    </div>
                    <p className="mb-6 text-lg text-gray-700">
                        "{testimonial.quote}"
                    </p>

                    <div className="flex items-center">
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="mr-4 h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                                {testimonial.author}
                            </h4>
                            <p className="text-gray-600">{testimonial.title}</p>
                            {showCompany && (
                                <p className="text-sm text-gray-500">
                                    {testimonial.company}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {showMetrics &&
                    testimonial.metrics &&
                    testimonial.metrics.length > 0 && (
                        <div className="flex flex-col justify-center bg-blue-50 p-6 md:w-80 md:p-8">
                            {(showIndustry || showUseCase) &&
                                (testimonial.industry ||
                                    testimonial.useCase) && (
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {testimonial.industry &&
                                            showIndustry && (
                                                <div className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                                                    <Briefcase className="mr-1 h-3 w-3" />
                                                    {testimonial.industry}
                                                </div>
                                            )}
                                        {testimonial.useCase && showUseCase && (
                                            <div className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                                                <Award className="mr-1 h-3 w-3" />
                                                {testimonial.useCase}
                                            </div>
                                        )}
                                    </div>
                                )}

                            <h5 className="mb-4 text-center text-lg font-semibold text-gray-900">
                                Results Achieved
                            </h5>
                            <div className="space-y-4">
                                {testimonial.metrics.map((metric, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between"
                                    >
                                        <span className="text-sm font-medium text-gray-600">
                                            {metric.label}
                                        </span>
                                        <span className="flex items-center text-lg font-bold text-blue-600">
                                            <TrendingUp className="mr-1 h-4 w-4" />
                                            {metric.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
            </div>
        </motion.div>
    );
}
