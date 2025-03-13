// Example feature comparison
export interface PricingFeature {
    name: string;
    description?: string;
    tiers: {
        starter: boolean | string;
        pro: boolean | string;
        team: boolean | string;
    };
}

export const featureComparison: PricingFeature[] = [
    {
        name: 'Workflows',
        description: 'Create automated sequences of actions',
        tiers: {
            starter: 'Up to 5',
            pro: '10',
            team: 'Unlimited',
        },
    },
    {
        name: 'Users',
        tiers: {
            starter: '1',
            pro: '1',
            team: '5',
        },
    },
    {
        name: 'AI Credits',
        description: 'Used for AI-powered features',
        tiers: {
            starter: '1,000/month',
            pro: '5,000/month',
            team: '20,000/month',
        },
    },
    {
        name: 'Integrations',
        tiers: {
            starter: 'Basic',
            pro: 'Advanced',
            team: 'Custom',
        },
    },
    {
        name: 'Support',
        tiers: {
            starter: 'Community',
            pro: 'Email',
            team: 'Dedicated',
        },
    },
    {
        name: 'SSO & SAML',
        tiers: {
            starter: false,
            pro: false,
            team: 'Coming soon',
        },
    },
    {
        name: 'Audit Logs',
        tiers: {
            starter: false,
            pro: false,
            team: true,
        },
    },
    {
        name: 'Custom Training',
        tiers: {
            starter: false,
            pro: false,
            team: true,
        },
    },
    {
        name: 'Workflow Templates',
        tiers: {
            starter: false,
            pro: true,
            team: true,
        },
    },
    {
        name: 'Advanced Analytics',
        tiers: {
            starter: false,
            pro: true,
            team: true,
        },
    },
];
