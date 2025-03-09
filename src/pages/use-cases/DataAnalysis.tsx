import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

export function DataAnalysis() {
    // Data analysis use cases
    const dataUseCases = [
        {
            title: 'Automated Reporting',
            description:
                'Generate comprehensive reports from raw data with visualizations and key insights highlighted.',
            benefit:
                'Save hours of manual report creation while improving clarity and consistency.',
        },
        {
            title: 'Trend Identification',
            description:
                'Automatically detect patterns, anomalies, and trends in large datasets that might be missed manually.',
            benefit:
                'Discover valuable insights that drive strategic decisions.',
        },
        {
            title: 'Data Visualization',
            description:
                'Create clear, interactive visualizations that make complex data understandable at a glance.',
            benefit:
                'Communicate insights effectively to stakeholders at all levels.',
        },
        {
            title: 'Predictive Analytics',
            description:
                'Forecast future trends and outcomes based on historical data and relevant variables.',
            benefit:
                'Make proactive decisions based on likely future scenarios.',
        },
        {
            title: 'Data Cleaning & Preparation',
            description:
                'Automatically clean, normalize, and prepare data for analysis, handling missing values and outliers.',
            benefit:
                'Reduce data preparation time by up to 80% while improving data quality.',
        },
        {
            title: 'Natural Language Queries',
            description:
                'Ask questions about your data in plain language and receive accurate, relevant answers.',
            benefit:
                'Democratize data access for team members without technical expertise.',
        },
    ];

    // Key benefits of AI-assisted data analysis
    const keyBenefits = [
        'Analyze data 10x faster than traditional methods',
        'Discover insights that would be missed by manual analysis',
        'Make data-driven decisions with greater confidence',
        'Democratize data analysis across your organization',
        'Reduce errors and inconsistencies in reporting',
        'Free up analysts for higher-value strategic work',
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
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <BarChart3 className="h-8 w-8 text-orange-600" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Data Analysis
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Analyze and extract insights from data more efficiently
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
                        Organizations today collect vast amounts of data, but
                        extracting meaningful insights from that data remains
                        challenging and time-consuming. Vernis AI transforms
                        data analysis by automating routine analytical tasks,
                        uncovering hidden patterns, and making advanced
                        analytics accessible to everyone in your organization.
                    </p>
                    <p className="text-gray-700">
                        Our AI-powered data analysis capabilities work with your
                        existing data sources and tools to provide faster,
                        deeper insights without requiring specialized data
                        science expertise. From automated reporting to
                        predictive analytics, Vernis AI helps you turn raw data
                        into actionable intelligence.
                    </p>
                </motion.div>

                {/* Data Analysis Use Cases */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Data Analysis Applications
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {dataUseCases.map((useCase, index) => (
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
                                Connect your data sources:
                            </span>{' '}
                            Integrate with databases, spreadsheets, APIs, and
                            other data repositories.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Automated data preparation:
                            </span>{' '}
                            The system cleans, normalizes, and structures your
                            data for analysis.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Analysis configuration:
                            </span>{' '}
                            Define the insights you're looking for or let the AI
                            discover patterns automatically.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Insight generation:
                            </span>{' '}
                            Advanced algorithms analyze the data and identify
                            key findings, trends, and anomalies.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Visualization and reporting:
                            </span>{' '}
                            Results are presented in clear, actionable formats
                            with explanations in plain language.
                        </li>
                    </ol>
                </motion.div>

                {/* Featured Capability */}
                <motion.div
                    className="mb-12 rounded-lg border border-orange-200 bg-orange-50 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="mb-3 text-xl font-semibold text-orange-700">
                        Featured Capability: Conversational Data Analysis
                    </h3>
                    <p className="mb-4 text-gray-700">
                        Vernis AI's conversational interface transforms how you
                        interact with your data:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-gray-700">
                        <li>
                            Ask questions about your data in natural language
                        </li>
                        <li>
                            Receive answers with relevant visualizations and
                            explanations
                        </li>
                        <li>
                            Follow up with additional questions to explore
                            further
                        </li>
                        <li>
                            Request comparisons, trends, and predictions
                            conversationally
                        </li>
                        <li>
                            Share insights with colleagues through collaborative
                            analysis
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
                        Ready to Transform Your Data Analysis?
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Join our waitlist to be among the first to experience
                        the power of AI-enhanced data analysis with Vernis AI.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/waitlist">Join our waitlist</Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
