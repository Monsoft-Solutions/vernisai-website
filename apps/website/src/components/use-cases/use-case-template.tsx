import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { UseCase } from '../../data/types/UseCase';
import { LucideProps } from 'lucide-react';
import { SEO } from '../seo/SEO';
import { CTAWorkflowAutomation } from '../CTA';

// Define the type for Lucide icons
type IconComponentType = React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>;

interface UseCaseTemplateProps {
    useCase: UseCase;
    icon: IconComponentType;
}

export const UseCaseTemplate: React.FC<UseCaseTemplateProps> = ({
    useCase,
    icon: IconComponent,
}) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <>
            <SEO
                title={`${useCase.name} | VernisAI`}
                description={useCase.shortDescription}
                canonicalUrl={`https://vernis.ai/use-cases/${useCase.id}`}
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    name: `VernisAI for ${useCase.name}`,
                    description: useCase.shortDescription,
                    url: `https://vernis.ai/use-cases/${useCase.id}`,
                    category: 'Software',
                    brand: {
                        '@type': 'Brand',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                    offers: {
                        '@type': 'Offer',
                        availability: 'https://schema.org/ComingSoon',
                        price: '29',
                        priceCurrency: 'USD',
                        priceValidUntil: '2025-12-31',
                    },
                }}
            />

            {/* Hero Background with enhanced decorative elements */}
            <div className="relative flex min-h-[50vh] items-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white">
                {/* Decorative background elements */}
                <div className="absolute inset-0 z-0">
                    <div
                        className={`absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full ${useCase.iconBgColor} opacity-10 blur-[100px]`}
                    ></div>
                    <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-20 blur-[80px]"></div>
                    <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-indigo-100 opacity-15 blur-[120px]"></div>
                    <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-purple-100 opacity-10 blur-[90px]"></div>
                    <div className="absolute top-1/2 left-1/4 h-[200px] w-[200px] rounded-full bg-emerald-100 opacity-10 blur-[70px]"></div>
                    {/* Pattern overlay for texture */}
                    <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 w-full">
                    <div className="mx-auto max-w-7xl px-4 pt-10 pb-10 sm:px-6 lg:px-8">
                        {/* Back button */}
                        <div className="mb-8">
                            <Link
                                to="/use-cases"
                                className="group inline-flex items-center text-gray-600 transition-colors hover:text-indigo-600"
                            >
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 group-hover:-translate-x-1">
                                    <ArrowLeft className="h-3.5 w-3.5" />
                                </div>
                                <span className="ml-2 text-sm font-medium">
                                    Back to Use Cases
                                </span>
                            </Link>
                        </div>

                        {/* Hero Section with enhanced styling */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            {/* Hero visual - Shows first on mobile */}
                            <motion.div
                                className="mb-6 flex justify-center md:order-2 md:mb-0 md:w-2/5 md:flex-shrink-0"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div
                                    className={`relative flex items-center justify-center rounded-lg ${useCase.iconBgColor} p-5 shadow-md`}
                                >
                                    <div className="absolute inset-0 rounded-lg bg-white/10"></div>
                                    <IconComponent
                                        className={`h-16 w-16 ${useCase.iconColor}`}
                                    />
                                </div>
                            </motion.div>

                            {/* Content - Shows second on mobile */}
                            <motion.div
                                className="md:order-1 md:max-w-3xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeOut',
                                    delay: 0.2,
                                }}
                            >
                                {/* Pill badge */}
                                <div className="mb-4">
                                    <span className="badge badge-primary inline-flex items-center px-3 py-1 backdrop-blur-sm">
                                        <Sparkles className="mr-1 h-3 w-3" />
                                        VernisAI Use Case
                                    </span>
                                </div>
                                <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                    {useCase.name}
                                </h1>
                                <p className="mb-4 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
                                    {useCase.shortDescription}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Overview with improved layout */}
                <motion.section
                    id="overview"
                    className="-mt-12 mb-16 pt-12 lg:mb-20" // Padding and negative margin for smooth scrolling with fixed header
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="relative">
                        <h2 className="mb-8 text-3xl font-bold">Overview</h2>
                        <div className="max-w-4xl space-y-5 text-lg leading-relaxed text-gray-700">
                            {useCase.overview.paragraphs.map(
                                (paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ),
                            )}
                        </div>
                        {/* Decorative icon */}
                        <div className="absolute -top-10 -right-10 hidden opacity-5 lg:block">
                            <IconComponent className="h-44 w-44" />
                        </div>
                    </div>
                </motion.section>

                {/* Applications with enhanced card styling */}
                <motion.section
                    className="mb-16 lg:mb-20"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <h2 className="mb-8 text-3xl font-bold">Applications</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {useCase.applications.map((application, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="group hover-lift rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                            >
                                <div className="mb-4">
                                    <div
                                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${useCase.iconBgColor} ${useCase.iconColor} transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <span className="text-sm font-semibold">
                                            {index + 1}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                                    {application.title}
                                </h3>
                                <p className="mb-4 text-gray-600">
                                    {application.description}
                                </p>
                                <div
                                    className={`flex items-center text-sm font-medium ${useCase.iconColor}`}
                                >
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    {application.benefit}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Key Benefits with improved visuals */}
                <motion.section
                    className="mb-16 rounded-xl border border-gray-100 bg-gray-50 p-6 lg:mb-20"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="mb-8 text-3xl font-bold">Key Benefits</h2>
                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {useCase.keyBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <div className="mt-1 flex-shrink-0">
                                    <div
                                        className={`flex h-6 w-6 items-center justify-center rounded-full ${useCase.iconBgColor}`}
                                    >
                                        <ChevronRight
                                            className={`h-3.5 w-3.5 ${useCase.iconColor}`}
                                        />
                                    </div>
                                </div>
                                <span className="ml-3 text-lg text-gray-700">
                                    {benefit}
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.section>

                {/* How It Works with visual timeline */}
                <motion.section
                    className="mb-16 lg:mb-20"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <h2 className="mb-8 text-3xl font-bold">How It Works</h2>
                    <div className="relative">
                        {/* Timeline vertical line */}
                        <div className="timeline-line"></div>

                        <div className="space-y-10">
                            {useCase.howItWorks.steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="relative flex"
                                >
                                    <div className="z-10 mr-5 flex-shrink-0">
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-full font-bold shadow-md ${useCase.iconBgColor} ${useCase.iconColor}`}
                                        >
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="pt-1 pb-8">
                                        <h3 className="mb-3 text-xl font-semibold">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-700">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section using the CTAWorkflowAutomation component */}
                <motion.div
                    className="mb-16 lg:mb-20"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <CTAWorkflowAutomation
                        title={useCase.cta.title}
                        description={useCase.cta.description}
                        buttonText="Join the Waitlist"
                        buttonLink="/waitlist"
                        variant="gradient"
                        showBadge={true}
                        badgeText="Limited Early Access"
                        showFooterText={true}
                        secondaryButton={{
                            text: 'Explore More Use Cases',
                            link: '/use-cases',
                        }}
                        showSeparator={false}
                        className="bg-transparent"
                    />
                </motion.div>

                {/* Related use cases navigation */}
                <motion.section
                    className="mb-16 lg:mb-20"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="rounded-xl bg-gray-50 p-8">
                        <h3 className="mb-6 text-center text-xl font-medium">
                            Discover More VernisAI Use Cases
                        </h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Display other use cases - simplified view for now */}
                            <Link
                                to="/use-cases"
                                className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md"
                            >
                                <span className="font-medium">
                                    All Use Cases
                                </span>
                                <ArrowRight className="h-4 w-4 text-gray-500" />
                            </Link>
                        </div>
                    </div>
                </motion.section>
            </div>
        </>
    );
};
