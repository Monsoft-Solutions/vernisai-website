import { ValueMetric } from '@/types/metrics';

// Example value metrics for different plans
export const starterPlanMetrics: ValueMetric[] = [
    {
        label: 'Time Saved Weekly',
        value: '5+ Hours',
        description:
            'Automate repetitive tasks and reclaim valuable time for strategic work',
        icon: 'time',
    },
    {
        label: 'Productivity Increase',
        value: '23%',
        description:
            'Our Starter users report significant productivity gains within the first month',
        icon: 'performance',
    },
    {
        label: 'ROI',
        value: '2.7x',
        description:
            'Average return on investment for small businesses using our Starter plan',
        icon: 'money',
    },
];

export const proPlanMetrics: ValueMetric[] = [
    {
        label: 'Time Saved Weekly',
        value: '15+ Hours',
        description:
            'Pro users save 3x more time than Starter users with advanced automation capabilities',
        icon: 'time',
    },
    {
        label: 'Productivity Increase',
        value: '42%',
        description:
            'Teams using our Pro plan report nearly double the productivity gains of Starter users',
        icon: 'performance',
    },
    {
        label: 'ROI',
        value: '4.3x',
        description:
            'Average return on investment for businesses using our Pro plan',
        icon: 'money',
    },
];

export const enterprisePlanMetrics: ValueMetric[] = [
    {
        label: 'Time Saved Weekly',
        value: '30+ Hours',
        description:
            'Enterprise-level automation delivers maximum time savings across your organization',
        icon: 'time',
    },
    {
        label: 'Productivity Increase',
        value: '68%',
        description:
            'Enterprise customers experience the highest productivity gains with custom workflows',
        icon: 'performance',
    },
    {
        label: 'ROI',
        value: '6.8x',
        description:
            'Average return on investment for organizations using our Enterprise plan',
        icon: 'money',
    },
];

// Define display names for use cases
export const useCaseLabels: Record<string, string> = {
    marketing: 'Marketing Teams',
    sales: 'Sales Teams',
    support: 'Customer Support',
    email: 'Email Management',
    research: 'Research & Analysis',
    social: 'Social Media Management',
};

// All use case metrics combined
export const useCaseMetrics: Record<string, ValueMetric[]> = {
    // Industry-specific metrics
    marketing: [
        {
            label: 'Content Creation Speed',
            value: '+75%',
            description:
                'Marketing teams create content faster with AI-powered automation',
            icon: 'performance',
        },
        {
            label: 'Campaign Management',
            value: '4x Faster',
            description:
                'Launch and manage marketing campaigns in a fraction of the time',
            icon: 'time',
        },
        {
            label: 'Reporting Time',
            value: '-82%',
            description:
                'Dramatically reduce time spent on creating marketing reports',
            icon: 'time',
        },
    ],
    sales: [
        {
            label: 'Lead Response Time',
            value: '-68%',
            description: 'Respond to leads faster with automated workflows',
            icon: 'time',
        },
        {
            label: 'Deal Closure Rate',
            value: '+32%',
            description:
                'Improve deal closure rates with better follow-up and engagement',
            icon: 'growth',
        },
        {
            label: 'CRM Data Quality',
            value: '+87%',
            description:
                'Maintain cleaner CRM data with automated entry and validation',
            icon: 'performance',
        },
    ],
    support: [
        {
            label: 'First Response Time',
            value: '-74%',
            description:
                'Dramatically reduce time to first response for customer inquiries',
            icon: 'time',
        },
        {
            label: 'Ticket Resolution',
            value: '2.3x Faster',
            description:
                'Resolve support tickets more than twice as fast with AI assistance',
            icon: 'performance',
        },
        {
            label: 'Customer Satisfaction',
            value: '+41%',
            description:
                'Improve CSAT scores with faster, more accurate support',
            icon: 'users',
        },
    ],
    // Additional use case metrics
    email: [
        {
            label: 'Email Processing Time',
            value: '-65%',
            description:
                'Reduce time spent managing emails with smart automation',
            icon: 'time',
        },
        {
            label: 'Response Rate',
            value: '+42%',
            description: 'Improve email response rates with timely follow-ups',
            icon: 'performance',
        },
        {
            label: 'Inbox Organization',
            value: '95%',
            description:
                'Keep your inbox organized with automatic categorization',
            icon: 'performance',
        },
    ],
    research: [
        {
            label: 'Research Speed',
            value: '3x Faster',
            description:
                'Accelerate research with AI-powered information gathering',
            icon: 'time',
        },
        {
            label: 'Data Analysis',
            value: '+78%',
            description:
                'Improve data analysis accuracy with automated processing',
            icon: 'performance',
        },
        {
            label: 'Knowledge Retention',
            value: '+85%',
            description: 'Better retain and organize research findings',
            icon: 'growth',
        },
    ],
    social: [
        {
            label: 'Content Creation',
            value: '4x Faster',
            description:
                'Create social media content in a fraction of the time',
            icon: 'time',
        },
        {
            label: 'Engagement Rate',
            value: '+53%',
            description: 'Increase engagement with optimized posting schedules',
            icon: 'users',
        },
        {
            label: 'Audience Growth',
            value: '+67%',
            description:
                'Grow your audience faster with consistent, quality content',
            icon: 'growth',
        },
    ],
};

// For backward compatibility
export const industryMetrics = {
    marketing: useCaseMetrics.marketing,
    sales: useCaseMetrics.sales,
    support: useCaseMetrics.support,
};
