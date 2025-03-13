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
import { SEO } from '@/components';
import '@/styles/fix-overflow.css';

export function KnowledgeBaseFeature() {
    const supportedFormats = [
        {
            icon: <FileText className="h-6 w-6 text-blue-500" />,
            title: 'Documents',
            description:
                'Import PDFs, Word docs, text files and keep text formatting.',
            color: 'bg-blue-50',
            borderColor: 'border-blue-100',
        },
        {
            icon: <Image className="h-6 w-6 text-green-500" />,
            title: 'Images',
            description:
                'Add images that are analyzed and made searchable with AI.',
            color: 'bg-green-50',
            borderColor: 'border-green-100',
        },
        {
            icon: <LinkIcon className="h-6 w-6 text-purple-500" />,
            title: 'Web Pages',
            description: 'Import content from URLs that updates automatically.',
            color: 'bg-purple-50',
            borderColor: 'border-purple-100',
        },
        {
            icon: <Database className="h-6 w-6 text-orange-500" />,
            title: 'Database Records',
            description:
                'Connect to your database to make structured data accessible.',
            color: 'bg-orange-50',
            borderColor: 'border-orange-100',
        },
    ];

    const features = [
        {
            icon: <Clock className="h-6 w-6 text-blue-600" />,
            title: 'Real-time Availability',
            description:
                'Newly added knowledge is immediately available to all agents that have access permissions.',
        },
        {
            icon: <GitMerge className="h-6 w-6 text-purple-600" />,
            title: 'Automatic Versioning',
            description:
                'Every update creates a new version that is tracked, with the ability to roll back when needed.',
        },
        {
            icon: <Award className="h-6 w-6 text-amber-600" />,
            title: 'Advanced Retrieval',
            description:
                'Sophisticated semantic search capabilities ensure agents find exactly what they need.',
        },
        {
            icon: <Shield className="h-6 w-6 text-green-600" />,
            title: 'Enterprise Security',
            description:
                'Control information access with role-based permissions and optional encryption at rest.',
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
        <>
            <SEO
                title="Knowledge Base - Enhanced AI Context with Your Data"
                description="Create a secure, intelligent knowledge base to give your AI agents the exact information they need to perform tasks and answer questions accurately."
                keywords="knowledge base, AI context, semantic search, document embeddings, vector database"
                canonicalUrl="https://vernis.ai/features/knowledge-base"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    name: 'VernisAI Knowledge Base',
                    description:
                        'An intelligent knowledge base that transforms your information into vector embeddings for semantic search and contextual retrieval.',
                    url: 'https://vernis.ai/features/knowledge-base',
                    category: 'Software',
                    brand: {
                        '@type': 'Brand',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                    offers: {
                        '@type': 'Offer',
                        availability: 'https://schema.org/ComingSoon',
                        price: '29',
                        priceCurrency: 'USD',
                        priceValidUntil: '2025-12-31',
                    },
                }}
            />
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
                            Empower your AI assistants with the exact
                            information they need, exactly when they need it
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
                                providing them with the contextual information
                                they need to make informed decisions and take
                                appropriate actions. Unlike typical document
                                storage, our knowledge base transforms your
                                information into vector embeddings that allow
                                for semantic search and contextual retrieval.
                            </p>

                            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                Key Capabilities
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                    <span>
                                        <strong>Semantic Understanding</strong>{' '}
                                        - Agents grasp the meaning behind your
                                        documents, not just keywords
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                    <span>
                                        <strong>Multi-Format Support</strong> -
                                        Import virtually any type of content
                                        into your knowledge base
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                    <span>
                                        <strong>Real-time Access</strong> -
                                        Information is retrieved in
                                        milliseconds, making your agents
                                        incredibly responsive
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
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                                            {format.icon}
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                            {format.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {format.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature Grid */}
                    <motion.div
                        className="mb-20 md:mb-24"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:mb-8 md:text-4xl">
                            Built for Enterprise Needs
                        </h2>
                        <div className="mb-8 flex justify-center md:mb-10">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-20"></div>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
                                        {feature.icon}
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
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
        </>
    );
}
