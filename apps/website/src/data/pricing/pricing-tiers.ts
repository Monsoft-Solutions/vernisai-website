// Example pricing tiers
export interface PricingTier {
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice: number;
    currency: string;
    features: string[];
    cta: {
        text: string;
        href: string;
    };
    popular?: boolean;
}

export interface PricingFeature {
    name: string;
    description?: string;
    tiers: {
        starter: boolean | string;
        pro: boolean | string;
        team: boolean | string;
    };
}

export const pricingTiers: PricingTier[] = [
    {
        name: 'Starter',
        description:
            'Perfect for individuals and small teams just getting started',
        monthlyPrice: 29,
        annualPrice: 24,
        currency: 'USD',
        features: [
            'Up to 5 workflows',
            'Basic integrations',
            'Community support',
            '1 user',
            '1,000 AI credits/month',
        ],
        cta: {
            text: 'Start free trial',
            href: '/waitlist',
        },
    },
    {
        name: 'Pro',
        description: 'For growing teams that need more power and flexibility',
        monthlyPrice: 79,
        annualPrice: 64,
        currency: 'USD',
        features: [
            '10 workflows',
            'Advanced integrations',
            'Email support',
            '1 user',
            '5,000 AI credits/month',
            'Workflow templates',
            'Advanced analytics',
        ],
        cta: {
            text: 'Start free trial',
            href: '/waitlist',
        },
        popular: true,
    },
    {
        name: 'Team',
        description:
            'For organizations that need advanced security and control',
        monthlyPrice: 299,
        annualPrice: 239,
        currency: 'USD',
        features: [
            'Unlimited workflows',
            'Custom integrations',
            'Dedicated support',
            '5 users',
            '20,000 AI credits/month',
            'SSO & SAML (Coming soon)',
            'Audit logs',
            'Custom training',
        ],
        cta: {
            text: 'Contact sales',
            href: '/contact',
        },
    },
];
