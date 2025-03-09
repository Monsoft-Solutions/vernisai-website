import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Mail,
    BarChart2,
    Calendar,
    MessageSquare,
    FileText,
    BrainCircuit,
    Briefcase,
    Database,
} from 'lucide-react';
import { Button } from './ui/button';
import { FeatureCard } from './ui/feature-card';
import { cn } from '@/lib/utils';

export function UseCaseHighlights() {
    const navigate = useNavigate();
    
    // Card color variants for visual appeal
    const cardVariants = [
        { bg: 'bg-blue-50/80', border: 'border-blue-200', shadow: 'shadow-blue-100', icon: 'text-blue-600' },
        { bg: 'bg-purple-50/80', border: 'border-purple-200', shadow: 'shadow-purple-100', icon: 'text-purple-600' },
        { bg: 'bg-green-50/80', border: 'border-green-200', shadow: 'shadow-green-100', icon: 'text-green-600' },
        { bg: 'bg-amber-50/80', border: 'border-amber-200', shadow: 'shadow-amber-100', icon: 'text-amber-600' },
        { bg: 'bg-red-50/80', border: 'border-red-200', shadow: 'shadow-red-100', icon: 'text-red-600' },
        { bg: 'bg-indigo-50/80', border: 'border-indigo-200', shadow: 'shadow-indigo-100', icon: 'text-indigo-600' },
        { bg: 'bg-teal-50/80', border: 'border-teal-200', shadow: 'shadow-teal-100', icon: 'text-teal-600' },
        { bg: 'bg-rose-50/80', border: 'border-rose-200', shadow: 'shadow-rose-100', icon: 'text-rose-600' },
    ];

    const useCases = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: 'Email Management',
            description:
                'Automatically sort, respond to, and follow up on emails based on your preferences.',
            link: '/use-cases/task-automation',
        },
        {
            icon: <BarChart2 className="h-6 w-6" />,
            title: 'Data Organization',
            description:
                'Automatically collect and organize information from multiple sources into one place.',
            link: '/use-cases/knowledge-management',
        },
        {
            icon: <Calendar className="h-6 w-6" />,
            title: 'Schedule Management',
            description:
                'Let AI handle your meeting scheduling, reminders, and follow-ups automatically.',
            link: '/use-cases/meeting-enhancement',
        },
        {
            icon: <MessageSquare className="h-6 w-6" />,
            title: 'Customer Support',
            description:
                'Respond to common customer questions instantly while you focus on more complex issues.',
            link: '/use-cases/personal-assistant',
        },
        {
            icon: <FileText className="h-6 w-6" />,
            title: 'Content Creation',
            description:
                'Generate drafts, summaries, and creative content for various purposes.',
            link: '/use-cases/content-creation',
        },
        {
            icon: <BrainCircuit className="h-6 w-6" />,
            title: 'Learning Assistance',
            description:
                'Accelerate your learning with AI-powered summaries, quizzes, and explanations.',
            link: '/use-cases/learning-acceleration',
        },
        {
            icon: <Briefcase className="h-6 w-6" />,
            title: 'Project Management',
            description:
                'Keep projects on track with automated task assignments, updates, and reporting.',
            link: '/use-cases/project-management',
        },
        {
            icon: <Database className="h-6 w-6" />,
            title: 'Data Analysis',
            description:
                'Extract insights from your data with automated analysis and visualization.',
            link: '/use-cases/data-analysis',
        },
    ];

    return (
        <section className="relative w-full overflow-hidden py-20 md:py-28">
            {/* Background pattern */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white">
                <div className="absolute inset-0 bg-[url('/src/styles/patterns.css')] opacity-5"></div>
            </div>
            
            <div className="container px-4 md:px-6">
                <motion.div
                    className="mx-auto mb-16 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        What Can You Do With <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">VernisAI</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600">
                        Discover how our AI automation can transform your daily workflows
                    </p>
                </motion.div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {useCases.map((useCase, index) => {
                            const variant = cardVariants[index % cardVariants.length];
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="group relative"
                                >
                                    <FeatureCard
                                        icon={<div className={cn("h-6 w-6", variant.icon)}>{useCase.icon}</div>}
                                        title={useCase.title}
                                        description={
                                            <div className="space-y-2">
                                                <p>{useCase.description}</p>
                                                <div className="text-sm font-medium text-blue-600 flex items-center sm:hidden pt-2">
                                                    Learn more
                                                    <svg className="ml-1 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        }
                                        color={variant.bg}
                                        borderColor={variant.border}
                                        shadowColor={variant.shadow}
                                        className="h-full cursor-pointer relative"
                                        onClick={() => navigate(useCase.link)}
                                    />
                                    {/* Desktop indicator (hidden on small screens) */}
                                    <div className="absolute -right-1 -top-1 origin-top-right scale-0 transform rounded-full bg-blue-600 p-1 text-white opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 hidden sm:block">
                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        className="mt-16 flex justify-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 px-10 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <Link to="/use-cases" className="flex items-center gap-2">
                                Explore All Use Cases
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
