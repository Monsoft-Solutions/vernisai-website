import { Features as FeaturesComponent } from '../components/Features';
import { FAQ, SEO } from '../components';
import { featuresFAQItems } from '../data/faq-data';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Sparkles,
    Clock,
    Zap,
    Shield,
    BarChart,
    CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTAWorkflowAutomation } from '../components/CTA';

export function Features() {
    return (
        <div className="flex min-h-screen flex-col">
            <SEO
                title="Features - AI-Powered Workflow Automation Tools"
                description="Explore VernisAI's powerful features for workflow automation, knowledge management, and AI-assisted content creation. Build custom workflows without coding."
                keywords="AI features, workflow automation features, no-code tools, AI pipelines, knowledge base, agents"
                canonicalUrl="https://vernis.ai/features"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    name: 'VernisAI Platform',
                    description:
                        'AI-Powered No-Code Workflow Automation Platform',
                    url: 'https://vernis.ai/features',
                    brand: {
                        '@type': 'Brand',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                    offers: {
                        '@type': 'Offer',
                        availability: 'https://schema.org/ComingSoon',
                    },
                }}
            />
            {/* Hero Section with gradient background and animation */}
            <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200 blur-3xl"></div>
                    <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-purple-200 blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <div className="mb-6 flex items-center justify-center">
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
                                <Sparkles className="mr-1.5 h-4 w-4" />
                                Simple AI Automation
                            </span>
                        </div>
                        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
                            Work Smarter, Not Harder
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
                            VernisAI helps you automate everyday tasks across
                            all your favorite apps and tools—no coding required.
                            Save hours each week and let AI handle the
                            repetitive work.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mt-10 flex flex-wrap items-center justify-center gap-4"
                        >
                            <Link
                                to="/waitlist"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                            >
                                <span className="relative">Try for Free</span>
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                            <Link
                                to="/demo"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                            >
                                See 2-Minute Demo
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Key Benefits Section */}
            <div className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            How VernisAI Makes Your Life Easier
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
                            Real benefits that save you time and reduce stress
                            every day
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                <Clock className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                Get Hours Back
                            </h3>
                            <p className="text-gray-600">
                                Automate email follow-ups, data entry, and
                                report generation. Our users save 5+ hours every
                                week on repetitive tasks.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                Work Smarter
                            </h3>
                            <p className="text-gray-600">
                                Focus on creative and strategic work while
                                VernisAI handles the routine stuff like
                                scheduling, data updates, and notifications.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                Never Miss Details
                            </h3>
                            <p className="text-gray-600">
                                Eliminate human error in data transfers,
                                customer follow-ups, and deadline tracking.
                                VernisAI is consistent and reliable.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                                <BarChart className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                Do More With Less
                            </h3>
                            <p className="text-gray-600">
                                Handle growing workloads without hiring more
                                people. One customer automated work equivalent
                                to 2 full-time employees.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Features Component */}
            <FeaturesComponent />

            {/* How It Works Section */}
            <div className="bg-gray-50 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            How VernisAI Works
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
                            Simple enough for anyone to use, powerful enough for
                            any workflow
                        </p>
                    </div>

                    <div className="mt-16 grid gap-12 md:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                Connect Your Apps
                            </h3>
                            <p className="text-gray-600">
                                Link your favorite tools like Gmail, Slack,
                                Google Drive, and 100+ others with just a few
                                clicks. No API knowledge needed.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                Create Workflows
                            </h3>
                            <p className="text-gray-600">
                                Tell VernisAI what you want to automate in plain
                                English or use our simple drag-and-drop builder
                                to create your workflow.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                Let AI Do the Work
                            </h3>
                            <p className="text-gray-600">
                                Sit back as VernisAI runs your workflows
                                automatically. Get notified when important tasks
                                are complete or need your attention.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            What Can You Automate?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
                            Real examples of how people use VernisAI every day
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                Customer Support
                            </h3>
                            <ul className="mb-4 space-y-2">
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span className="text-gray-600">
                                        Auto-categorize and route support
                                        tickets
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span className="text-gray-600">
                                        Draft responses to common questions
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span className="text-gray-600">
                                        Send follow-up surveys automatically
                                    </span>
                                </li>
                            </ul>
                            <p className="text-sm font-medium text-blue-600">
                                <Link
                                    to="/use-cases/task-automation"
                                    className="flex items-center"
                                >
                                    See how it works
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                Marketing & Content
                            </h3>
                            <ul className="mb-4 space-y-2">
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span className="text-gray-600">
                                        Schedule social posts across platforms
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span className="text-gray-600">
                                        Generate weekly performance reports
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span className="text-gray-600">
                                        Create content briefs from trending
                                        topics
                                    </span>
                                </li>
                            </ul>
                            <p className="text-sm font-medium text-blue-600">
                                <Link
                                    to="/use-cases/content-creation"
                                    className="flex items-center"
                                >
                                    See how it works
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                HR & Recruitment
                            </h3>
                            <ul className="mb-4 space-y-2">
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span className="text-gray-600">
                                        Screen resumes and rank candidates
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span className="text-gray-600">
                                        Schedule interviews with calendar sync
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span className="text-gray-600">
                                        Send personalized onboarding materials
                                    </span>
                                </li>
                            </ul>
                            <p className="text-sm font-medium text-blue-600">
                                <Link
                                    to="/use-cases/project-management"
                                    className="flex items-center"
                                >
                                    See how it works
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="bg-gray-50 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="overflow-hidden rounded-2xl bg-blue-600 shadow-xl"
                    >
                        <div className="relative px-6 py-10 sm:px-12 sm:py-16 md:px-16">
                            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500 opacity-20"></div>
                            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-700 opacity-20"></div>
                            <div className="relative">
                                <div className="mb-8 flex items-center justify-center">
                                    <div className="flex -space-x-2">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/79.jpg"
                                            alt="Sarah Johnson"
                                            className="h-12 w-12 rounded-full border-2 border-white object-cover"
                                        />
                                    </div>
                                </div>
                                <blockquote className="text-center">
                                    <p className="text-xl leading-relaxed font-medium text-white sm:text-2xl">
                                        "I used to spend 2 hours every morning
                                        just updating spreadsheets and sending
                                        status emails. VernisAI now does it all
                                        automatically while I sleep. It's like
                                        having a personal assistant who never
                                        takes a day off."
                                    </p>
                                    <footer className="mt-6">
                                        <p className="flex flex-col items-center text-base font-medium text-blue-100">
                                            <span className="text-white">
                                                Sarah Johnson
                                            </span>
                                            <span>
                                                Marketing Director, TechForward
                                            </span>
                                        </p>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Social Proof Section */}
            <div className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Trusted by Teams Everywhere
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
                            From startups to Fortune 500 companies
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70 grayscale">
                        {/* Replace with actual customer logos */}
                        <img
                            src="https://via.placeholder.com/120x40?text=Company"
                            alt="Company logo"
                            className="h-8"
                        />
                        <img
                            src="https://via.placeholder.com/120x40?text=Brand"
                            alt="Brand logo"
                            className="h-10"
                        />
                        <img
                            src="https://via.placeholder.com/120x40?text=Enterprise"
                            alt="Enterprise logo"
                            className="h-8"
                        />
                        <img
                            src="https://via.placeholder.com/120x40?text=Corp"
                            alt="Corp logo"
                            className="h-10"
                        />
                        <img
                            src="https://via.placeholder.com/120x40?text=Inc"
                            alt="Inc logo"
                            className="h-8"
                        />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ
                title="Common Questions"
                summary="Everything you need to know about VernisAI's features and how they can help you save time and work more efficiently."
                items={featuresFAQItems}
                variant="dark"
                className="py-20"
                titleClassName="text-blue-400"
                summaryClassName="text-gray-300 max-w-3xl mx-auto"
            />

            {/* CTA Section */}
            <CTAWorkflowAutomation
                variant="gradient"
                description="Join our waitlist today and be among the first to experience the future of work automation. Early access members receive premium features at no cost."
                showBadge={true}
                showFooterText={true}
                secondaryButton={{
                    text: 'Watch Demo',
                    link: '/demo',
                }}
            />
        </div>
    );
}
