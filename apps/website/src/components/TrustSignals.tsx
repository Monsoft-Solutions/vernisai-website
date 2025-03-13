import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { Shield, Lock, Server, Award, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { TrustSignal } from '../data/trust/security-trust-signals';

interface TrustSignalsProps {
    title?: string;
    description?: string;
    signals: TrustSignal[];
    showLogos?: boolean;
    className?: string;
}

export function TrustSignals({
    title = 'Enterprise-Grade Security & Reliability',
    description = 'VernisAI is built with security and reliability at its core',
    signals,
    showLogos = true,
    className = '',
}: TrustSignalsProps) {
    const shouldReduceMotion = useReducedMotion();

    // Animation settings that respect reduced motion preferences
    const fadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

    const initialFadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 20 };

    const getIcon = (iconType: string) => {
        switch (iconType) {
            case 'security':
                return <Shield className="h-6 w-6 text-blue-500" />;
            case 'privacy':
                return <Lock className="h-6 w-6 text-blue-500" />;
            case 'uptime':
                return <Server className="h-6 w-6 text-blue-500" />;
            case 'certification':
                return <Award className="h-6 w-6 text-blue-500" />;
            case 'users':
                return <Users className="h-6 w-6 text-blue-500" />;
            case 'support':
                return <Clock className="h-6 w-6 text-blue-500" />;
            default:
                return <Shield className="h-6 w-6 text-blue-500" />;
        }
    };

    // Example company logos
    const companyLogos = [
        {
            name: 'Company 1',
            logo: 'https://via.placeholder.com/150x50?text=Company+1',
        },
        {
            name: 'Company 2',
            logo: 'https://via.placeholder.com/150x50?text=Company+2',
        },
        {
            name: 'Company 3',
            logo: 'https://via.placeholder.com/150x50?text=Company+3',
        },
        {
            name: 'Company 4',
            logo: 'https://via.placeholder.com/150x50?text=Company+4',
        },
        {
            name: 'Company 5',
            logo: 'https://via.placeholder.com/150x50?text=Company+5',
        },
    ];

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

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {signals.map((signal, index) => (
                        <motion.div
                            key={signal.title}
                            className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            initial={initialFadeInAnimation}
                            whileInView={fadeInAnimation}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: shouldReduceMotion ? 0 : index * 0.1,
                            }}
                        >
                            <div className="mb-4 w-fit rounded-full bg-blue-50 p-3">
                                {getIcon(signal.icon)}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                {signal.title}
                            </h3>
                            <p className="text-gray-600">
                                {signal.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {showLogos && (
                    <motion.div
                        className="mx-auto mt-16 max-w-6xl"
                        initial={initialFadeInAnimation}
                        whileInView={fadeInAnimation}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="mb-8 text-center text-lg font-medium text-gray-600">
                            Trusted by leading companies worldwide
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale">
                            {companyLogos.map((company) => (
                                <img
                                    key={company.name}
                                    src={company.logo}
                                    alt={company.name}
                                    className="h-8 object-contain md:h-10"
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                <div className="mx-auto mt-16 max-w-3xl rounded-xl bg-blue-50 p-8">
                    <div className="text-center">
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">
                            Need more information about our security practices?
                        </h3>
                        <p className="mb-6 text-lg text-gray-600">
                            Download our security whitepaper or schedule a call
                            with our security team to learn more about how we
                            protect your data.
                        </p>
                        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <Button
                                asChild
                                className="bg-blue-600 text-white hover:bg-blue-700"
                            >
                                <Link to="/security-whitepaper">
                                    Download Security Whitepaper
                                </Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link to="/contact">
                                    Schedule Security Review
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
