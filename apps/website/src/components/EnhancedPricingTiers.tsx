import { useState } from 'react';
import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { PricingTier, PricingFeature } from '../data/pricing/pricing-tiers';

interface EnhancedPricingTiersProps {
    title?: string;
    description?: string;
    tiers: PricingTier[];
    features?: PricingFeature[];
    className?: string;
}

export function EnhancedPricingTiers({
    title = 'Simple, transparent pricing',
    description = 'Choose the plan that works best for your team',
    tiers,
    features = [],
    className = '',
}: EnhancedPricingTiersProps) {
    const shouldReduceMotion = useReducedMotion();
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(
        'monthly',
    );

    // Animation settings that respect reduced motion preferences
    const fadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

    const initialFadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 20 };

    const getPrice = (tier: PricingTier) => {
        return billingCycle === 'monthly'
            ? tier.monthlyPrice
            : tier.annualPrice;
    };

    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const renderFeatureValue = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? (
                <Check className="h-5 w-5 text-green-500" />
            ) : (
                <span className="text-gray-300">—</span>
            );
        }
        return <span className="text-sm text-gray-700">{value}</span>;
    };

    return (
        <section className={`w-full py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">{description}</p>
                </div>

                <div className="mx-auto mb-10 flex max-w-xs items-center justify-center rounded-full bg-gray-100 p-1">
                    <button
                        onClick={() => setBillingCycle('monthly')}
                        className={`w-1/2 rounded-full px-4 py-2 text-sm font-medium ${
                            billingCycle === 'monthly'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle('annual')}
                        className={`relative w-1/2 rounded-full px-4 py-2 text-sm font-medium ${
                            billingCycle === 'annual'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        Annual
                        <span className="absolute -top-2 -right-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                            -20%
                        </span>
                    </button>
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            className={`relative flex flex-col overflow-hidden rounded-2xl border ${
                                tier.popular
                                    ? 'border-blue-200 bg-blue-50'
                                    : 'border-gray-200 bg-white'
                            } shadow-sm transition-shadow hover:shadow-md`}
                            initial={initialFadeInAnimation}
                            whileInView={fadeInAnimation}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: shouldReduceMotion ? 0 : index * 0.1,
                            }}
                        >
                            {tier.popular && (
                                <div className="absolute inset-x-0 top-0 bg-blue-600 py-2 text-center text-sm font-medium text-white">
                                    Most Popular
                                </div>
                            )}
                            <div
                                className={`flex flex-1 flex-col p-6 ${
                                    tier.popular ? 'pt-10' : ''
                                }`}
                            >
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {tier.name}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {tier.description}
                                </p>
                                <div className="mt-6">
                                    <p className="flex items-baseline text-gray-900">
                                        <span className="text-5xl font-extrabold tracking-tight">
                                            {formatPrice(
                                                getPrice(tier),
                                                tier.currency,
                                            )}
                                        </span>
                                        <span className="ml-1 text-xl font-semibold">
                                            /
                                            {billingCycle === 'monthly'
                                                ? 'month'
                                                : 'month'}
                                        </span>
                                    </p>
                                    {billingCycle === 'annual' && (
                                        <p className="mt-1 text-sm text-gray-500">
                                            Billed annually (
                                            {formatPrice(
                                                tier.annualPrice * 12,
                                                tier.currency,
                                            )}
                                            /year)
                                        </p>
                                    )}
                                </div>
                                <ul className="mt-6 flex-1 space-y-4">
                                    {tier.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start"
                                        >
                                            <div className="flex-shrink-0">
                                                <Check className="h-5 w-5 text-blue-500" />
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <Button
                                        asChild
                                        className={`w-full justify-center ${
                                            tier.popular
                                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                : 'bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Link to={tier.cta.href}>
                                            {tier.cta.text}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {features.length > 0 && (
                    <motion.div
                        className="mx-auto mt-16 max-w-7xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                        initial={initialFadeInAnimation}
                        whileInView={fadeInAnimation}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                            Features
                                        </th>
                                        {tiers.map((tier) => (
                                            <th
                                                key={tier.name}
                                                className={`px-6 py-4 text-center text-sm font-semibold ${
                                                    tier.popular
                                                        ? 'text-blue-600'
                                                        : 'text-gray-900'
                                                }`}
                                            >
                                                {tier.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {features.map((feature, index) => (
                                        <tr
                                            key={feature.name}
                                            className={
                                                index % 2 === 0
                                                    ? 'bg-gray-50'
                                                    : 'bg-white'
                                            }
                                        >
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {feature.name}
                                                    </p>
                                                    {feature.description && (
                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {
                                                                feature.description
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {renderFeatureValue(
                                                    feature.tiers.starter,
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {renderFeatureValue(
                                                    feature.tiers.pro,
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {renderFeatureValue(
                                                    feature.tiers.team,
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
