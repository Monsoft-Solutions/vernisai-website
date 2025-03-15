import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

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
                                    <Button
                                        asChild
                                        variant="white"
                                        size="xl"
                                        showArrow
                                        glow
                                    >
                                        <Link to={buttonLink}>
                                            {buttonText}
                                        </Link>
                                    </Button>
                                    {secondaryButton && (
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="xl"
                                            className="border-2 border-white bg-transparent text-white hover:bg-white/10"
                                        >
                                            <Link to={secondaryButton.link}>
                                                {secondaryButton.text}
                                            </Link>
                                        </Button>
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
                        <Button asChild variant="primary" size="lg" showArrow>
                            <Link to={buttonLink}>{buttonText}</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
