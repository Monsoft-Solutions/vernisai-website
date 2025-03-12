import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
    ArrowRight,
    Sparkles,
    Check,
    CheckCircle,
    CreditCard,
    Star,
    Building,
    X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO, FAQ } from '../components';
import { pricingFAQItems } from '../data/faq-data';
import { CTAWorkflowAutomation } from '../components/CTA';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';

// Form schema for enterprise contact form
const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    company: z.string().min(2, {
        message: 'Company name must be at least 2 characters.',
    }),
});

type FormValues = z.infer<typeof formSchema>;

export function Pricing() {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>(
        'monthly',
    );
    const shouldReduceMotion = useReducedMotion();
    const { toast } = useToast();

    // Enterprise contact form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            name: '',
            company: '',
        },
    });

    function onSubmit(_data: FormValues) {
        // This would send the data to a backend service in a real implementation
        toast({
            title: 'Request received!',
            description:
                'Thanks for your interest! Our sales team will contact you within 24 hours.',
        });
        form.reset();
    }

    const toggleBillingPeriod = () => {
        setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
    };

    // Animation settings that respect reduced motion preferences
    const fadeInAnimation = shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

    const initialFadeInAnimation = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 20 };

    // Plans data
    const pricingPlans = [
        {
            name: 'Starter',
            description: 'Perfect for individuals and small projects',
            priceMonthly: 19,
            priceYearly: 190,
            features: [
                '5 workflows',
                '1,000 AI operations/month',
                'Email support',
                'Basic templates',
                'Standard integrations',
                '1 team member',
            ],
            cta: 'Get Started',
            ctaLink: '/waitlist',
            highlight: false,
            icon: <CreditCard className="h-5 w-5" />,
        },
        {
            name: 'Pro',
            description: 'For professionals and growing teams',
            priceMonthly: 49,
            priceYearly: 490,
            features: [
                'Unlimited workflows',
                '10,000 AI operations/month',
                'Priority support',
                'Advanced templates',
                '100+ integrations',
                'Up to 5 team members',
                'Workflow sharing',
                'Audit logs',
            ],
            cta: 'Start Free Trial',
            ctaLink: '/waitlist',
            highlight: true,
            icon: <Star className="h-5 w-5" />,
            badge: 'Most Popular',
        },
        {
            name: 'Enterprise',
            description: 'For organizations with advanced needs',
            priceMonthly: 149,
            priceYearly: 1490,
            features: [
                'Unlimited workflows',
                'Unlimited AI operations',
                '24/7 dedicated support',
                'Custom templates',
                'Advanced security features',
                'Unlimited team members',
                'SSO & SAML',
                'API access',
                'Custom integrations',
                'SLA guarantee',
            ],
            cta: 'Contact Sales',
            ctaLink: '/contact',
            highlight: false,
            icon: <Building className="h-5 w-5" />,
        },
    ];

    // For responsive pricing comparison
    const features = [
        {
            name: 'Workflows',
            starter: '5',
            pro: 'Unlimited',
            enterprise: 'Unlimited',
        },
        {
            name: 'AI Operations',
            starter: '1,000 / month',
            pro: '10,000 / month',
            enterprise: 'Unlimited',
        },
        {
            name: 'Team Members',
            starter: '1',
            pro: 'Up to 5',
            enterprise: 'Unlimited',
        },
        {
            name: 'Support',
            starter: 'Email',
            pro: 'Priority',
            enterprise: '24/7 Dedicated',
        },
        {
            name: 'Advanced Security',
            starter: false,
            pro: true,
            enterprise: true,
        },
        {
            name: 'API Access',
            starter: false,
            pro: 'Limited',
            enterprise: true,
        },
        {
            name: 'Custom Integrations',
            starter: false,
            pro: false,
            enterprise: true,
        },
        { name: 'SSO & SAML', starter: false, pro: false, enterprise: true },
    ];

    // Testimonials data
    const testimonials = [
        {
            name: 'John Smith',
            role: 'Marketing Director',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            text: 'VernisAI has cut our content creation time in half. What used to take us days now takes hours. The Pro plan has been worth every penny.',
        },
        {
            name: 'Sarah Johnson',
            role: 'Operations Manager',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            text: 'The ability to automate our customer support workflows has been game-changing. We upgraded to Pro after seeing the results from just one month.',
        },
        {
            name: 'David Chang',
            role: 'CTO, TechStart',
            image: 'https://randomuser.me/api/portraits/men/67.jpg',
            text: 'As an enterprise customer, the dedicated support and custom integrations have made VernisAI an essential part of our tech stack.',
        },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <SEO
                title="Pricing - VernisAI Workflow Automation Platform"
                description="Simple, transparent pricing for individuals, teams, and enterprises. Choose the plan that's right for you and start automating your workflows today."
                keywords="VernisAI pricing, workflow automation pricing, AI tools pricing, subscription plans"
                canonicalUrl="https://vernis.ai/pricing"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'PriceSpecification',
                    name: 'VernisAI Platform Pricing',
                    description:
                        'Pricing plans for the VernisAI Workflow Automation Platform',
                    url: 'https://vernis.ai/pricing',
                    brand: {
                        '@type': 'Brand',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                }}
            />

            {/* Hero Section with gradient background and animation */}
            <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200 blur-3xl"></div>
                    <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-purple-200 blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8">
                    <motion.div
                        initial={initialFadeInAnimation}
                        animate={fadeInAnimation}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <div className="mb-6 flex items-center justify-center">
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
                                <Sparkles className="mr-1.5 h-4 w-4" />
                                Simple, Transparent Pricing
                            </span>
                        </div>
                        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Pay Only For What You Need
                            </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                            Start for free, upgrade as you grow. All plans come
                            with a 14-day free trial. No credit card required to
                            get started.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Pricing Toggle */}
            <div className="bg-white py-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center space-x-3">
                        <span
                            className={`text-base font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}
                        >
                            Monthly
                        </span>
                        <button
                            onClick={toggleBillingPeriod}
                            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                            role="switch"
                            aria-checked={billingPeriod === 'yearly'}
                            aria-label={`Toggle billing to ${billingPeriod === 'monthly' ? 'yearly' : 'monthly'}`}
                        >
                            <span className="sr-only">
                                Toggle billing period
                            </span>
                            <span
                                aria-hidden="true"
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                    billingPeriod === 'yearly'
                                        ? 'translate-x-5'
                                        : 'translate-x-0'
                                }`}
                            />
                        </button>
                        <span
                            className={`flex items-center gap-2 text-base font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}
                        >
                            Yearly
                            <Badge
                                variant="outline"
                                className="border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700"
                            >
                                Save 20%
                            </Badge>
                        </span>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {pricingPlans.map((plan) => (
                            <motion.div
                                key={plan.name}
                                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                                className={`overflow-hidden rounded-xl ${
                                    plan.highlight
                                        ? 'border-2 border-blue-500 shadow-lg shadow-blue-100'
                                        : 'border border-gray-200 shadow-sm'
                                } relative`}
                            >
                                {plan.badge && (
                                    <div className="absolute top-0 right-0 z-10 -mt-2 -mr-2">
                                        <Badge className="border-0 bg-blue-600 px-3 py-1 font-medium text-white">
                                            {plan.badge}
                                        </Badge>
                                    </div>
                                )}
                                <div
                                    className={`p-6 sm:p-8 ${plan.highlight ? 'bg-blue-50' : 'bg-white'}`}
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="mb-1 text-xl font-bold text-gray-900">
                                                {plan.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {plan.description}
                                            </p>
                                        </div>
                                        <div
                                            className={`rounded-full p-2 ${plan.highlight ? 'bg-blue-100' : 'bg-gray-100'}`}
                                        >
                                            {plan.icon}
                                        </div>
                                    </div>

                                    <div className="mt-6 mb-8">
                                        <div className="flex items-baseline text-gray-900">
                                            <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                                $
                                                {billingPeriod === 'monthly'
                                                    ? plan.priceMonthly
                                                    : plan.priceYearly}
                                            </span>
                                            <span className="ml-1 text-xl font-medium text-gray-500">
                                                /
                                                {billingPeriod === 'monthly'
                                                    ? 'month'
                                                    : 'year'}
                                            </span>
                                        </div>
                                        {billingPeriod === 'yearly' && (
                                            <p className="mt-1 text-sm text-green-600">
                                                Save $
                                                {Math.round(
                                                    plan.priceMonthly * 12 -
                                                        plan.priceYearly,
                                                )}{' '}
                                                per year
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        asChild
                                        variant={
                                            plan.highlight
                                                ? 'default'
                                                : 'outline'
                                        }
                                        className={`mb-6 w-full ${
                                            plan.highlight
                                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                : 'border-gray-300 hover:bg-gray-100'
                                        }`}
                                        size="lg"
                                    >
                                        <Link
                                            to={plan.ctaLink}
                                            className="group"
                                        >
                                            <span>{plan.cta}</span>
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>

                                <div className="bg-white px-6 pt-2 pb-8 sm:px-8">
                                    <h4 className="mb-4 text-sm font-medium text-gray-900">
                                        What's included:
                                    </h4>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start"
                                            >
                                                <Check
                                                    className={`mr-3 h-5 w-5 flex-shrink-0 ${plan.highlight ? 'text-blue-600' : 'text-gray-400'}`}
                                                />
                                                <span className="text-sm text-gray-600">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Compare Plans */}
            <div className="bg-gray-50 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Compare Plans
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 sm:text-xl">
                            Find the perfect plan for your workflow automation
                            needs
                        </p>
                    </div>

                    {/* Desktop comparison table */}
                    <div className="hidden md:block">
                        <div className="overflow-hidden rounded-lg shadow">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Features
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3.5 text-center text-sm font-semibold text-gray-900"
                                        >
                                            Starter
                                        </th>
                                        <th
                                            scope="col"
                                            className="bg-blue-50 px-6 py-3.5 text-center text-sm font-semibold text-blue-600"
                                        >
                                            Pro
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3.5 text-center text-sm font-semibold text-gray-900"
                                        >
                                            Enterprise
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {features.map((feature) => (
                                        <tr
                                            key={feature.name}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                {feature.name}
                                            </td>
                                            <td className="px-6 py-4 text-center text-sm text-gray-500">
                                                {typeof feature.starter ===
                                                'boolean' ? (
                                                    feature.starter ? (
                                                        <CheckCircle
                                                            className="mx-auto h-5 w-5 text-green-500"
                                                            aria-label="Yes"
                                                        />
                                                    ) : (
                                                        <X
                                                            className="mx-auto h-5 w-5 text-gray-300"
                                                            aria-label="No"
                                                        />
                                                    )
                                                ) : (
                                                    feature.starter
                                                )}
                                            </td>
                                            <td className="bg-blue-50 px-6 py-4 text-center text-sm font-medium text-blue-600">
                                                {typeof feature.pro ===
                                                'boolean' ? (
                                                    feature.pro ? (
                                                        <CheckCircle
                                                            className="mx-auto h-5 w-5 text-blue-600"
                                                            aria-label="Yes"
                                                        />
                                                    ) : (
                                                        <X
                                                            className="mx-auto h-5 w-5 text-gray-300"
                                                            aria-label="No"
                                                        />
                                                    )
                                                ) : (
                                                    feature.pro
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center text-sm text-gray-500">
                                                {typeof feature.enterprise ===
                                                'boolean' ? (
                                                    feature.enterprise ? (
                                                        <CheckCircle
                                                            className="mx-auto h-5 w-5 text-green-500"
                                                            aria-label="Yes"
                                                        />
                                                    ) : (
                                                        <X
                                                            className="mx-auto h-5 w-5 text-gray-300"
                                                            aria-label="No"
                                                        />
                                                    )
                                                ) : (
                                                    feature.enterprise
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Mobile comparison table */}
                    <div className="md:hidden">
                        <div className="overflow-hidden rounded-lg shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Features
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center text-sm font-semibold text-gray-900"
                                            >
                                                Starter
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center text-sm font-semibold text-blue-600"
                                            >
                                                Pro
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {features.map((feature) => (
                                            <tr
                                                key={`mobile-${feature.name}`}
                                                className="hover:bg-gray-50"
                                            >
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                    {feature.name}
                                                </td>
                                                <td className="px-3 py-3 text-center text-sm text-gray-500">
                                                    {typeof feature.starter ===
                                                    'boolean' ? (
                                                        feature.starter ? (
                                                            <CheckCircle
                                                                className="mx-auto h-4 w-4 text-green-500"
                                                                aria-label="Yes"
                                                            />
                                                        ) : (
                                                            <X
                                                                className="mx-auto h-4 w-4 text-gray-300"
                                                                aria-label="No"
                                                            />
                                                        )
                                                    ) : (
                                                        <span className="text-xs">
                                                            {feature.starter}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3 text-center text-sm font-medium text-blue-600">
                                                    {typeof feature.pro ===
                                                    'boolean' ? (
                                                        feature.pro ? (
                                                            <CheckCircle
                                                                className="mx-auto h-4 w-4 text-blue-600"
                                                                aria-label="Yes"
                                                            />
                                                        ) : (
                                                            <X
                                                                className="mx-auto h-4 w-4 text-gray-300"
                                                                aria-label="No"
                                                            />
                                                        )
                                                    ) : (
                                                        <span className="text-xs">
                                                            {feature.pro}
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="border-t border-gray-200 bg-gray-50 p-4 text-center text-sm">
                                <p className="mb-3 font-medium text-gray-700">
                                    Need all features? Check out our Enterprise
                                    plan
                                </p>
                                <Button
                                    asChild
                                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    <Link to="/contact">Contact Sales</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enterprise Section */}
            <div className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl">
                        <div className="relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16 md:p-16">
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white"></div>
                                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white"></div>
                            </div>
                            <div className="relative">
                                <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
                                    <div>
                                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                            Need a custom solution?
                                        </h2>
                                        <p className="mt-4 text-lg text-blue-100">
                                            Our enterprise plan is perfect for
                                            large teams with advanced security
                                            and compliance requirements. Get in
                                            touch to discuss your needs.
                                        </p>
                                        <div className="mt-8 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <Check className="h-6 w-6 text-blue-300" />
                                                </div>
                                                <p className="ml-3 text-base text-blue-100">
                                                    Custom integrations with
                                                    your internal tools
                                                </p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <Check className="h-6 w-6 text-blue-300" />
                                                </div>
                                                <p className="ml-3 text-base text-blue-100">
                                                    Dedicated account management
                                                </p>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <Check className="h-6 w-6 text-blue-300" />
                                                </div>
                                                <p className="ml-3 text-base text-blue-100">
                                                    SSO, SAML, and advanced
                                                    security features
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 lg:mt-0">
                                        <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8">
                                            <h3 className="mb-2 text-lg font-medium text-gray-900">
                                                Get in touch
                                            </h3>
                                            <p className="mb-6 text-sm text-gray-600">
                                                Fill out this form and our team
                                                will contact you within 24
                                                hours.
                                            </p>

                                            <Form {...form}>
                                                <form
                                                    onSubmit={form.handleSubmit(
                                                        onSubmit,
                                                    )}
                                                    className="space-y-4"
                                                >
                                                    <FormField
                                                        control={form.control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>
                                                                    Name
                                                                </FormLabel>
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
                                                                <FormLabel>
                                                                    Email
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="your.email@company.com"
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
                                                                    Company
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
                                                        className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700"
                                                    >
                                                        Contact Sales
                                                    </Button>
                                                </form>
                                            </Form>

                                            <p className="mt-4 text-center text-xs text-gray-500">
                                                We'll never share your
                                                information with third parties.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            What Our Customers Say
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 sm:text-xl">
                            Join thousands of satisfied customers who are saving
                            time with VernisAI
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={initialFadeInAnimation}
                                whileInView={fadeInAnimation}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: shouldReduceMotion ? 0 : index * 0.1,
                                }}
                                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                                className="rounded-xl bg-white p-8 shadow-sm hover:shadow-md"
                            >
                                <div className="mb-6 flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={`${testimonial.name}, ${testimonial.role}`}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    "{testimonial.text}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ
                title="Frequently Asked Questions"
                summary="Everything you need to know about our pricing and plans."
                items={pricingFAQItems}
                variant="light"
                className="py-20"
            />

            {/* CTA Section */}
            <CTAWorkflowAutomation
                variant="gradient"
                description="Start your 14-day free trial today. No credit card required. Cancel anytime."
                showBadge={true}
                buttonText="Start Free Trial"
                showFooterText={true}
                secondaryButton={{
                    text: 'Contact Sales',
                    link: '/contact',
                }}
            />
        </div>
    );
}
