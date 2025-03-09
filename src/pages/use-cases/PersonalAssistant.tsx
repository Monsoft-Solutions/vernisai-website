import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

export function PersonalAssistant() {
    // Personal assistant use cases
    const assistantUseCases = [
        {
            title: 'Email Management',
            description:
                'Sort, prioritize, and draft responses to emails based on content and importance.',
            benefit:
                'Reduce email overload and ensure timely responses to important messages.',
        },
        {
            title: 'Calendar Organization',
            description:
                'Schedule meetings, suggest optimal time slots, and manage calendar conflicts.',
            benefit:
                'Optimize your schedule and eliminate scheduling headaches.',
        },
        {
            title: 'Task Management',
            description:
                'Track to-dos, set reminders, and prioritize tasks based on deadlines and importance.',
            benefit: 'Stay on top of commitments without mental overhead.',
        },
        {
            title: 'Information Retrieval',
            description:
                'Quickly find documents, emails, or information across your digital workspace.',
            benefit: 'Eliminate time wasted searching for information.',
        },
        {
            title: 'Travel Planning',
            description:
                'Research options, make reservations, and create detailed itineraries for business or personal travel.',
            benefit:
                'Simplify travel logistics and focus on the purpose of your trip.',
        },
        {
            title: 'Personal Development',
            description:
                'Track goals, suggest learning resources, and provide accountability for personal growth objectives.',
            benefit: 'Make consistent progress on your development goals.',
        },
    ];

    // Key benefits of a personal assistant
    const keyBenefits = [
        'Reclaim 10+ hours per week spent on administrative tasks',
        'Never miss important deadlines or appointments',
        'Reduce cognitive load from managing multiple responsibilities',
        'Maintain better work-life balance with improved organization',
        'Respond more quickly to time-sensitive matters',
        'Focus your energy on high-value work and personal priorities',
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
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <UserCircle className="h-8 w-8 text-indigo-600" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Personal Assistant
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Handle daily organizational tasks to free up mental
                        space
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
                        The modern professional juggles countless
                        responsibilities, communications, and tasks—creating
                        mental overload that reduces focus and productivity.
                        Vernis AI's personal assistant capabilities help you
                        offload administrative burdens and stay organized
                        without constant attention.
                    </p>
                    <p className="text-gray-700">
                        Unlike simple reminder apps or basic scheduling tools,
                        our AI personal assistant understands context, learns
                        your preferences, and proactively manages your digital
                        life. It works across your email, calendar, documents,
                        and communication tools to create a seamless support
                        system that adapts to your unique needs.
                    </p>
                </motion.div>

                {/* Personal Assistant Use Cases */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Personal Assistant Applications
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {assistantUseCases.map((useCase, index) => (
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
                                Connect your digital tools:
                            </span>{' '}
                            Integrate with your email, calendar, task management
                            apps, and other productivity tools.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Personalize your assistant:
                            </span>{' '}
                            Set preferences, priorities, and communication
                            styles to match your working style.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">Delegate tasks:</span>{' '}
                            Assign administrative work to your assistant through
                            natural language commands or automated rules.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Review and approve:
                            </span>{' '}
                            The assistant handles routine tasks autonomously but
                            seeks your approval for important decisions.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Continuous learning:
                            </span>{' '}
                            Your assistant improves over time by learning from
                            your feedback and observing your preferences.
                        </li>
                    </ol>
                </motion.div>

                {/* Featured Capability */}
                <motion.div
                    className="mb-12 rounded-lg border border-indigo-200 bg-indigo-50 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="mb-3 text-xl font-semibold text-indigo-700">
                        Featured Capability: Contextual Awareness
                    </h3>
                    <p className="mb-4 text-gray-700">
                        Vernis AI's personal assistant understands the full
                        context of your work and life:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-gray-700">
                        <li>
                            Recognizes relationships between different tasks and
                            communications
                        </li>
                        <li>
                            Understands your priorities and adjusts
                            recommendations accordingly
                        </li>
                        <li>
                            Connects information across different platforms and
                            applications
                        </li>
                        <li>
                            Anticipates your needs based on patterns and
                            upcoming events
                        </li>
                        <li>
                            Provides relevant information at the right time
                            without being asked
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
                        Ready to Have Your Own AI Assistant?
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Join our waitlist to be among the first to experience
                        the power of an intelligent personal assistant with
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
