import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

export function LearningAcceleration() {
    // Learning acceleration use cases
    const learningUseCases = [
        {
            title: 'Personalized Learning Paths',
            description:
                'Create customized learning journeys based on individual knowledge gaps, goals, and learning styles.',
            benefit:
                'Optimize learning efficiency and improve knowledge retention.',
        },
        {
            title: 'Concept Explanation',
            description:
                "Generate clear, multi-level explanations of complex concepts tailored to the learner's background.",
            benefit:
                'Break through learning plateaus and build deeper understanding.',
        },
        {
            title: 'Practice Generation',
            description:
                'Create customized exercises, quizzes, and problems that target specific skills and knowledge areas.',
            benefit:
                'Reinforce learning through deliberate practice at the right difficulty level.',
        },
        {
            title: 'Learning Material Summarization',
            description:
                'Condense textbooks, articles, and lectures into concise, structured summaries.',
            benefit:
                'Quickly grasp key concepts and review material efficiently.',
        },
        {
            title: 'Knowledge Connections',
            description:
                'Identify relationships between different concepts and subjects to build a comprehensive knowledge network.',
            benefit: 'Develop deeper understanding through connected learning.',
        },
        {
            title: 'Progress Tracking',
            description:
                'Monitor learning progress, identify knowledge gaps, and suggest areas for review.',
            benefit:
                'Stay motivated with clear visibility into learning achievements.',
        },
    ];

    // Key benefits of AI-assisted learning
    const keyBenefits = [
        'Learn new skills and subjects up to 3x faster',
        'Retain information longer with personalized reinforcement',
        'Overcome learning obstacles with adaptive explanations',
        'Develop deeper understanding through connected knowledge',
        'Maintain motivation with visible progress and achievements',
        'Learn efficiently at your own pace and on your own schedule',
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
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <GraduationCap className="h-8 w-8 text-pink-600" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Learning Acceleration
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Speed up learning processes with AI-assisted education
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
                        Learning new skills and knowledge is essential in
                        today's rapidly changing world, but traditional learning
                        methods are often inefficient and one-size-fits-all.
                        Vernis AI transforms the learning experience by
                        personalizing content, providing adaptive explanations,
                        and optimizing the entire learning process.
                    </p>
                    <p className="text-gray-700">
                        Whether you're mastering a new professional skill,
                        studying an academic subject, or pursuing a personal
                        interest, our AI learning assistant helps you learn
                        faster, retain more, and overcome obstacles that might
                        otherwise slow your progress or lead to abandonment.
                    </p>
                </motion.div>

                {/* Learning Acceleration Use Cases */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Learning Acceleration Applications
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {learningUseCases.map((useCase, index) => (
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
                                Initial assessment:
                            </span>{' '}
                            The system evaluates your current knowledge level,
                            learning style, and specific goals.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Personalized learning plan:
                            </span>{' '}
                            Based on the assessment, a customized learning path
                            is created with appropriate content and pacing.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Adaptive content delivery:
                            </span>{' '}
                            Learning materials are presented in formats that
                            match your learning preferences and adjusted based
                            on your progress.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Interactive practice:
                            </span>{' '}
                            Targeted exercises and quizzes reinforce learning
                            and identify areas that need additional focus.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Continuous optimization:
                            </span>{' '}
                            The system analyzes your learning patterns and
                            adjusts strategies to maximize efficiency and
                            retention.
                        </li>
                    </ol>
                </motion.div>

                {/* Featured Capability */}
                <motion.div
                    className="mb-12 rounded-lg border border-pink-200 bg-pink-50 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="mb-3 text-xl font-semibold text-pink-700">
                        Featured Capability: Multi-Perspective Learning
                    </h3>
                    <p className="mb-4 text-gray-700">
                        Vernis AI's unique multi-perspective approach helps you
                        develop deeper understanding:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-gray-700">
                        <li>
                            Explains concepts from multiple angles to find what
                            resonates with you
                        </li>
                        <li>
                            Provides real-world examples that connect to your
                            existing knowledge
                        </li>
                        <li>
                            Presents information at increasing levels of
                            complexity as you progress
                        </li>
                        <li>
                            Identifies connections between what you're learning
                            and other domains
                        </li>
                        <li>
                            Adapts explanations based on your feedback and
                            comprehension
                        </li>
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
                        Ready to Accelerate Your Learning?
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Join our waitlist to be among the first to experience
                        the power of AI-enhanced learning with Vernis AI.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/waitlist">Join our waitlist</Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
