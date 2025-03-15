import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { useToast } from '../hooks/use-toast';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    company: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Helper function to get UTM parameters from URL
function getUtmParameters(): Record<string, string> {
    if (typeof window === 'undefined') return {};

    const urlParams = new URLSearchParams(window.location.search);
    const utmParams: Record<string, string> = {};

    // Extract all UTM parameters
    [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
    ].forEach((param) => {
        const value = urlParams.get(param);
        if (value) {
            utmParams[param] = value;
        }
    });

    return utmParams;
}

export function Waitlist() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [utmParams, setUtmParams] = useState<Record<string, string>>({});
    const { toast } = useToast();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            name: '',
            company: '',
        },
    });

    // Capture UTM parameters when component mounts
    useEffect(() => {
        const params = getUtmParameters();
        setUtmParams(params);

        // Store UTM parameters in session storage for persistence across pages
        if (Object.keys(params).length > 0) {
            sessionStorage.setItem('utm_params', JSON.stringify(params));
        }
    }, []);

    async function onSubmit(data: FormValues) {
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            // Get stored UTM parameters from session storage if they exist
            let storedUtmParams = {};
            try {
                const storedParams = sessionStorage.getItem('utm_params');
                if (storedParams) {
                    storedUtmParams = JSON.parse(storedParams);
                }
            } catch (e) {
                console.error('Error parsing stored UTM parameters:', e);
            }

            // Combine form data with UTM parameters and referrer
            const submissionData = {
                ...data,
                ...utmParams,
                ...storedUtmParams,
                referrer: document.referrer || undefined,
            };

            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 409) {
                    toast({
                        title: 'Already registered',
                        description: 'This email is already on our waitlist.',
                        variant: 'destructive',
                    });
                    setIsSubmitting(false);
                    return;
                }

                throw new Error(result.error || 'Something went wrong');
            }

            toast({
                title: 'Success!',
                description:
                    "You've been added to our waitlist. We'll be in touch soon!",
                variant: 'success',
            });

            // Track conversion for Google Ads if gtag is available
            if (window.gtag) {
                try {
                    window.gtag('event', 'conversion', {
                        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your actual conversion ID and label
                        value: 1.0,
                        currency: 'USD',
                    });
                } catch (e) {
                    console.error('Error tracking Google Ads conversion:', e);
                }
            }

            // Track conversion for Meta Ads if fbq is available
            if (window.fbq) {
                try {
                    window.fbq('track', 'Lead');
                } catch (e) {
                    console.error('Error tracking Meta Ads conversion:', e);
                }
            }

            form.reset();
            setIsSubmitting(false);
        } catch (error) {
            console.error('Waitlist submission error:', error);
            toast({
                title: 'Submission failed',
                description:
                    'There was a problem adding you to the waitlist. Please try again.',
                variant: 'destructive',
            });
            setIsSubmitting(false);
        }
    }

    const benefits = [
        'Early access to VernisAI platform',
        'Exclusive onboarding support',
        'Influence future features',
        'Special early adopter pricing',
    ];

    return (
        <section className="flex w-full justify-center py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                        <Sparkles className="mr-1.5 h-4 w-4" />
                        <span>Limited Early Access</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Join the VernisAI Waitlist
                    </h2>
                    <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Be among the first to experience the power of AI-driven
                        workflow automation. Sign up for early access and
                        updates.
                    </p>

                    <div className="mt-8 space-y-3">
                        <p className="font-medium">Early access benefits:</p>
                        <ul className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <CheckCircle className="mt-0.5 h-5 w-5 text-blue-500" />
                                    <span>{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    className="mx-auto w-full max-w-md space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="space-y-2 text-center">
                        <h3 className="text-xl font-bold">Reserve Your Spot</h3>
                        <p className="text-muted-foreground text-sm">
                            Complete the form below to join our waitlist
                        </p>
                    </div>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your name"
                                                className="h-11 rounded-lg"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="your.email@example.com"
                                                type="email"
                                                className="h-11 rounded-lg"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Company{' '}
                                            <span className="text-muted-foreground text-xs">
                                                (optional)
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your company name"
                                                className="h-11 rounded-lg"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="mt-6 w-full"
                                disabled={isSubmitting}
                                showArrow={!isSubmitting}
                                iconLeft={
                                    isSubmitting ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : undefined
                                }
                            >
                                {isSubmitting
                                    ? 'Submitting...'
                                    : 'Join Waitlist'}
                            </Button>
                        </form>
                    </Form>

                    <div className="pt-2">
                        <p className="text-muted-foreground text-center text-xs">
                            By signing up, you agree to our{' '}
                            <a
                                href="/terms"
                                className="text-blue-600 underline-offset-2 hover:underline"
                            >
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a
                                href="/privacy"
                                className="text-blue-600 underline-offset-2 hover:underline"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                        <p className="text-muted-foreground mt-1 text-center text-xs">
                            We'll never share your information with third
                            parties.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
