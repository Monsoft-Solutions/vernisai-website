import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import {
    CheckCircle2,
    ArrowRight,
    Zap,
    Clock,
    Brain,
    Shield,
    Star,
    BarChart,
    Users,
    Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
            <div className="px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center space-y-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex max-w-3xl flex-col justify-center space-y-6 text-center">
                        <motion.h1
                            className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl xl:text-6xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                        >
                            Your Personal AI Assistant for Everyday Tasks
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-[800px] text-xl text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                        >
                            VernisAI helps you save time and reduce stress by
                            automating your everyday tasks - so you can focus on
                            what truly matters in your life.
                        </motion.p>

                        <motion.div
                            className="mt-2 flex flex-wrap justify-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">
                                    No technical skills needed
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">
                                    Works with your favorite apps
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">
                                    Set up in minutes
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-6 flex flex-col justify-center gap-4 sm:flex-row"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="transform bg-black px-8 text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
                            >
                                <Link to="/waitlist">Get Early Access</Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="transform border-gray-300 px-8 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                            >
                                <Link to="/use-cases">See Use Cases</Link>
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative w-full max-w-5xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 md:p-8">
                                <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
                                    How VernisAI Transforms Your Daily Life
                                </h2>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <motion.div
                                        className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                                        whileHover={{
                                            y: -5,
                                            boxShadow:
                                                '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <div className="mb-3 flex items-center gap-3">
                                            <div className="rounded-full bg-blue-100 p-2">
                                                <Clock className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <h3 className="text-lg font-semibold">
                                                Save 5+ Hours Weekly
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Our users report saving at least 5
                                            hours every week by automating
                                            repetitive tasks like email
                                            management, data entry, and
                                            scheduling.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                                        whileHover={{
                                            y: -5,
                                            boxShadow:
                                                '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <div className="mb-3 flex items-center gap-3">
                                            <div className="rounded-full bg-green-100 p-2">
                                                <Star className="h-5 w-5 text-green-600" />
                                            </div>
                                            <h3 className="text-lg font-semibold">
                                                Reduce Errors by 90%
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Eliminate human error in repetitive
                                            tasks. Our AI ensures consistent,
                                            accurate results every time,
                                            reducing mistakes by up to 90%.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                                        whileHover={{
                                            y: -5,
                                            boxShadow:
                                                '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <div className="mb-3 flex items-center gap-3">
                                            <div className="rounded-full bg-purple-100 p-2">
                                                <BarChart className="h-5 w-5 text-purple-600" />
                                            </div>
                                            <h3 className="text-lg font-semibold">
                                                Boost Productivity 3x
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Users report completing 3 times more
                                            high-value work after automating
                                            routine tasks with VernisAI, leading
                                            to better results and satisfaction.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                                        whileHover={{
                                            y: -5,
                                            boxShadow:
                                                '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <div className="mb-3 flex items-center gap-3">
                                            <div className="rounded-full bg-yellow-100 p-2">
                                                <Sparkles className="h-5 w-5 text-yellow-600" />
                                            </div>
                                            <h3 className="text-lg font-semibold">
                                                Reduce Stress Levels
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            87% of our users report
                                            significantly lower stress levels
                                            after automating their repetitive
                                            tasks, allowing for better work-life
                                            balance.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 bg-gray-50 p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-2">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white">
                                                1K+
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Join over 1,000 people already
                                            saving time with VernisAI
                                        </p>
                                    </div>
                                    <Link
                                        to="/features"
                                        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                                    >
                                        See all features
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
