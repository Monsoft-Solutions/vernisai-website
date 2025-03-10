import { UseCase } from '../types/UseCase';

export const customerSupportUseCase: UseCase = {
    id: 'customer-support',
    name: 'Customer Support',
    shortDescription:
        'Deliver exceptional support while reducing response times',
    iconName: 'MessageSquare',
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    overview: {
        paragraphs: [
            'Customer support teams face growing pressure to deliver fast, personalized, and accurate responses across multiple channels. Even with the best intentions, businesses struggle with response delays, inconsistent information, and support agent burnout. Vernis AI empowers your support team with intelligent automation that handles routine inquiries while enabling human agents to focus on complex issues.',
            'Our AI customer support solution integrates with your existing tools to understand your products, services, and support history. It can automatically respond to common questions, route complex issues to the right specialists, and ensure consistent information across all channels. The result is faster resolution times, higher customer satisfaction, and more fulfilling work for your support team.',
        ],
    },
    applications: [
        {
            title: 'Instant Response',
            description:
                'Automatically answer common customer questions with personalized responses based on their history and needs.',
            benefit:
                'Reduce first-response time from hours to seconds for many inquiries.',
        },
        {
            title: 'Smart Routing',
            description:
                'Intelligently categorize and route complex issues to the most qualified support agents based on expertise and availability.',
            benefit:
                'Connect customers with the right expertise immediately, avoiding frustrating transfers.',
        },
        {
            title: 'Knowledge Enhancement',
            description:
                'Provide agents with real-time access to relevant product information, customer history, and solution recommendations.',
            benefit:
                'Empower every agent to respond with expert-level knowledge and context.',
        },
        {
            title: 'Multi-channel Support',
            description:
                'Deliver consistent support across email, chat, social media, and phone with unified customer context.',
            benefit:
                'Create seamless customer experiences regardless of communication channel.',
        },
        {
            title: 'Sentiment Analysis',
            description:
                'Detect customer sentiment in real-time and escalate frustrated customers to priority human support.',
            benefit:
                'Prevent negative experiences before they impact customer loyalty.',
        },
        {
            title: 'Support Insights',
            description:
                'Generate actionable insights from support interactions to identify product issues and improvement opportunities.',
            benefit:
                'Transform support from a cost center to a source of product innovation.',
        },
    ],
    keyBenefits: [
        'Reduce average response time by up to 80%',
        'Handle up to 70% of routine inquiries automatically',
        'Improve first-contact resolution rates',
        'Maintain consistent, accurate information across all channels',
        'Reduce support agent turnover and burnout',
        'Scale support capacity without proportional cost increases',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Knowledge integration',
                description:
                    'Connect Vernis AI to your product documentation, knowledge base, and support history.',
            },
            {
                title: 'Channel integration',
                description:
                    'Integrate with your existing support channels including email, chat, social media, and phone systems.',
            },
            {
                title: 'Training and customization',
                description:
                    'Configure automated responses, routing rules, and escalation policies to match your support workflow.',
            },
            {
                title: 'Automated support delivery',
                description:
                    'Deploy AI assistance for instant responses to common inquiries and intelligent routing for complex issues.',
            },
            {
                title: 'Continuous learning',
                description:
                    'The system continuously improves from customer interactions and feedback from your support team.',
            },
        ],
    },
    featuredCapability: {
        title: 'Intelligent Agent Augmentation',
        description:
            'Vernis AI enhances human support agents with powerful capabilities:',
        bulletPoints: [
            'Real-time coaching with suggested responses and resources',
            'Automatic preparation of customer context before conversations',
            'Simultaneous search across knowledge bases during customer interactions',
            'Detection of upsell and cross-sell opportunities based on customer needs',
            'Post-conversation summaries and follow-up recommendations',
        ],
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        textColor: 'text-purple-700',
    },
    cta: {
        title: 'Ready to Transform Your Customer Support?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced customer support with Vernis AI.',
    },
};
