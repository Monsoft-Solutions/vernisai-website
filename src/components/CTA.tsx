import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Separator } from './ui/separator';

interface CTAWorkflowAutomationProps {
    showSeparator?: boolean;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    className?: string;
    variant?: 'default' | 'gradient';
    secondaryButton?: {
        text: string;
        link: string;
    };
    showBadge?: boolean;
    badgeText?: string;
    showFooterText?: boolean;
    footerText?: string;
}

export function CTAWorkflowAutomation({
    showSeparator = true,
    title = 'Ready to automate your workflows with AI?',
    description = "Join our waitlist to be among the first to experience VernisAI's powerful automation capabilities.",
    buttonText = 'Join the Waitlist',
    buttonLink = '/waitlist',
    className = '',
    variant = 'default',
    secondaryButton,
    showBadge = false,
    badgeText = 'Limited Early Access',
    showFooterText = false,
    footerText = 'No credit card required. Limited spots available.',
}: CTAWorkflowAutomationProps) {
    if (variant === 'gradient') {
        return (
            <div className={`bg-white py-16 ${className}`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-16 sm:p-16">
                        {/* Abstract shapes for visual interest */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-white opacity-10"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-white opacity-10"></div>

                        <div className="relative mx-auto max-w-xl text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {showBadge && (
                                    <span className="mb-6 inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
                                        <Sparkles className="mr-1.5 h-4 w-4" />
                                        {badgeText}
                                    </span>
                                )}
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    {title}
                                </h2>
                                <p className="mx-auto mt-4 max-w-md text-lg text-blue-100">
                                    {description}
                                </p>
                                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                                    <Link
                                        to={buttonLink}
                                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none"
                                    >
                                        <span className="relative">
                                            {buttonText}
                                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                    {secondaryButton && (
                                        <Link
                                            to={secondaryButton.link}
                                            className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-all hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none"
                                        >
                                            {secondaryButton.text}
                                        </Link>
                                    )}
                                </div>
                                {showFooterText && (
                                    <p className="mt-6 text-sm text-blue-100/80">
                                        {footerText}
                                    </p>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div className={className}>
            {showSeparator && (
                <div className="flex justify-center">
                    <Separator className="my-12 w-1/2" />
                </div>
            )}
            <div className="mx-auto max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        {title}
                    </h3>
                    <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
                        {description}
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Link
                            to={buttonLink}
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                        >
                            <span className="relative">{buttonText}</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
