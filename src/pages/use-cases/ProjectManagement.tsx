import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

export function ProjectManagement() {
    // Project management use cases
    const projectUseCases = [
        {
            title: 'Task Prioritization',
            description:
                'Intelligently prioritize tasks based on deadlines, dependencies, and strategic importance.',
            benefit:
                'Focus team efforts on what matters most at the right time.',
        },
        {
            title: 'Resource Allocation',
            description:
                'Optimize assignment of team members to tasks based on skills, availability, and workload.',
            benefit: 'Maximize productivity while preventing burnout.',
        },
        {
            title: 'Project Planning',
            description:
                'Generate comprehensive project plans with realistic timelines and resource requirements.',
            benefit:
                'Start projects with clear roadmaps and accurate expectations.',
        },
        {
            title: 'Risk Management',
            description:
                'Identify potential risks, assess their impact, and suggest mitigation strategies.',
            benefit:
                'Proactively address issues before they derail your project.',
        },
        {
            title: 'Status Reporting',
            description:
                'Automatically generate detailed project status reports with minimal manual input.',
            benefit:
                'Keep stakeholders informed without administrative burden.',
        },
        {
            title: 'Project Analytics',
            description:
                'Track project metrics and provide insights on team performance and project health.',
            benefit: 'Make data-driven decisions to improve project outcomes.',
        },
    ];

    // Key benefits of AI-assisted project management
    const keyBenefits = [
        'Complete projects 20% faster with optimized workflows',
        'Reduce project management overhead by up to 40%',
        'Improve resource utilization and team productivity',
        'Increase project success rates with proactive risk management',
        'Enhance stakeholder satisfaction with transparent communication',
        'Scale project management capabilities without adding headcount',
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
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ClipboardList className="h-8 w-8 text-red-600" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Project Management
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Streamline project workflows and task management
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
                        Project management involves coordinating complex tasks,
                        resources, and timelines—often with significant
                        administrative overhead. Vernis AI transforms project
                        management by automating routine tasks, providing
                        intelligent insights, and helping teams focus on
                        execution rather than administration.
                    </p>
                    <p className="text-gray-700">
                        Our AI project management assistant integrates with your
                        existing tools to provide a layer of intelligence that
                        optimizes workflows, predicts bottlenecks, and ensures
                        nothing falls through the cracks. From initial planning
                        to final delivery, Vernis AI helps you deliver projects
                        more efficiently and with better results.
                    </p>
                </motion.div>

                {/* Project Management Use Cases */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Project Management Applications
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {projectUseCases.map((useCase, index) => (
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
                                Connect to your project tools:
                            </span>{' '}
                            Integrate with platforms like Jira, Asana, Trello,
                            GitHub, and Microsoft Project.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Initial project setup:
                            </span>{' '}
                            The AI helps define project scope, break down work
                            into manageable tasks, and create realistic
                            timelines.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Intelligent task management:
                            </span>{' '}
                            Tasks are automatically prioritized, assigned to the
                            right team members, and tracked through completion.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Proactive monitoring:
                            </span>{' '}
                            The system identifies potential issues, bottlenecks,
                            and risks before they impact the project.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Automated reporting:
                            </span>{' '}
                            Generate comprehensive status reports, dashboards,
                            and stakeholder communications with minimal effort.
                        </li>
                    </ol>
                </motion.div>

                {/* Featured Capability */}
                <motion.div
                    className="mb-12 rounded-lg border border-red-200 bg-red-50 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="mb-3 text-xl font-semibold text-red-700">
                        Featured Capability: Predictive Project Intelligence
                    </h3>
                    <p className="mb-4 text-gray-700">
                        Vernis AI's predictive capabilities help you stay ahead
                        of project challenges:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-gray-700">
                        <li>
                            Forecast project completion dates based on current
                            progress and historical data
                        </li>
                        <li>
                            Identify tasks at risk of missing deadlines before
                            they become critical
                        </li>
                        <li>
                            Predict resource bottlenecks and suggest
                            reallocation strategies
                        </li>
                        <li>
                            Analyze similar past projects to highlight potential
                            risks
                        </li>
                        <li>
                            Recommend process improvements based on performance
                            patterns
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
                        Ready to Transform Your Project Management?
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Join our waitlist to be among the first to experience
                        the power of AI-enhanced project management with Vernis
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
