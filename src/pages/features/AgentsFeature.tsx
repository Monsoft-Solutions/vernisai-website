import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Bot, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function AgentsFeature() {
    const agentComponents = [
        {
            title: 'Pipeline Execution',
            description: 'Defines how the agent acts.',
        },
        {
            title: 'Custom System Prompt',
            description:
                'Determines behavior (e.g., "You are a social media manager...").',
        },
        {
            title: 'Knowledge Base',
            description: 'Context source (documents, websites, images, etc.).',
        },
        {
            title: 'History Context',
            description: 'Retains past interactions.',
        },
    ];

    const agentTypes = [
        {
            title: 'Built-in Agents',
            description: 'Pre-configured templates.',
        },
        {
            title: 'Custom Agents',
            description: 'Created by users for specific workflows.',
        },
        {
            title: 'Organization-wide Agents',
            description: 'Shared within teams.',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <motion.div
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            delay: 0.1,
                        }}
                    >
                        <Bot className="h-8 w-8 text-gray-700" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Agents
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        AI-driven entities that execute pipelines with context
                        awareness
                    </motion.p>
                </div>

                <motion.div
                    className="prose prose-lg mb-12 max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <p>
                        An <strong>agent</strong> is an AI-driven entity that
                        executes pipelines in a consistent and context-aware
                        manner. Agents are the intelligent workers that carry
                        out your automation workflows, making decisions and
                        adapting to different situations based on their
                        configuration and the data they have access to.
                    </p>
                </motion.div>

                <motion.div
                    className="mb-12 rounded-lg bg-gray-50 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Agent Components
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {agentComponents.map((component, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-white p-6 shadow-sm"
                            >
                                <h3 className="mb-2 flex items-center text-lg font-semibold">
                                    <CheckCircle2 className="mr-2 h-5 w-5 text-gray-700" />
                                    {component.title}
                                </h3>
                                <p className="text-gray-600">
                                    {component.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="mb-12 rounded-lg bg-gray-50 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">Agent Types</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {agentTypes.map((type, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-white p-6 shadow-sm"
                            >
                                <h3 className="mb-2 flex items-center text-lg font-semibold">
                                    <CheckCircle2 className="mr-2 h-5 w-5 text-gray-700" />
                                    {type.title}
                                </h3>
                                <p className="text-gray-600">
                                    {type.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="rounded-lg border border-gray-200 bg-white p-8 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <h2 className="mb-4 text-2xl font-semibold">
                        Multi-Agent Collaboration
                    </h2>
                    <p className="mb-6 text-gray-600">
                        Agents can work together in complex workflows. One
                        agent's output can trigger another agent's pipeline,
                        allowing for sophisticated automation scenarios that
                        would otherwise require extensive coding.
                    </p>
                    <Button
                        asChild
                        variant="black"
                        className="transform transition-all duration-300 hover:scale-105"
                    >
                        <Link to="/waitlist">Join Waitlist</Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
