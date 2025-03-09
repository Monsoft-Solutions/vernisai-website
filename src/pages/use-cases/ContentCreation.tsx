import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

export function ContentCreation() {
    // Content creation use cases
    const contentUseCases = [
        {
            title: 'Blog Posts & Articles',
            description:
                'Generate well-structured blog posts and articles on any topic with proper research and citations.',
            benefit:
                "Publish content consistently without writer's block or extensive research time.",
        },
        {
            title: 'Social Media Content',
            description:
                'Create engaging posts, captions, and hashtags optimized for different social platforms.',
            benefit:
                'Maintain an active social presence with less time investment.',
        },
        {
            title: 'Marketing Copy',
            description:
                'Generate compelling ad copy, email campaigns, and landing page content that converts.',
            benefit:
                'Improve marketing effectiveness with persuasive, targeted messaging.',
        },
        {
            title: 'Product Descriptions',
            description:
                'Create unique, SEO-friendly descriptions that highlight key features and benefits.',
            benefit:
                'Scale product listings without sacrificing quality or uniqueness.',
        },
        {
            title: 'Video Scripts',
            description:
                'Develop structured scripts for tutorials, explainer videos, and promotional content.',
            benefit: 'Streamline video production with ready-to-film scripts.',
        },
        {
            title: 'Content Optimization',
            description:
                'Refine existing content for clarity, engagement, and SEO performance.',
            benefit:
                'Maximize the impact of your content with data-driven improvements.',
        },
    ];

    // Key benefits of AI-assisted content creation
    const keyBenefits = [
        'Create content 5x faster than traditional methods',
        'Maintain consistent brand voice across all content types',
        'Scale content production without proportionally increasing costs',
        'Overcome creative blocks with AI-generated ideas and outlines',
        'Optimize content for specific platforms and audience segments',
        'Free up creative professionals for higher-value strategic work',
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
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FileText className="h-8 w-8 text-green-600" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Content Creation
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Generate and optimize various types of content faster
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
                        Content creation is often one of the most time-consuming
                        aspects of marketing, communication, and education.
                        Vernis AI transforms this process by helping you
                        generate high-quality content in a fraction of the time
                        it would take manually.
                    </p>
                    <p className="text-gray-700">
                        Our AI doesn't just create generic content—it learns
                        your brand voice, understands your audience, and
                        produces material that resonates with your specific
                        goals. Whether you need blog posts, social media
                        content, marketing copy, or educational materials,
                        Vernis AI helps you create more content, more
                        consistently, without sacrificing quality.
                    </p>
                </motion.div>

                {/* Content Creation Use Cases */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Content Creation Applications
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {contentUseCases.map((useCase, index) => (
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
                                Define your content needs:
                            </span>{' '}
                            Specify the type of content, target audience, tone,
                            and key points you want to address.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Train on your brand voice:
                            </span>{' '}
                            Upload examples of your existing content to help the
                            AI understand and replicate your unique style.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Generate content:
                            </span>{' '}
                            Use our intuitive interface to create first drafts,
                            outlines, or complete pieces based on your
                            specifications.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Review and refine:
                            </span>{' '}
                            Edit the AI-generated content with our collaborative
                            tools to ensure it meets your exact requirements.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Optimize and distribute:
                            </span>{' '}
                            Use built-in tools to optimize content for SEO,
                            readability, and engagement before publishing.
                        </li>
                    </ol>
                </motion.div>

                {/* Featured Capability */}
                <motion.div
                    className="mb-12 rounded-lg border border-green-200 bg-green-50 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="mb-3 text-xl font-semibold text-green-700">
                        Featured Capability: Multi-Format Content Generation
                    </h3>
                    <p className="mb-4 text-gray-700">
                        Vernis AI can transform a single piece of content into
                        multiple formats to maximize your reach:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-gray-700">
                        <li>Convert blog posts into social media threads</li>
                        <li>Transform articles into presentation slides</li>
                        <li>Create video scripts from written content</li>
                        <li>
                            Generate email newsletters from longer content
                            pieces
                        </li>
                        <li>Produce infographics from data-heavy articles</li>
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
                        Ready to Transform Your Content Creation?
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Join our waitlist to be among the first to experience
                        the power of AI-enhanced content creation with Vernis
                        AI.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/waitlist">Join our waitlist</Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
