import {
    Bot,
    CheckCircle2,
    Clock,
    Sparkles,
    Zap,
    Brain,
    Repeat,
    Settings,
    Users,
    LayoutPanelTop,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/feature-card';
import { CallToAction } from '@/components/CallToAction';
import { SEO } from '@/components';
import '@/styles/fix-overflow.css';

export function AgentsFeature() {
    const agentBenefits = [
        {
            icon: <Clock className="h-6 w-6 text-blue-500" />,
            title: 'Reclaim Your Time',
            description:
                'Delegate repetitive tasks to agents and focus on creative, high-value work that requires human judgment.',
        },
        {
            icon: <Sparkles className="h-6 w-6 text-purple-500" />,
            title: 'Superhuman Capabilities',
            description:
                'Leverage agents with specialized knowledge, perfect memory, and the ability to work 24/7 without breaks.',
        },
        {
            icon: <Zap className="h-6 w-6 text-amber-500" />,
            title: 'Maximum Productivity',
            description:
                'Transform your workday by automating entire workflows end-to-end with intelligent agents that adapt to your needs.',
        },
    ];

    const agentCapabilities = [
        {
            title: 'Research & Analysis',
            description:
                'Collect and analyze information from multiple sources, generate insights, and prepare comprehensive reports.',
            icon: <Brain className="h-10 w-10" />,
            color: 'blue',
        },
        {
            title: 'Content Creation',
            description:
                'Draft, edit, and optimize various types of content from emails to blog posts, social media, and technical documentation.',
            icon: <LayoutPanelTop className="h-10 w-10" />,
            color: 'indigo',
        },
        {
            title: 'Data Processing',
            description:
                'Extract, transform, and analyze data from various formats, identify patterns, and generate visual reports.',
            icon: <Repeat className="h-10 w-10" />,
            color: 'green',
        },
        {
            title: 'Customer Support',
            description:
                'Respond to customer inquiries, troubleshoot common issues, and escalate complex problems when necessary.',
            icon: <Users className="h-10 w-10" />,
            color: 'amber',
        },
    ];

    const agentTypes = [
        {
            title: 'Single Task Agents',
            description:
                'Specialized agents that excel at performing one specific task repeatedly with high accuracy and efficiency.',
            capabilities: [
                'Monitoring data sources',
                'Processing information',
                'Generating reports',
                'Performing routine checks',
            ],
            colorClass: 'blue',
        },
        {
            title: 'Multi-step Workflow Agents',
            description:
                'Agents that manage complex processes involving multiple steps, decisions, and potential paths.',
            capabilities: [
                'Customer onboarding',
                'Content publication workflows',
                'Data cleaning pipelines',
                'Approval processes',
            ],
            colorClass: 'green',
        },
        {
            title: 'Collaborative Agent Teams',
            description:
                'Multiple specialized agents working together to accomplish complex objectives, coordinating their efforts.',
            capabilities: [
                'Research projects',
                'Content marketing campaigns',
                'Product development',
                'Customer journey management',
            ],
            colorClass: 'purple',
        },
    ];

    const advancedFeatures = [
        {
            title: 'Memory & Context Awareness',
            description:
                'Agents maintain memory of past interactions and understand the broader context of your business needs.',
            icon: <Bot className="h-6 w-6" />,
        },
        {
            title: 'Tool Use & Integration',
            description:
                'Agents can utilize your existing tools and platforms to perform tasks as if a human were using them.',
            icon: <Settings className="h-6 w-6" />,
        },
        {
            title: 'Natural Language Configuration',
            description:
                'Configure and customize your agents using plain English instructions - no coding or programming required.',
            icon: <Sparkles className="h-6 w-6" />,
        },
        {
            title: 'Supervision & Feedback Loop',
            description:
                'Keep humans in the loop with options for approval, review, and continuous improvement through feedback.',
            icon: <Users className="h-6 w-6" />,
        },
    ];

    return (
        <>
            <SEO
                title="AI Agents - Intelligent Automation Assistants"
                description="Deploy AI agents that work autonomously on complex tasks with human-like reasoning. Boost productivity with intelligent AI assistants."
                keywords="AI agents, intelligent automation, AI assistants, autonomous agents, natural language AI"
                canonicalUrl="https://vernis.ai/features/agents"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'Brand',
                    name: 'VernisAI Autonomous Agents',
                    description:
                        'Deploy AI agents that work autonomously on complex tasks with human-like reasoning and problem-solving abilities.',
                    url: 'https://vernis.ai/features/agents',
                    category: 'Software',
                    brand: {
                        '@type': 'Brand',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                }}
            />

            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="mx-auto max-w-5xl">
                    {/* Hero Section */}
                    <div className="relative mb-16 text-center md:mb-24">
                        <motion.div
                            className="mb-6 flex justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg">
                                <Bot className="h-10 w-10 text-white" />
                            </div>
                        </motion.div>

                        <motion.h1
                            className="mb-6 text-4xl leading-tight font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Intelligent AI Agents
                            </span>{' '}
                            <br className="hidden md:inline" />
                            For Your Business
                        </motion.h1>

                        <motion.p
                            className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Deploy AI agents that work autonomously on complex
                            tasks with human-like reasoning and problem-solving
                            abilities. Your new AI team members are ready to
                            work.
                        </motion.p>

                        {/* Background decorative elements */}
                        <div className="absolute -top-10 -right-10 -z-10 h-64 w-64 rounded-full bg-blue-50 opacity-70 blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full bg-purple-50 opacity-70 blur-3xl"></div>
                    </div>

                    {/* Value Proposition */}
                    <motion.div
                        className="mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-12 md:text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                                Virtual Team Members That Really Work
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg text-gray-600">
                                VernisAI agents combine the latest advances in
                                AI with your business knowledge to create
                                intelligent assistants that can handle entire
                                workflows autonomously.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {agentBenefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.5,
                                    }}
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* What Agents Can Do */}
                    <motion.div
                        className="mb-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-12 md:text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                                What Agents Can Do For You
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg text-gray-600">
                                VernisAI agents can handle a wide range of tasks
                                across different domains, from simple data
                                processing to complex research and content
                                creation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {agentCapabilities.map((capability, index) => (
                                <motion.div
                                    key={capability.title}
                                    className={`rounded-xl border border-${capability.color}-100 bg-${capability.color}-50/30 p-6`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.5,
                                    }}
                                >
                                    <div
                                        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-${capability.color}-100 text-${capability.color}-600`}
                                    >
                                        {capability.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                        {capability.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {capability.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Agent Types */}
                    <motion.div
                        className="mb-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-12 md:text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                                Types of Agents
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg text-gray-600">
                                Choose from different types of agents based on
                                the complexity of your needs and the tasks you
                                want to automate.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {agentTypes.map((type, index) => (
                                <motion.div
                                    key={type.title}
                                    className={`rounded-xl border border-${type.colorClass}-100 bg-gradient-to-br from-white to-${type.colorClass}-50/20 p-6 shadow-sm`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.5,
                                    }}
                                >
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                        {type.title}
                                    </h3>
                                    <p className="mb-6 text-gray-600">
                                        {type.description}
                                    </p>

                                    <h4 className="mb-3 font-medium text-gray-900">
                                        Example Use Cases:
                                    </h4>
                                    <ul className="space-y-2">
                                        {type.capabilities.map(
                                            (capability, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start"
                                                >
                                                    <CheckCircle2 className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                                                    <span className="text-gray-600">
                                                        {capability}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Advanced Features */}
                    <motion.div
                        className="mb-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-12 md:text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                                Advanced Agent Features
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg text-gray-600">
                                VernisAI agents come with powerful capabilities
                                that make them more effective than basic
                                automation tools.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                            {advancedFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <FeatureCard
                                        title={feature.title}
                                        description={feature.description}
                                        icon={feature.icon}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <CallToAction
                        title="Ready for Your AI Team to Start Working?"
                        description="Join thousands of professionals who now finish a day's work by lunch. Your AI agents are waiting to help."
                        buttonText="Get Early Access Today"
                        buttonLink="/waitlist"
                        height="tall"
                        alignment="center"
                        gradient="from-blue-600 to-purple-700"
                    />
                </div>
            </div>
        </>
    );
}
