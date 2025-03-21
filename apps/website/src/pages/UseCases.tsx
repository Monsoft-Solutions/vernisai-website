import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTAWorkflowAutomation } from '../components/CTA';
import { FAQ, SEO } from '../components';
import { useCasesFAQItems } from '../data/faq-data';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { useEffect, useState } from 'react';
import { useCases } from '../data/use-cases';
import { UseCaseIcon } from '../components/use-cases/use-case-icon';

// Add custom CSS for the blue gradient text
import './text-gradient.css';

// Rotating text component with proper animation
interface RotatingTextProps {
    texts: string[];
    interval?: number;
    className?: string;
}

const RotatingText = ({
    texts,
    interval = 3000,
    className = '',
}: RotatingTextProps) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => clearInterval(timer);
    }, [texts, interval]);

    return (
        <div className={`relative ${className}`}>
            <div className="relative flex h-[1.5em] items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                        }}
                        className="absolute inset-0 flex items-center justify-center text-center"
                        style={{
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                            willChange: 'transform, opacity',
                        }}
                        data-text={texts[index]}
                    >
                        {texts[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export function UseCases() {
    // Rotating text phrases that audience can relate to
    const rotatingPhrases = [
        'Analyze Data',
        'Create Content',
        'Manage Projects',
        'Automate Tasks',
        'Enhance Meetings',
        'Organize Knowledge',
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section with improved styling */}
            <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-100 opacity-80 blur-3xl"></div>
                    <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-indigo-100 opacity-80 blur-3xl"></div>
                    <div className="absolute -bottom-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-100 opacity-80 blur-3xl"></div>
                    <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-amber-100 opacity-60 blur-3xl"></div>
                    {/* Add subtle animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 container mx-auto flex min-h-[100dvh] flex-col items-center justify-center px-4 py-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="mb-8"
                        >
                            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-800 shadow-md">
                                AI-Powered Solutions
                            </span>
                        </motion.div>
                        <motion.h1
                            className="mb-10 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1,
                                ease: 'easeOut',
                            }}
                        >
                            <span className="mb-6 block">Ready to</span>
                            <div className="mb-6 flex h-32 items-center justify-center overflow-visible sm:h-36 md:h-40">
                                <RotatingText
                                    texts={rotatingPhrases}
                                    interval={3000}
                                    className="text-5xl text-blue-700/90 sm:text-6xl md:text-7xl lg:text-8xl"
                                />
                            </div>
                            <span className="block">with VernisAI?</span>
                        </motion.h1>
                        <motion.p
                            className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-600 md:text-2xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: 'easeOut',
                            }}
                        >
                            Discover how our intelligent AI assistant can help
                            you achieve more in less time across all aspects of
                            your work
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                                ease: 'easeOut',
                            }}
                            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8"
                        >
                            <div className="flex flex-row justify-between gap-4">
                                <Link to="/waitlist">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                                <Link to="/demo">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-blue-200 text-lg font-medium text-blue-600 transition-all hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
                                    >
                                        Watch Demo
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Added decorative element */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                ease: 'easeOut',
                            }}
                            className="mt-20 flex justify-center"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-500 shadow-lg">
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <ArrowRight className="h-6 w-6 rotate-90" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Separator className="mx-auto max-w-5xl" />

            {/* Use Cases Grid */}
            <div className="container mx-auto px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-center">
                        <motion.h2
                            className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Explore Our Use Cases
                        </motion.h2>
                        <motion.p
                            className="mx-auto max-w-2xl text-lg text-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            See how Vernis AI can transform your workflow and
                            boost productivity across different areas of your
                            business
                        </motion.p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {useCases.map((useCase) => (
                            <motion.div
                                key={useCase.id}
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                            >
                                <Link
                                    to={`/use-cases/${useCase.id}`}
                                    className="flex h-full flex-col p-6"
                                >
                                    <div className="mb-6 flex items-start justify-between">
                                        <div
                                            className={`flex h-14 w-14 items-center justify-center rounded-lg border ${useCase.iconBgColor} transition-colors duration-300`}
                                        >
                                            <UseCaseIcon
                                                iconName={useCase.iconName}
                                                className={`h-6 w-6 ${useCase.iconColor}`}
                                            />
                                        </div>
                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 transition-colors duration-300 group-hover:bg-gray-200">
                                            Explore
                                        </span>
                                    </div>
                                    <h3
                                        className={`mb-3 text-xl font-semibold ${useCase.iconColor}`}
                                    >
                                        {useCase.name}
                                    </h3>
                                    <p className="mb-6 flex-grow text-gray-600">
                                        {useCase.shortDescription}
                                    </p>
                                    <div className="mt-auto flex items-center text-blue-600 transition-all duration-300 group-hover:translate-x-1">
                                        <span className="font-medium">
                                            Learn more
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* CTA Section */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl bg-white p-8 shadow-xl sm:p-12"
            >
                <CTAWorkflowAutomation
                    showSeparator={false}
                    title="Ready to boost your productivity?"
                    description="Join our waitlist to be among the first to experience how VernisAI can transform your daily workflows."
                    buttonText="Join the Waitlist"
                    variant="gradient"
                    showBadge={true}
                    badgeText="Limited Early Access"
                    showFooterText={true}
                    secondaryButton={{
                        text: 'Learn More',
                        link: '/about',
                    }}
                />
            </motion.div>

            {/* FAQ Section */}
            <FAQ
                title="Use Cases FAQ"
                summary="Common questions about how VernisAI can be applied to different business scenarios"
                items={useCasesFAQItems}
                variant="light"
                className="py-20"
                titleClassName="text-purple-600"
            />

            <SEO
                title="Use Cases | VernisAI"
                description="Discover how VernisAI can transform your workflow and boost productivity across different areas of your business."
                keywords="AI assistant, task automation, knowledge management, content creation, meeting enhancement, project management, personal assistant, learning acceleration, data analysis"
                canonicalUrl="https://vernis.ai/use-cases"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'WebPage',
                    name: 'VernisAI Use Cases',
                    description:
                        'Discover how VernisAI can transform your workflow and boost productivity across different areas of your business.',
                    url: 'https://vernis.ai/use-cases',
                    publisher: {
                        '@type': 'Organization',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                }}
            />
        </div>
    );
}
