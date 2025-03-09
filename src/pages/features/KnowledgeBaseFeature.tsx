import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Database, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function KnowledgeBaseFeature() {
    const supportedFormats = [
        'Text documents',
        'PDFs',
        'Images',
        'URLs and web content',
        'Structured data',
    ];

    const enhancedFeatures = [
        {
            title: 'Auto-Knowledge Refresh',
            description: 'Schedule updates for live data.',
        },
        {
            title: 'Version Control',
            description: 'Track changes in the knowledge base over time.',
        },
        {
            title: 'Source Prioritization',
            description: 'Rank sources by reliability and importance.',
        },
        {
            title: 'Conflict Resolution',
            description:
                'Define rules for handling conflicting data from multiple sources.',
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
                        <Database className="h-8 w-8 text-gray-700" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Knowledge Base
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Contextual data for agents to retrieve and use
                        efficiently
                    </motion.p>
                </div>

                <motion.div
                    className="prose prose-lg mb-12 max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <p>
                        A <strong>knowledge base</strong> allows agents to
                        retrieve and use contextual data efficiently. It serves
                        as the memory and reference library for your agents,
                        providing them with the information they need to make
                        informed decisions and take appropriate actions.
                    </p>

                    <h2>Key Capabilities</h2>
                    <p>
                        Our knowledge base supports a wide range of data formats
                        and provides powerful tools for organizing, retrieving,
                        and utilizing information. Data is embedded and stored
                        as vectorized text, making it quickly accessible to your
                        agents when they need it.
                    </p>
                </motion.div>

                <motion.div
                    className="mb-12 rounded-lg bg-gray-50 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Supported Formats
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {supportedFormats.map((format, index) => (
                            <div key={index} className="flex items-start">
                                <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-gray-700" />
                                <span>{format}</span>
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
                    <h2 className="mb-6 text-2xl font-semibold">
                        Enhanced Knowledge Management
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {enhancedFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-white p-6 shadow-sm"
                            >
                                <h3 className="mb-2 flex items-center text-lg font-semibold">
                                    <CheckCircle2 className="mr-2 h-5 w-5 text-gray-700" />
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
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
                        Ready to enhance your agents with knowledge?
                    </h2>
                    <p className="mb-6 text-gray-600">
                        Give your agents the context they need to make
                        intelligent decisions and take appropriate actions.
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
