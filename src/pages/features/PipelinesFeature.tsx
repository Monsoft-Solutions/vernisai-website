import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { GitBranch, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function PipelinesFeature() {
    const creationMethods = [
        {
            title: 'Drag-and-Drop Builder',
            description:
                'Inspired by Zapier/N8N, but simplified. Users visually connect actions to define workflow logic.',
        },
        {
            title: 'Natural Language Configuration',
            description:
                'Users describe the workflow in plain text. Example: "Every morning at 8 AM, check my website uptime and notify me on Slack".',
        },
        {
            title: 'Prebuilt Templates',
            description:
                'Ready-made workflows for common use cases like Social Media Automation, Customer Support Automation, and Data Collection & Monitoring.',
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
                        <GitBranch className="h-8 w-8 text-gray-700" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Pipelines
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Define sequences of actions in a structured workflow
                    </motion.p>
                </div>

                <motion.div
                    className="prose prose-lg mb-12 max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <p>
                        A <strong>pipeline</strong> (workflow) defines the
                        sequence of actions an agent follows, structured as a
                        Directed Acyclic Graph (DAG). Pipelines allow you to
                        connect multiple actions together to create powerful
                        automation workflows without writing any code.
                    </p>

                    <h2>Key Characteristics</h2>
                    <ul>
                        <li>
                            <strong>Nodes</strong> = Actions
                        </li>
                        <li>
                            <strong>Edges</strong> = Context passed between
                            actions
                        </li>
                        <li>
                            Supports <strong>conditional logic</strong> and
                            parallel execution
                        </li>
                        <li>
                            Can be{' '}
                            <strong>manually created (drag-and-drop)</strong> or{' '}
                            <strong>generated via natural language</strong>{' '}
                            (AI-assisted)
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className="mb-12 rounded-lg bg-gray-50 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Pipeline Creation Methods
                    </h2>
                    <div className="space-y-6">
                        {creationMethods.map((method, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-white p-6 shadow-sm"
                            >
                                <h3 className="mb-2 flex items-center text-xl font-semibold">
                                    <CheckCircle2 className="mr-2 h-5 w-5 text-gray-700" />
                                    {method.title}
                                </h3>
                                <p className="text-gray-600">
                                    {method.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="rounded-lg border border-gray-200 bg-white p-8 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="mb-4 text-2xl font-semibold">
                        Ready to build your first pipeline?
                    </h2>
                    <p className="mb-6 text-gray-600">
                        Start creating powerful automation workflows by
                        connecting actions in a structured pipeline.
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
