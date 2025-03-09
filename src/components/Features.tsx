import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, GitBranch, Bot, Database, Settings, Home } from 'lucide-react';
import { CTAWorkflowAutomation } from './CTA';

export function Features() {
    return (
        <section className="bg-muted/40 w-full py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
                            Key Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Democratizing AI-Driven Automation
                        </h2>
                        <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            VernisAI makes agent orchestration accessible to
                            non-technical users, enabling complex workflow
                            automation across platforms.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link to="/features/actions" className="block h-full">
                            <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                        <Zap className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        Actions
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        Well-defined, atomic operations that
                                        interact with third-party services like
                                        Google Drive, Slack, and Twitter.
                                    </p>
                                    <div className="flex items-center font-medium text-gray-900">
                                        Learn more
                                        <svg
                                            className="ml-1 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link to="/features/pipelines" className="block h-full">
                            <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                        <GitBranch className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        Pipelines
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        Define sequences of actions in a
                                        structured workflow, with support for
                                        conditional logic and parallel
                                        execution.
                                    </p>
                                    <div className="flex items-center font-medium text-gray-900">
                                        Learn more
                                        <svg
                                            className="ml-1 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link to="/features/agents" className="block h-full">
                            <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                        <Bot className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        Agents
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        AI-driven entities that execute
                                        pipelines in a consistent and
                                        context-aware manner, with customizable
                                        behavior.
                                    </p>
                                    <div className="flex items-center font-medium text-gray-900">
                                        Learn more
                                        <svg
                                            className="ml-1 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link
                            to="/features/knowledge-base"
                            className="block h-full"
                        >
                            <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                        <Database className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        Knowledge Base
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        Contextual data for agents to retrieve
                                        and use efficiently, supporting text,
                                        documents, images, and URLs.
                                    </p>
                                    <div className="flex items-center font-medium text-gray-900">
                                        Learn more
                                        <svg
                                            className="ml-1 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link
                            to="/features/natural-language"
                            className="block h-full"
                        >
                            <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                        <Home className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        Natural Language
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        Build workflows using plain English
                                        instructions, without complex logic
                                        expressions or technical knowledge.
                                    </p>
                                    <div className="flex items-center font-medium text-gray-900">
                                        Learn more
                                        <svg
                                            className="ml-1 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link to="/features/no-code" className="block h-full">
                            <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                        <Settings className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        No-Code Interface
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        Drag-and-drop builder for designing
                                        custom workflows, optimized for AI agent
                                        orchestration.
                                    </p>
                                    <div className="flex items-center font-medium text-gray-900">
                                        Learn more
                                        <svg
                                            className="ml-1 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                <CTAWorkflowAutomation />
            </div>
        </section>
    );
}
