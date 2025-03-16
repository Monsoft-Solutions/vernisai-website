import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export function ThankYou() {
    return (
        <>
            <Helmet>
                <title>Thank You - VernisAI Waitlist</title>
                <meta
                    name="description"
                    content="Thank you for joining the VernisAI waitlist. We'll notify you when we have availability."
                />
            </Helmet>
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <div className="flex flex-col items-center justify-center space-y-8 text-center">
                        {/* Success Icon with Animation */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                                delay: 0.1,
                            }}
                            className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50"
                        >
                            <CheckCircle className="h-16 w-16 text-blue-600" />
                        </motion.div>

                        {/* Thank You Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                                Thank You for Joining!
                            </h1>
                            <p className="text-xl text-gray-600">
                                Your spot on our waitlist has been reserved.
                            </p>
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="max-w-xl space-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-md"
                        >
                            <p className="text-lg text-gray-700">
                                We're excited to have you on board! We'll notify
                                you as soon as we have availability so you can
                                start using VernisAI to build powerful AI
                                workflows without code.
                            </p>

                            <div className="space-y-4 rounded-xl bg-blue-50 p-4">
                                <h3 className="font-semibold text-blue-800">
                                    What happens next?
                                </h3>
                                <ul className="space-y-2 text-left text-gray-700">
                                    <li className="flex items-start">
                                        <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                                        <span>
                                            You'll receive a confirmation email
                                            shortly
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                                        <span>
                                            We'll notify you when your access is
                                            ready
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                                        <span>
                                            You'll get priority onboarding
                                            support
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Social Sharing and Home Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex flex-col space-y-4"
                        >
                            <p className="text-gray-500">
                                While you wait, explore more about what VernisAI
                                can do for you.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button asChild size="lg">
                                    <Link to="/">
                                        <Home className="mr-2 h-5 w-5" />
                                        Return to Home
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link to="/features">Explore Features</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
