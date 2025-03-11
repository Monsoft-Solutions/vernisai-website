import {
    Database,
    CheckCircle2,
    Book,
    FileText,
    Image,
    Link as LinkIcon,
    Clock,
    GitMerge,
    Award,
    Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CallToAction } from '@/components/CallToAction';
import '@/styles/fix-overflow.css';

export function KnowledgeBaseFeature() {
    const supportedFormats = [
        {
            icon: <FileText className="h-6 w-6 text-blue-500" />,
            title: 'Text & Documents',
            description:
                'Import text, Word docs, and PDFs seamlessly into your knowledge base.',
            color: 'bg-blue-50',
            borderColor: 'border-blue-100',
        },
        {
            icon: <Image className="h-6 w-6 text-purple-500" />,
            title: 'Images & Media',
            description:
                'Visual information is analyzed and indexed for your agents to reference.',
            color: 'bg-purple-50',
            borderColor: 'border-purple-100',
        },
        {
            icon: <LinkIcon className="h-6 w-6 text-green-500" />,
            title: 'URLs & Web Content',
            description:
                'Capture web resources with automated crawling and updates.',
            color: 'bg-green-50',
            borderColor: 'border-green-100',
        },
        {
            icon: <Database className="h-6 w-6 text-amber-500" />,
            title: 'Structured Data',
            description:
                'Connect databases, spreadsheets, and APIs for real-time information access.',
            color: 'bg-amber-50',
            borderColor: 'border-amber-100',
        },
    ];

    const enhancedFeatures = [
        {
            icon: <Clock className="h-6 w-6 text-blue-500" />,
            title: 'Auto-Knowledge Refresh',
            description:
                'Schedule automatic updates for live data sources, ensuring your knowledge base stays current without manual intervention.',
        },
        {
            icon: <GitMerge className="h-6 w-6 text-purple-500" />,
            title: 'Version Control',
            description:
                'Track changes in your knowledge base over time with complete history and the ability to revert to previous versions.',
        },
        {
            icon: <Award className="h-6 w-6 text-green-500" />,
            title: 'Source Prioritization',
            description:
                'Rank sources by reliability and importance so your agents always reference the most authoritative information first.',
        },
        {
            icon: <Shield className="h-6 w-6 text-amber-500" />,
            title: 'Conflict Resolution',
            description:
                'Define rules for handling conflicting data from multiple sources, ensuring consistency in your knowledge base.',
        },
    ];

    // Ensure animations respect user's reduced motion preferences
    const prefersReducedMotion =
        typeof window !== 'undefined'
            ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
            : false;

    const animationSettings = prefersReducedMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 300, damping: 20 };

    const fadeInUpVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-5xl">
                {/* Hero Section */}
                <div className="relative mb-16 text-center md:mb-24">
                    {/* Background gradient blob */}
                    <div className="absolute -top-24 left-1/2 -z-10 h-[400px] w-full max-w-[800px] -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"></div>

                    <motion.div
                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30 md:mb-8 md:h-24 md:w-24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            ...animationSettings,
                            delay: 0.1,
                        }}
                    >
                        <Book className="h-10 w-10 text-white md:h-12 md:w-12" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:mb-6 md:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...animationSettings, delay: 0.2 }}
                    >
                        Advanced Knowledge Base
                    </motion.h1>
                    <motion.p
                        className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ...animationSettings, delay: 0.3 }}
                    >
                        Empower your AI assistants with the exact information
                        they need, exactly when they need it
                    </motion.p>
                </div>

                {/* Main explanation */}
                <motion.div
                    className="prose prose-lg mb-16 max-w-none md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...animationSettings, delay: 0.4 }}
                >
                    <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-md md:p-10">
                        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                            What Is A Knowledge Base?
                        </h2>
                        <div className="mb-8 flex justify-start">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-20"></div>
                        </div>
                        <p className="mb-6 text-lg leading-relaxed text-gray-700">
                            A <strong>knowledge base</strong> serves as the
                            memory and reference library for your AI agents,
                            providing them with the contextual information they
                            need to make informed decisions and take appropriate
                            actions. Unlike typical document storage, our
                            knowledge base transforms your information into
                            vector embeddings that allow for semantic search and
                            contextual retrieval.
                        </p>

                        <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                            Key Capabilities
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                <span>
                                    <strong>Semantic Understanding</strong> -
                                    Agents grasp the meaning behind your
                                    documents, not just keywords
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                <span>
                                    <strong>Multi-Format Support</strong> -
                                    Import virtually any type of content into
                                    your knowledge base
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                <span>
                                    <strong>Real-time Access</strong> -
                                    Information is retrieved in milliseconds,
                                    making your agents incredibly responsive
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                <span>
                                    <strong>Granular Permissions</strong> -
                                    Control exactly which agents can access
                                    specific knowledge assets
                                </span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Supported Formats Section */}
                <motion.div
                    className="no-overflow relative mb-20 overflow-hidden rounded-2xl md:mb-24"
                    variants={fadeInUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...animationSettings, delay: 0.5 }}
                >
                    {/* Background decoration */}
                    <div className="decorative-element absolute -z-10 h-full w-full rotate-3 transform rounded-3xl bg-gradient-to-r from-purple-50 to-blue-50 opacity-70 blur-xl"></div>

                    <div className="p-8 md:p-12">
                        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:mb-8 md:text-4xl">
                            Supports All Your Content Types
                        </h2>
                        <div className="mb-8 flex justify-center md:mb-10">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-20"></div>
                        </div>

                        <div className="card-grid-container grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                            {supportedFormats.map((format, index) => (
                                <motion.div
                                    key={index}
                                    className={`rounded-xl border p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${format.color} ${format.borderColor}`}
                                    whileHover={{ scale: 1.03 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        ...animationSettings,
                                        delay: 0.5 + index * 0.1,
                                    }}
                                >
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white p-3 shadow-sm">
                                        {format.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                                        {format.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {format.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Enhanced Management Section */}
                <motion.div
                    className="no-overflow relative mb-20 md:mb-24"
                    variants={fadeInUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...animationSettings, delay: 0.6 }}
                >
                    <div className="absolute inset-0 -z-10 rotate-1 transform rounded-2xl bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 opacity-95"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-[url('/images/grid-pattern.svg')] opacity-10 mix-blend-soft-light"></div>

                    <div className="relative overflow-hidden rounded-2xl px-8 py-12 text-white md:px-12 md:py-16">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/4 -translate-y-1/2 rounded-full bg-blue-600/20 opacity-30 blur-3xl filter"></div>
                        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/4 translate-y-1/2 rounded-full bg-purple-600/20 opacity-30 blur-3xl filter"></div>

                        <h2 className="mb-6 text-center text-3xl font-bold text-white md:mb-8 md:text-4xl">
                            Enterprise-Grade Knowledge Management
                        </h2>
                        <div className="mb-10 flex justify-center">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 md:w-24"></div>
                        </div>

                        <div className="card-grid-container grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                            {enhancedFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-xl md:p-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        ...animationSettings,
                                        delay: 0.6 + index * 0.1,
                                    }}
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 p-3">
                                        {feature.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-200">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <CallToAction
                    title="Ready to Transform Your Knowledge?"
                    description="Give your AI agents access to your most valuable information with our powerful knowledge base technology."
                    buttonText="Join Waitlist"
                    buttonLink="/waitlist"
                    height="tall"
                    alignment="center"
                    gradient="from-blue-600 to-purple-700"
                />
            </div>
        </div>
    );
}
