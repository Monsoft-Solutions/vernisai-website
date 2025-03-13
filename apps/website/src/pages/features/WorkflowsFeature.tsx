import {
    GitBranch,
    CheckCircle2,
    ArrowRight,
    Wand2,
    LayoutTemplate,
    Workflow,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CallToAction } from '@/components/CallToAction';
import '@/styles/fix-overflow.css';
import { SEO } from '@/components';

export function WorkflowsFeature() {
    const creationMethods = [
        {
            icon: <Workflow className="h-6 w-6 text-blue-500" />,
            title: 'Drag-and-Drop Builder',
            description:
                'Visually connect actions to define workflow logic with our intuitive interface. No coding required — just drag, drop, and connect.',
            color: 'bg-blue-50',
            borderColor: 'border-blue-100',
        },
        {
            icon: <Wand2 className="h-6 w-6 text-purple-500" />,
            title: 'Natural Language Configuration',
            description:
                'Describe your workflow in plain English: "Every morning at 8 AM, check my website uptime and notify me on Slack." VernisAI builds it for you.',
            color: 'bg-purple-50',
            borderColor: 'border-purple-100',
        },
        {
            icon: <LayoutTemplate className="h-6 w-6 text-green-500" />,
            title: 'Prebuilt Templates',
            description:
                'Start instantly with ready-made workflows for social media automation, customer support, data monitoring, and dozens more common use cases.',
            color: 'bg-green-50',
            borderColor: 'border-green-100',
        },
    ];

    const workflowExamples = [
        {
            title: 'Content Publishing Workflow',
            description:
                'From draft to social media, automatically post content across platforms with customized formatting for each channel.',
        },
        {
            title: 'Data Collection & Analysis',
            description:
                'Gather information from multiple sources, process it with AI, and generate visual reports delivered to your inbox.',
        },
        {
            title: 'Customer Support Automation',
            description:
                'Categorize incoming requests, generate responses for common issues, and escalate complex problems to your team.',
        },
    ];

    // Ensure animations respect user's reduced motion preferences
    const motionProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
    };

    return (
        <>
            <SEO
                title="Workflows - Automate Complex Business Processes"
                description="Build powerful, flexible workflows that connect your tools and automate repetitive tasks. No coding required."
                keywords="workflows, automation, no-code, business processes, task automation"
                canonicalUrl="https://vernis.ai/features/workflows"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'Brand',
                    name: 'VernisAI Workflow Automation',
                    description:
                        'Build powerful, flexible workflows that connect your tools and automate repetitive tasks. No coding required.',
                    url: 'https://vernis.ai/features/workflows',
                    category: 'Software',
                    brand: {
                        '@type': 'Brand',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                }}
            />

            <div className="no-overflow pb-16">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-16 md:py-24">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-50 opacity-80 blur-3xl"></div>
                        <div className="absolute bottom-20 -left-20 h-80 w-80 rounded-full bg-purple-50 opacity-80 blur-3xl"></div>
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center text-center">
                            <motion.div
                                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20,
                                }}
                            >
                                <GitBranch className="h-10 w-10 text-white" />
                            </motion.div>

                            <motion.h1
                                className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <span className="block">
                                    Powerful{' '}
                                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        Workflow
                                    </span>{' '}
                                    Automation
                                </span>
                            </motion.h1>

                            <motion.p
                                className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Build, deploy, and manage complex workflows that
                                connect your tools and automate repetitive
                                tasks. All without writing a single line of
                                code.
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    {/* Ways to Create Workflows */}
                    <motion.div
                        className="mb-20"
                        {...motionProps}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="mb-12 max-w-3xl">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                                Three Ways to Create Workflows
                            </h2>
                            <p className="text-lg text-gray-600">
                                VernisAI offers multiple ways to create and
                                automate workflows, giving you flexibility based
                                on your team's needs and technical experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {creationMethods.map((method, index) => (
                                <motion.div
                                    key={method.title}
                                    className={cn(
                                        'group relative rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md',
                                        method.borderColor,
                                    )}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 + index * 0.1,
                                    }}
                                >
                                    <div
                                        className={cn(
                                            'mb-4 flex h-12 w-12 items-center justify-center rounded-lg',
                                            method.color,
                                        )}
                                    >
                                        {method.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                        {method.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {method.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Workflow Examples Section */}
                    <motion.div
                        className="mb-20"
                        {...motionProps}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="mb-12 max-w-3xl">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                                Examples of What You Can Build
                            </h2>
                            <p className="text-lg text-gray-600">
                                From simple automations to complex multi-step
                                processes, VernisAI workflows help you save time
                                and eliminate human error.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {workflowExamples.map((example, index) => (
                                <motion.div
                                    key={example.title}
                                    className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2 + index * 0.1,
                                    }}
                                >
                                    <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-indigo-50 opacity-50"></div>
                                    <div className="relative">
                                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                            {example.title}
                                        </h3>
                                        <p className="mb-4 text-gray-600">
                                            {example.description}
                                        </p>
                                        <div className="flex items-center text-indigo-600">
                                            <span className="mr-2 font-medium">
                                                Learn more
                                            </span>
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Features Section */}
                    <motion.div
                        className="mb-20"
                        {...motionProps}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="mb-12 max-w-3xl">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                                Key Features
                            </h2>
                            <p className="text-lg text-gray-600">
                                VernisAI workflows are designed to be powerful,
                                flexible, and easy to use, regardless of your
                                technical background.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: 'Conditional Logic',
                                    description:
                                        'Create intelligent workflows with if/then conditions, loops, and dynamic routing based on data.',
                                },
                                {
                                    title: 'Error Handling',
                                    description:
                                        'Define what happens when things go wrong with automatic retries and fallback paths.',
                                },
                                {
                                    title: 'Schedule & Triggers',
                                    description:
                                        'Start workflows on a schedule or in response to events from integrated systems.',
                                },
                                {
                                    title: 'Data Mapping',
                                    description:
                                        'Easily transform data between steps with a visual mapping interface.',
                                },
                                {
                                    title: 'Built-in Testing',
                                    description:
                                        'Test your workflows with sample data before deploying them to production.',
                                },
                                {
                                    title: 'Version Control',
                                    description:
                                        'Track changes with full version history and the ability to roll back when needed.',
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="flex items-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.3 + index * 0.1,
                                    }}
                                >
                                    <div className="mt-1 mr-4 flex-shrink-0">
                                        <CheckCircle2 className="h-6 w-6 text-indigo-500" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-medium text-gray-900">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        className="mx-auto max-w-4xl"
                        {...motionProps}
                        transition={{ delay: 0.4 }}
                    >
                        <CallToAction
                            title="Ready to streamline your workflows?"
                            description="Start building powerful automation workflows with VernisAI. No coding required."
                            buttonText="Join the Waitlist"
                            buttonLink="/waitlist"
                            gradient="from-indigo-500 to-purple-600"
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
}
