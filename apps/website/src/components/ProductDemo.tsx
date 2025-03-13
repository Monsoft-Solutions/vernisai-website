import { useState } from 'react';
import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { Play, Maximize2, ChevronRight, ChevronLeft } from 'lucide-react';
import { DemoScreen } from '../data/demo/workflow-demo-screens';

interface ProductDemoProps {
    title?: string;
    description?: string;
    screens: DemoScreen[];
    className?: string;
}

export function ProductDemo({
    title = 'See VernisAI in Action',
    description = 'Explore how our platform works with these interactive demos',
    screens,
    className = '',
}: ProductDemoProps) {
    const shouldReduceMotion = useReducedMotion();
    const [activeScreen, setActiveScreen] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Animation settings that respect reduced motion preferences
    const fadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

    const initialFadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 20 };

    const nextScreen = () => {
        setActiveScreen((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
    };

    const prevScreen = () => {
        setActiveScreen((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={`w-full py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mx-auto mb-12 max-w-3xl text-center"
                    initial={initialFadeInAnimation}
                    whileInView={fadeInAnimation}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600">{description}</p>
                </motion.div>

                <div className="mx-auto max-w-6xl">
                    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        {/* Main demo screen */}
                        <motion.div
                            key={screens[activeScreen].id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                <img
                                    src={screens[activeScreen].image}
                                    alt={screens[activeScreen].title}
                                    className="h-full w-full object-cover"
                                />
                                {screens[activeScreen].videoUrl && (
                                    <button
                                        onClick={openModal}
                                        className="bg-opacity-30 hover:bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black transition-opacity"
                                        aria-label="Play video"
                                    >
                                        <div className="bg-opacity-90 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                                            <Play className="h-8 w-8 text-blue-600" />
                                        </div>
                                    </button>
                                )}
                                <button
                                    onClick={openModal}
                                    className="absolute right-4 bottom-4 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-105"
                                    aria-label="View fullscreen"
                                >
                                    <Maximize2 className="h-5 w-5 text-gray-700" />
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-gray-900">
                                    {screens[activeScreen].title}
                                </h3>
                                <p className="text-gray-600">
                                    {screens[activeScreen].description}
                                </p>
                            </div>
                        </motion.div>

                        {/* Navigation arrows */}
                        <button
                            onClick={prevScreen}
                            className="bg-opacity-80 absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
                            aria-label="Previous screen"
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-700" />
                        </button>
                        <button
                            onClick={nextScreen}
                            className="bg-opacity-80 absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
                            aria-label="Next screen"
                        >
                            <ChevronRight className="h-6 w-6 text-gray-700" />
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="mt-6 flex justify-center space-x-2">
                        {screens.map((screen, index) => (
                            <button
                                key={screen.id}
                                onClick={() => setActiveScreen(index)}
                                className={`h-2 w-8 rounded-full transition-colors ${
                                    activeScreen === index
                                        ? 'bg-blue-600'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`View ${screen.title}`}
                                aria-current={activeScreen === index}
                            />
                        ))}
                    </div>
                </div>

                {/* Full-screen modal */}
                {isModalOpen && (
                    <div className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
                        <div className="relative max-h-[90vh] max-w-6xl overflow-auto rounded-lg bg-white">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 rounded-full bg-white p-2 shadow-md"
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            {screens[activeScreen].videoUrl ? (
                                <div className="aspect-video w-full">
                                    <iframe
                                        src={screens[activeScreen].videoUrl}
                                        title={screens[activeScreen].title}
                                        className="h-full w-full"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <img
                                    src={screens[activeScreen].image}
                                    alt={screens[activeScreen].title}
                                    className="max-h-[80vh] w-auto"
                                />
                            )}
                            <div className="bg-white p-6">
                                <h3 className="mb-2 text-xl font-bold text-gray-900">
                                    {screens[activeScreen].title}
                                </h3>
                                <p className="text-gray-600">
                                    {screens[activeScreen].description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
