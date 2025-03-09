import { Waitlist, SEO } from '../components';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Zap } from 'lucide-react';

export function WaitlistPage() {
    return (
        <div className="overflow-hidden bg-gradient-to-b from-white to-gray-50">
            <SEO
                title="Join the Waitlist - Early Access to VernisAI"
                description="Sign up for early access to VernisAI's AI-powered workflow automation platform. Be among the first to experience our no-code tools for business automation."
                keywords="waitlist, early access, AI platform, workflow automation, sign up"
                canonicalUrl="https://vernis.ai/waitlist"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'WebPage',
                    name: 'VernisAI Waitlist',
                    description:
                        "Sign up for early access to VernisAI's AI-powered workflow automation platform.",
                    url: 'https://vernis.ai/waitlist',
                    publisher: {
                        '@type': 'Organization',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                }}
            />

            {/* Hero section with background pattern */}
            <div className="relative">
                {/* Background pattern elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute -top-[10%] -left-[10%] h-[30%] w-[30%] rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
                    <div className="absolute right-[5%] bottom-[10%] h-[40%] w-[40%] rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
                    <motion.div
                        className="mx-auto mb-16 max-w-3xl text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                            <Sparkles className="mr-1.5 h-4 w-4" />
                            <span>Early Adopter Program</span>
                        </span>

                        <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                            Be First to Experience VernisAI
                        </h1>

                        <p className="text-muted-foreground mt-6 max-w-2xl text-center text-lg sm:mx-auto">
                            We're opening limited access to our platform soon.
                            Join our exclusive early adopter program and shape
                            the future of AI-powered workflow automation.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            <motion.div
                                className="flex flex-col items-center rounded-xl bg-white p-5 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                    <Rocket className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="mt-4 font-semibold">
                                    Priority Access
                                </h3>
                                <p className="text-muted-foreground mt-2 text-center text-sm">
                                    Skip the line and get access before general
                                    release
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-col items-center rounded-xl bg-white p-5 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                                    <Zap className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="mt-4 font-semibold">
                                    Exclusive Features
                                </h3>
                                <p className="text-muted-foreground mt-2 text-center text-sm">
                                    Test new capabilities before they're widely
                                    available
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-col items-center rounded-xl bg-white p-5 shadow-sm sm:col-span-2 md:col-span-1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                    <svg
                                        className="h-6 w-6 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mt-4 font-semibold">
                                    Special Pricing
                                </h3>
                                <p className="text-muted-foreground mt-2 text-center text-sm">
                                    Exclusive discounts for early adopters
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <Waitlist />

                    <motion.div
                        className="mx-auto mt-16 max-w-2xl text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-muted-foreground text-sm">
                            Have questions about our early adopter program?
                            Contact us at{' '}
                            <a
                                href="mailto:waitlist@vernis.ai"
                                className="text-blue-600 hover:underline"
                            >
                                waitlist@vernis.ai
                            </a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
