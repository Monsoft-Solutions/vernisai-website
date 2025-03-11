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
    const prefersReducedMotion =
        typeof window !== 'undefined'
            ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
            : false;

    const animationSettings = prefersReducedMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 300, damping: 20 };

    const fadeInUpVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-5xl">
                {/* Hero Section */}
                <div className="relative mb-16 text-center md:mb-24">
                    {/* Background gradient blob */}
                    <div className="absolute -top-24 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"></div>

                    <motion.div
                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30 md:mb-8 md:h-24 md:w-24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            ...animationSettings,
                            delay: 0.1,
                        }}
                    >
                        <GitBranch className="h-10 w-10 text-white md:h-12 md:w-12" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:mb-6 md:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...animationSettings, delay: 0.2 }}
                    >
                        Powerful AI Workflows
                    </motion.h1>
                    <motion.p
                        className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ...animationSettings, delay: 0.3 }}
                    >
                        Connect multiple actions to create end-to-end automation
                        without writing a single line of code
                    </motion.p>
                </div>

                {/* Main explanation */}
                <motion.div
                    className="prose prose-lg mb-16 max-w-none md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...animationSettings, delay: 0.4 }}
                >
                    <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-md md:p-10">
                        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                            What Are Workflows?
                        </h2>
                        <div className="mb-8 flex justify-start">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-20"></div>
                        </div>
                        <p className="mb-6 text-lg leading-relaxed text-gray-700">
                            A <strong>workflow</strong> defines the sequence of
                            actions an AI assistant follows, structured as a
                            Directed Acyclic Graph (DAG). Workflows let you
                            connect multiple actions together to create powerful
                            automations without writing any code.
                        </p>

                        <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                            Key Characteristics
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                <span>
                                    <strong>Nodes</strong> = Actions (Send
                                    email, Process data, Generate content)
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                <span>
                                    <strong>Edges</strong> = Context and data
                                    passed between actions
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                <span>
                                    Supports <strong>conditional logic</strong>{' '}
                                    (if/then branches) and parallel execution
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="mt-0.5 mr-2 h-6 w-6 flex-shrink-0 text-blue-500" />
                                <span>
                                    Run workflows on schedule, trigger them
                                    manually, or connect to external events
                                </span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Creation Methods */}
                <motion.div
                    className="relative mb-20 overflow-hidden rounded-2xl md:mb-24"
                    variants={fadeInUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...animationSettings, delay: 0.5 }}
                >
                    {/* Background decoration */}
                    <div className="absolute -z-10 h-full w-full rotate-3 transform rounded-3xl bg-gradient-to-r from-purple-50 to-blue-50 opacity-70 blur-xl"></div>

                    <div className="p-8 md:p-12">
                        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:mb-8 md:text-4xl">
                            Three Ways to Create Workflows
                        </h2>
                        <div className="mb-8 flex justify-center md:mb-10">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-20"></div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                            {creationMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    className={cn(
                                        'rounded-xl border p-6 shadow-md md:p-8',
                                        'transition-all duration-300 hover:-translate-y-2 hover:shadow-lg',
                                        method.color,
                                        method.borderColor,
                                    )}
                                    whileHover={{ scale: 1.03 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        ...animationSettings,
                                        delay: 0.5 + index * 0.1,
                                    }}
                                >
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white p-3 shadow-sm">
                                        {method.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                                        {method.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {method.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Examples Section */}
                <motion.div
                    className="mb-20 rounded-2xl bg-gradient-to-r from-gray-900 to-blue-900 px-6 py-10 text-white shadow-xl md:mb-24 md:py-12"
                    variants={fadeInUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...animationSettings, delay: 0.6 }}
                >
                    <h2 className="mb-6 text-center text-3xl font-bold text-white md:mb-8 md:text-4xl">
                        Popular Workflow Examples
                    </h2>
                    <div className="mb-8 flex justify-center md:mb-10">
                        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 md:w-20"></div>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        {workflowExamples.map((example, index) => (
                            <motion.div
                                key={index}
                                className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 md:p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    ...animationSettings,
                                    delay: 0.6 + index * 0.1,
                                }}
                            >
                                <h3 className="mb-3 flex items-center text-xl font-semibold text-white">
                                    <ArrowRight className="mr-2 h-5 w-5 text-blue-300" />
                                    {example.title}
                                </h3>
                                <p className="ml-7 text-gray-200">
                                    {example.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <CallToAction
                    title="Ready to Automate Your Work?"
                    description="Join our waitlist to be among the first to create powerful AI workflows that save you hours every day."
                    buttonText="Join Waitlist"
                    buttonLink="/waitlist"
                    height="tall"
                    alignment="center"
                    gradient="from-blue-600 to-purple-700"
                />
            </div>
        </div>
    );
}
