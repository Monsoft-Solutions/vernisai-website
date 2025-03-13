// Example use cases for different audience segments
export interface UseCaseFeature {
    title: string;
    description: string;
}

export interface UseCase {
    id: string;
    title: string;
    description: string;
    features: UseCaseFeature[];
    image: string;
    ctaText: string;
    ctaLink: string;
}

export const pricingUseCases: UseCase[] = [
    {
        id: 'marketing-teams',
        title: 'For Marketing Teams',
        description:
            'Streamline content creation, campaign management, and analytics reporting with AI-powered automation.',
        features: [
            {
                title: 'Content Creation Acceleration',
                description:
                    'Generate drafts, optimize content, and schedule publications across multiple channels.',
            },
            {
                title: 'Campaign Automation',
                description:
                    'Set up, monitor, and optimize marketing campaigns with minimal manual intervention.',
            },
            {
                title: 'Automated Reporting',
                description:
                    'Generate comprehensive marketing reports in minutes instead of hours.',
            },
        ],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        ctaText: 'See Marketing Solutions',
        ctaLink: '/use-cases/marketing',
    },
    {
        id: 'customer-support',
        title: 'For Customer Support',
        description:
            'Enhance customer satisfaction with faster response times and more accurate support through intelligent automation.',
        features: [
            {
                title: 'Automated Ticket Routing',
                description:
                    'Ensure inquiries reach the right team member instantly based on content and priority.',
            },
            {
                title: 'AI-Powered Responses',
                description:
                    'Generate accurate response drafts for common questions to speed up resolution times.',
            },
            {
                title: 'Knowledge Base Integration',
                description:
                    'Automatically pull relevant information from your knowledge base to assist agents.',
            },
        ],
        image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        ctaText: 'Explore Support Solutions',
        ctaLink: '/use-cases/support',
    },
    {
        id: 'sales-teams',
        title: 'For Sales Teams',
        description:
            'Close more deals with automated follow-ups, intelligent lead scoring, and streamlined sales processes.',
        features: [
            {
                title: 'Automated Follow-ups',
                description:
                    'Never miss a follow-up with intelligent scheduling and personalized messaging.',
            },
            {
                title: 'Lead Prioritization',
                description:
                    'Focus on the most promising leads with AI-powered scoring and insights.',
            },
            {
                title: 'Sales Process Automation',
                description:
                    'Streamline repetitive tasks from prospecting to closing to focus on relationships.',
            },
        ],
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        ctaText: 'Discover Sales Solutions',
        ctaLink: '/use-cases/sales',
    },
];
