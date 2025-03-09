import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

export function KnowledgeManagement() {
    // Knowledge management use cases
    const knowledgeUseCases = [
        {
            title: 'Document Summarization',
            description:
                'Automatically extract key points and insights from long documents, reports, and articles.',
            benefit:
                "Saves reading time and ensures important information isn't missed.",
        },
        {
            title: 'Corporate Knowledge Base',
            description:
                'Create a searchable repository of company knowledge, policies, and procedures.',
            benefit:
                'Makes institutional knowledge accessible to all employees.',
        },
        {
            title: 'Research Assistant',
            description:
                'Gather, organize, and analyze information from multiple sources on any topic.',
            benefit:
                'Accelerates research and provides comprehensive insights.',
        },
        {
            title: 'FAQ Generation',
            description:
                'Automatically create and maintain frequently asked questions from support interactions.',
            benefit:
                'Reduces repetitive questions and improves self-service support.',
        },
        {
            title: 'Market Intelligence',
            description:
                'Monitor news, social media, and industry publications for relevant information.',
            benefit:
                'Keeps teams informed of industry trends and competitive moves.',
        },
        {
            title: 'Training Documentation',
            description:
                'Generate and maintain training materials that adapt to different learning styles.',
            benefit:
                'Reduces training development time and improves learning outcomes.',
        },
    ];

    // Key benefits of knowledge management
    const keyBenefits = [
        'Reduce time spent searching for information by up to 35%',
        "Ensure organizational knowledge isn't lost when employees leave",
        'Make better decisions with faster access to complete information',
        'Improve consistency in how information is organized and presented',
        'Enable more effective cross-team collaboration with shared knowledge',
        'Scale expertise across your organization without bottlenecks',
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-4xl">
                {/* Back Button */}
                <Link
                    to="/use-cases"
                    className="mb-8 inline-flex items-center text-blue-600 hover:underline"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Back to Use Cases</span>
                </Link>

                {/* Hero Section */}
                <div className="mb-12 text-center">
                    <motion.div
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <BookOpen className="h-8 w-8 text-blue-600" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Knowledge Management
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Quickly access, organize, and retrieve important
                        information
                    </motion.p>
                </div>

                {/* Overview Section */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
                    <p className="mb-4 text-gray-700">
                        In today's information-rich environment, the challenge
                        isn't finding information—it's finding the
                        <em>right</em> information when you need it. Vernis AI's
                        knowledge management solutions help you capture,
                        organize, and access your most valuable information
                        assets with unprecedented ease.
                    </p>
                    <p className="text-gray-700">
                        Our intelligent system doesn't just store documents—it
                        understands them. By analyzing content, recognizing
                        relationships between information, and learning from how
                        you use it, Vernis AI creates a living knowledge
                        ecosystem that becomes more valuable over time.
                    </p>
                </motion.div>

                {/* Knowledge Use Cases */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Knowledge Management Applications
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {knowledgeUseCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                className="rounded-lg border border-gray-200 p-6 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 * index + 0.5,
                                }}
                            >
                                <h3 className="mb-2 text-xl font-medium">
                                    {useCase.title}
                                </h3>
                                <p className="mb-3 text-gray-600">
                                    {useCase.description}
                                </p>
                                <p className="text-sm font-medium text-blue-600">
                                    Benefit: {useCase.benefit}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Benefits Section */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Key Benefits
                    </h2>
                    <div className="rounded-lg bg-gray-50 p-6">
                        <ul className="space-y-4">
                            {keyBenefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.1 * index + 0.7,
                                    }}
                                >
                                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span>{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* How it Works */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <h2 className="mb-4 text-2xl font-semibold">
                        How It Works
                    </h2>
                    <ol className="ml-5 list-decimal space-y-4">
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Connect your information sources:
                            </span>{' '}
                            Import documents, connect to cloud storage, link
                            databases, or integrate with your existing tools.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Create a knowledge structure:
                            </span>{' '}
                            Use our AI-powered system to automatically organize
                            information or design your own custom taxonomy.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Enrich with metadata:
                            </span>{' '}
                            Add context and relationships to make information
                            more discoverable and useful.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Train your knowledge base:
                            </span>{' '}
                            The system learns from usage patterns to
                            continuously improve relevance and accessibility.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Access and utilize:
                            </span>{' '}
                            Search, query in natural language, or let the AI
                            proactively suggest relevant information based on
                            your current tasks.
                        </li>
                    </ol>
                </motion.div>

                {/* Featured Capability */}
                <motion.div
                    className="mb-12 rounded-lg border border-blue-200 bg-blue-50 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="mb-3 text-xl font-semibold text-blue-700">
                        Featured Capability: Intelligent Document Processing
                    </h3>
                    <p className="mb-4 text-gray-700">
                        Vernis AI doesn't just search for keywords—it
                        understands the meaning and context of your documents.
                        Our system can:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-gray-700">
                        <li>
                            Extract key information from unstructured documents
                        </li>
                        <li>
                            Identify relationships between different pieces of
                            content
                        </li>
                        <li>
                            Generate summaries at different levels of detail
                        </li>
                        <li>
                            Answer specific questions using information spread
                            across multiple documents
                        </li>
                        <li>Identify knowledge gaps and inconsistencies</li>
                    </ul>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="rounded-lg bg-blue-50 p-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    <h2 className="mb-4 text-2xl font-semibold">
                        Transform How Your Organization Manages Knowledge
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Join our waitlist to be among the first to experience
                        the power of AI-enhanced knowledge management with
                        Vernis AI.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/waitlist">Join our waitlist</Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
