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
import '@/styles/fix-overflow.css';

export function AgentsFeature() {
    const agentBenefits = [
        {
            icon: <Clock className="h-6 w-6 text-blue-500" />,
            title: 'Reclaim Your Time',
            description:
                'Stop wasting 2-3 hours daily on mundane tasks. Your AI team handles the routine work while you focus on what matters.',
        },
        {
            icon: <Sparkles className="h-6 w-6 text-purple-500" />,
            title: 'Works Day One',
            description:
                'No training needed. Your agents are ready to help immediately, or customize them in minutes to match your exact needs.',
        },
        {
            icon: <Zap className="h-6 w-6 text-yellow-500" />,
            title: 'Lightning-Fast Results',
            description:
                'Your hour-long tasks completed in seconds. No more waiting or context-switching that kills your productivity.',
        },
        {
            icon: <Brain className="h-6 w-6 text-green-500" />,
            title: 'Gets Smarter Every Day',
            description:
                'Your agents learn your preferences, writing style, and decision patterns, becoming more valuable over time.',
        },
    ];

    const agentCapabilities = [
        {
            icon: <CheckCircle2 className="h-5 w-5 text-blue-500" />,
            title: 'Tame Your Inbox',
            description:
                'Never face an overwhelming inbox again. Your agents sort, summarize, and draft responses to emails in your writing style.',
            color: 'bg-blue-50',
            borderColor: 'border-blue-100',
            shadowColor: 'shadow-blue-100',
        },
        {
            icon: <CheckCircle2 className="h-5 w-5 text-purple-500" />,
            title: 'Research While You Sleep',
            description:
                'Wake up to comprehensive research reports that would have taken you hours to compile, analyze, and format.',
            color: 'bg-purple-50',
            borderColor: 'border-purple-100',
            shadowColor: 'shadow-purple-100',
        },
        {
            icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
            title: 'Create Content That Converts',
            description:
                'Generate website copy, social posts, newsletters, and presentations that sound like you wrote them—because you guided the process.',
            color: 'bg-green-50',
            borderColor: 'border-green-100',
            shadowColor: 'shadow-green-100',
        },
        {
            icon: <CheckCircle2 className="h-5 w-5 text-amber-500" />,
            title: 'Never Miss Another Meeting',
            description:
                'Let your agents handle scheduling, reminders, and calendar management across all your platforms. Say goodbye to double-bookings.',
            color: 'bg-amber-50',
            borderColor: 'border-amber-100',
            shadowColor: 'shadow-amber-100',
        },
    ];

    const agentTypes = [
        {
            icon: <LayoutPanelTop className="h-6 w-6 text-blue-500" />,
            title: 'Instant Experts',
            description:
                'Need a marketing assistant now? Social media manager? Email wizard? Choose from dozens of pre-built agents ready to work immediately.',
        },
        {
            icon: <Settings className="h-6 w-6 text-purple-500" />,
            title: 'Build Your Dream Assistant',
            description:
                'Create the perfect AI helper by defining exactly what you need. Your custom agent will execute tasks precisely how you want them done.',
        },
        {
            icon: <Users className="h-6 w-6 text-green-500" />,
            title: 'Supercharge Your Team',
            description:
                'Share powerful agents across your organization to ensure everyone follows the same processes with consistent, high-quality outputs.',
        },
    ];

    const fadeInUpVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Ensure animations respect user's reduced motion preferences
    const prefersReducedMotion =
        typeof window !== 'undefined'
            ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
            : false;

    const animationSettings = prefersReducedMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 300, damping: 20 };

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-5xl">
                {/* Hero Section */}
                <div className="relative mb-16 text-center md:mb-24">
                    {/* Background gradient blob */}
                    <div className="absolute -top-24 left-1/2 -z-10 h-[400px] w-full max-w-[800px] -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"></div>

                    <motion.div
                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30 md:mb-8 md:h-24 md:w-24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            ...animationSettings,
                            delay: 0.1,
                        }}
                    >
                        <Bot className="h-10 w-10 text-white md:h-12 md:w-12" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:mb-6 md:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...animationSettings, delay: 0.2 }}
                    >
                        Your Personal AI Team
                    </motion.h1>
                    <motion.p
                        className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ...animationSettings, delay: 0.3 }}
                    >
                        Stop doing everything yourself. Delegate tasks to AI
                        agents that learn your preferences and handle your
                        workload exactly how you would.
                    </motion.p>
                </div>

                {/* Value Proposition */}
                <motion.div
                    className="prose prose-lg mb-16 max-w-none text-center md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...animationSettings, delay: 0.4 }}
                >
                    <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold text-transparent md:mb-8 md:text-4xl">
                        What Would You Do With Extra Hours Every Day?
                    </h2>
                    <div className="mb-6 flex justify-center">
                        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-20"></div>
                    </div>
                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
                        While your AI team handles your email, research,
                        scheduling, and content creation, you're free to focus
                        on what truly matters - creative thinking, meaningful
                        connections, and the work only you can do. No more late
                        nights handling routine tasks.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    className="relative mb-20 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-xl md:mb-24 md:p-12"
                    variants={fadeInUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...animationSettings, delay: 0.5 }}
                >
                    {/* Decorative elements */}
                    <div className="decorative-element absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/30 blur-2xl"></div>
                    <div className="decorative-element absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-200/30 blur-2xl"></div>

                    <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:mb-8 md:text-4xl">
                        Life-Changing Benefits
                    </h2>
                    <div className="mb-8 flex justify-center md:mb-10">
                        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-20"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        {agentBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="flex rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    ...animationSettings,
                                    delay: 0.5 + index * 0.1,
                                }}
                            >
                                <div className="mt-1 mr-5">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                        {benefit.title}
                                    </h3>
                                    <p className="leading-relaxed text-gray-700">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* What Agents Can Do */}
                <motion.div
                    className="relative mb-20 px-2 md:mb-24 md:px-4"
                    variants={fadeInUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...animationSettings, delay: 0.6 }}
                >
                    {/* Background decoration */}
                    <div className="absolute -z-10 h-full w-full rotate-3 transform rounded-3xl bg-gradient-to-r from-purple-50 to-blue-50 opacity-70 blur-xl"></div>

                    <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:mb-8 md:text-4xl">
                        Your Digital Workforce In Action
                    </h2>
                    <div className="mb-8 flex justify-center md:mb-10">
                        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-20"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        {agentCapabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <FeatureCard
                                    icon={capability.icon}
                                    title={capability.title}
                                    description={capability.description}
                                    color={capability.color}
                                    borderColor={capability.borderColor}
                                    shadowColor={capability.shadowColor}
                                    className="h-full shadow-md hover:shadow-lg"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Agent Types */}
                <motion.div
                    className="no-overflow relative mb-20 md:mb-24"
                    variants={fadeInUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...animationSettings, delay: 0.7 }}
                >
                    <div className="absolute inset-0 -z-10 rotate-1 transform rounded-2xl bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 opacity-95"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-[url('/images/grid-pattern.svg')] opacity-10 mix-blend-soft-light"></div>

                    <div className="relative overflow-hidden rounded-2xl px-8 py-12 text-white md:px-12 md:py-16">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/4 -translate-y-1/2 rounded-full bg-blue-600/20 opacity-30 blur-3xl filter"></div>
                        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/4 translate-y-1/2 rounded-full bg-purple-600/20 opacity-30 blur-3xl filter"></div>

                        <h2 className="mb-6 text-center text-3xl font-bold text-white md:mb-8 md:text-4xl">
                            Start With The Help You Need Most
                        </h2>
                        <div className="mb-10 flex justify-center">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 md:w-24"></div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                            {agentTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-xl md:p-8"
                                    whileHover={{ scale: 1.03 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        ...animationSettings,
                                        delay: 0.7 + index * 0.1,
                                    }}
                                >
                                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/10 shadow-inner">
                                        {type.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-white md:mb-4">
                                        {type.title}
                                    </h3>
                                    <p className="text-gray-200">
                                        {type.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Advanced Features */}
                <motion.div
                    className="no-overflow relative mb-16"
                    variants={fadeInUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...animationSettings, delay: 0.8 }}
                >
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 opacity-95"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-[url('/images/grid-pattern.svg')] opacity-10 mix-blend-soft-light"></div>

                    <div className="relative rounded-2xl px-8 py-12 text-white md:px-12 md:py-14">
                        <div className="absolute top-0 left-0 h-80 w-80 -translate-x-1/4 -translate-y-1/2 rounded-full bg-blue-600/10 opacity-30 blur-3xl filter"></div>

                        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
                            The Technology That Makes It Possible
                        </h2>
                        <div className="mb-10 flex justify-center">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 md:w-20"></div>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50 p-3">
                                    <Brain className="h-6 w-6 text-blue-300" />
                                </div>
                                <h3 className="mb-3 text-lg font-semibold md:text-xl">
                                    Memory That Builds Over Time
                                </h3>
                                <p className="text-gray-200">
                                    Unlike basic chatbots, your agents remember
                                    every interaction you've had, learning your
                                    preferences and communication style with
                                    each task they complete.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 p-3">
                                    <Settings className="h-6 w-6 text-purple-300" />
                                </div>
                                <h3 className="mb-3 text-lg font-semibold md:text-xl">
                                    Your Process, Automated
                                </h3>
                                <p className="text-gray-200">
                                    Map your exact workflow into an agent that
                                    follows your precise instructions. From
                                    research format to email tone to content
                                    structure—your agents do it exactly how you
                                    would.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-900/50 p-3">
                                    <Repeat className="h-6 w-6 text-indigo-300" />
                                </div>
                                <h3 className="mb-3 text-lg font-semibold md:text-xl">
                                    Agents That Work Together
                                </h3>
                                <p className="text-gray-200">
                                    Complex tasks? No problem. Multiple agents
                                    can collaborate—one researches, another
                                    drafts content, and a third polishes the
                                    final output—all while you're focused
                                    elsewhere.
                                </p>
                            </div>
                        </div>
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
    );
}
