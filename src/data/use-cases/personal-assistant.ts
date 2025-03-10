import { UseCase } from '../types/UseCase';

export const personalAssistantUseCase: UseCase = {
    id: 'personal-assistant',
    name: 'Personal Assistant',
    shortDescription: 'Streamline your daily tasks and reclaim your time',
    iconName: 'UserCheck',
    iconBgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    overview: {
        paragraphs: [
            'Modern life demands juggling multiple responsibilities, communications, and information sources—leaving little time for focused work and personal priorities. Vernis AI transforms personal productivity by serving as an intelligent assistant that learns your preferences, automates routine tasks, and helps you manage information overload.',
            "Our AI personal assistant integrates with your digital life to organize communications, schedule management, information retrieval, and decision support. Whether you're a busy professional, entrepreneur, or simply seeking to reclaim time for what matters most, Vernis AI helps you work smarter and accomplish more with less stress.",
        ],
    },
    applications: [
        {
            title: 'Email Management',
            description:
                'Automatically categorize, summarize, and draft responses to emails based on your communication patterns.',
            benefit:
                'Reduce email processing time by up to 75% while improving response quality.',
        },
        {
            title: 'Smart Scheduling',
            description:
                'Intelligently manage your calendar with automated scheduling, prep time allocation, and travel buffer estimation.',
            benefit:
                'Eliminate scheduling conflicts and create realistic, balanced daily agendas.',
        },
        {
            title: 'Information Synthesis',
            description:
                'Collect, organize, and summarize information from multiple sources based on your specific needs.',
            benefit:
                'Make better-informed decisions without hours of research and reading.',
        },
        {
            title: 'Task Prioritization',
            description:
                'Get intelligent recommendations on task prioritization based on deadlines, importance, and your work patterns.',
            benefit:
                'Focus your energy on high-impact activities aligned with your goals.',
        },
        {
            title: 'Meeting Preparation',
            description:
                'Automatically prepare briefing notes with relevant context and history before each meeting.',
            benefit:
                'Enter every conversation fully prepared with minimal preparation time.',
        },
        {
            title: 'Digital Life Organization',
            description:
                'Organize files, notes, messages, and commitments across platforms into a coherent system.',
            benefit:
                'Eliminate time wasted searching for information or tracking commitments.',
        },
    ],
    keyBenefits: [
        'Reclaim 2+ hours daily from routine tasks and information management',
        'Reduce decision fatigue through intelligent prioritization',
        'Never miss important details or commitments',
        'Maintain consistent follow-through on projects and relationships',
        'Reduce stress by eliminating information overload',
        'Create more time for deep work and personal priorities',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Connect your digital ecosystem',
                description:
                    'Integrate with your email, calendar, files, notes, and messaging platforms through secure connections.',
            },
            {
                title: 'Personalization phase',
                description:
                    'The system learns your preferences, communication style, and work patterns through observation and feedback.',
            },
            {
                title: 'Set your priorities',
                description:
                    'Define your goals, important relationships, and areas where you most need assistance.',
            },
            {
                title: 'Daily intelligent support',
                description:
                    'Receive proactive assistance with email, scheduling, information management, and task prioritization.',
            },
            {
                title: 'Continuous improvement',
                description:
                    'The system adapts to your feedback and evolving needs, becoming increasingly valuable over time.',
            },
        ],
    },
    featuredCapability: {
        title: 'Context-Aware Assistance',
        description:
            'Vernis AI maintains awareness of your full context to provide more intelligent support:',
        bulletPoints: [
            'Tracks commitments across conversations and follows up automatically',
            'Connects related information from different sources when you need it',
            'Adjusts recommendations based on your current workload and energy patterns',
            "Identifies knowledge you'll need for upcoming meetings and decisions",
            'Protects your time by intelligently managing interruptions and notifications',
        ],
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200',
        textColor: 'text-indigo-700',
    },
    cta: {
        title: 'Ready to Transform Your Personal Productivity?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced personal assistance with Vernis AI.',
    },
};
