import { Link } from 'react-router-dom';
import { CheckCircle2, Zap, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

export function TaskAutomation() {
    // Examples of tasks that can be automated
    const automationExamples = [
        {
            title: 'Email Management',
            description:
                'Auto-categorize emails, draft responses, and set up follow-up reminders.',
            benefit: 'Reduces inbox overload and ensures timely responses.',
        },
        {
            title: 'Data Entry & Processing',
            description:
                'Extract information from documents and automatically populate databases or spreadsheets.',
            benefit:
                'Eliminates manual data entry errors and saves hours of work.',
        },
        {
            title: 'Document Processing',
            description:
                'Format documents, generate reports, and extract key information from various file types.',
            benefit:
                'Standardizes documentation and speeds up information retrieval.',
        },
        {
            title: 'Social Media Management',
            description:
                'Schedule posts, generate content ideas, and analyze engagement metrics.',
            benefit:
                'Maintains consistent social presence without constant attention.',
        },
        {
            title: 'Calendar Scheduling',
            description:
                'Automate appointment booking, meeting reminders, and schedule optimization.',
            benefit:
                'Eliminates back-and-forth emails and reduces scheduling conflicts.',
        },
        {
            title: 'Workflow Approvals',
            description:
                'Automate routine approval processes with intelligent routing and notifications.',
            benefit: 'Speeds up decision-making and removes bottlenecks.',
        },
    ];

    // Key benefits of task automation
    const keyBenefits = [
        'Save 5+ hours per week on repetitive tasks',
        'Reduce human error in routine processes',
        'Focus on high-value work that requires creativity',
        'Standardize processes across teams and departments',
        'Scale operations without proportionally increasing headcount',
        'Improve employee satisfaction by eliminating mundane tasks',
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
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Zap className="h-8 w-8 text-yellow-600" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Task Automation
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Automate repetitive tasks to save time and reduce manual
                        effort
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
                        Task automation with Vernis AI allows you to delegate
                        repetitive, time-consuming tasks to intelligent agents.
                        By creating custom workflows or using pre-built
                        templates, you can automate tasks that previously
                        required manual attention, freeing up valuable time for
                        more strategic work.
                    </p>
                    <p className="text-gray-700">
                        Our automation tools combine the power of AI with
                        customizable workflows to handle tasks exactly the way
                        you would—but without requiring your constant attention.
                        From simple data entry to complex multi-step processes,
                        Vernis AI helps you reclaim hours in your workday.
                    </p>
                </motion.div>

                {/* Automation Examples */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        What You Can Automate
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {automationExamples.map((example, index) => (
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
                                    {example.title}
                                </h3>
                                <p className="mb-3 text-gray-600">
                                    {example.description}
                                </p>
                                <p className="text-sm font-medium text-blue-600">
                                    Benefit: {example.benefit}
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
                                Identify repetitive tasks:
                            </span>{' '}
                            Select processes that consume significant time or
                            involve predictable steps.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Create a workflow:
                            </span>{' '}
                            Use our intuitive builder to map out the steps of
                            your process, or choose from our template library.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Connect to your tools:
                            </span>{' '}
                            Integrate with your existing software through our
                            extensive API connections.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Test and refine:
                            </span>{' '}
                            Run your automation in test mode and make
                            adjustments for optimal performance.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Deploy and monitor:
                            </span>{' '}
                            Set your automation live and track its performance
                            with detailed analytics.
                        </li>
                    </ol>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="rounded-lg bg-blue-50 p-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h2 className="mb-4 text-2xl font-semibold">
                        Ready to Automate Your Tasks?
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Join our waitlist to be among the first to experience
                        the power of intelligent task automation with Vernis AI.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/waitlist">Join our waitlist</Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
