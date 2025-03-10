import { UseCase } from '../types/UseCase';

export const emailManagementUseCase: UseCase = {
    id: 'email-management',
    name: 'Email Management',
    shortDescription: 'Take control of your inbox with intelligent automation',
    iconName: 'Mail',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    overview: {
        paragraphs: [
            'Email overload is one of the biggest productivity challenges in modern work life. The average professional spends over 3 hours daily managing emails, with much of that time spent on routine correspondence and organization. Vernis AI transforms how you handle email by intelligently automating sorting, responding, and follow-up tasks.',
            'Our AI email management system learns your communication patterns and preferences to prioritize important messages, draft contextual responses, organize information, and ensure nothing falls through the cracks. Whether you are drowning in customer inquiries, team communications, or personal correspondence, Vernis AI helps you process your inbox more efficiently while improving your response quality.',
        ],
    },
    applications: [
        {
            title: 'Smart Inbox Organization',
            description:
                'Automatically categorize and prioritize incoming emails based on your preferences and past behavior.',
            benefit:
                'Focus on high-value messages first and never miss important communications.',
        },
        {
            title: 'Response Automation',
            description:
                'Generate contextual responses to routine emails that match your communication style and intent.',
            benefit:
                'Handle common inquiries in seconds instead of minutes while maintaining personalization.',
        },
        {
            title: 'Follow-up Tracking',
            description:
                'Automatically track emails requiring follow-up and create reminders based on content and deadlines.',
            benefit:
                'Never drop the ball on important conversations or commitments.',
        },
        {
            title: 'Action Item Extraction',
            description:
                'Identify and catalog action items, deadlines, and commitments embedded in email conversations.',
            benefit:
                'Transform email from an information silo into an organized workflow.',
        },
        {
            title: 'Newsletter Management',
            description:
                'Summarize newsletter content and extract only the most relevant information for your needs.',
            benefit:
                'Stay informed without spending hours reading through promotional content.',
        },
        {
            title: 'Email Decluttering',
            description:
                'Identify low-value emails that can be archived, deleted, or unsubscribed from based on your engagement patterns.',
            benefit:
                'Maintain a clean, focused inbox without manual maintenance.',
        },
    ],
    keyBenefits: [
        'Reduce email processing time by up to 70%',
        'Ensure consistent, high-quality responses even to routine inquiries',
        'Never miss important deadlines or follow-ups',
        'Decrease stress from email overload and inbox chaos',
        'Improve response times to customers and colleagues',
        'Free up mental space for more creative and strategic work',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Connect your email accounts',
                description:
                    'Securely integrate Vernis AI with your email providers through OAuth or secure API connections.',
            },
            {
                title: 'Learning period',
                description:
                    'The system analyzes your email patterns, response styles, and organization preferences over 2-3 weeks.',
            },
            {
                title: 'Configure automation preferences',
                description:
                    'Set your preferences for auto-responses, categorization, and follow-up reminders.',
            },
            {
                title: 'Daily inbox management',
                description:
                    'Receive smart sorting, response suggestions, and follow-up reminders as emails arrive.',
            },
            {
                title: 'Continuous improvement',
                description:
                    'The system refines its understanding of your preferences based on your feedback and changing email patterns.',
            },
        ],
    },
    featuredCapability: {
        title: 'Contextual Response Generation',
        description:
            'Vernis AI generates responses that consider the full context of conversations:',
        bulletPoints: [
            'Analyzes entire email threads for complete context',
            'Incorporates relevant information from previous communications with the sender',
            'References data from linked documents and resources when appropriate',
            'Adapts tone and formality based on your relationship with the recipient',
            'Suggests appropriate next steps based on conversation history',
        ],
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700',
    },
    cta: {
        title: 'Ready to Transform Your Email Experience?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced email management with Vernis AI.',
    },
};
