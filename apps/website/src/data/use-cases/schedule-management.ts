import { UseCase } from '../types/UseCase';

export const scheduleManagementUseCase: UseCase = {
    id: 'schedule-management',
    name: 'Schedule Management',
    shortDescription: 'Optimize your time with intelligent calendar management',
    iconName: 'Calendar',
    iconBgColor: 'bg-amber-100',
    iconColor: 'text-amber-600',
    overview: {
        paragraphs: [
            'Effective time management is critical for productivity, yet the average professional spends hours each week coordinating meetings, rescheduling appointments, and managing their calendar. Vernis AI transforms schedule management by intelligently automating calendar coordination, meeting preparation, and follow-up tasks.',
            'Our AI schedule management solution integrates with your calendar, email, and productivity tools to optimize your time allocation, streamline scheduling processes, and ensure you are always prepared for what comes next. Whether you are juggling client meetings, team coordination, or personal appointments, Vernis AI helps you take control of your time and focus on what matters most.',
        ],
    },
    applications: [
        {
            title: 'Intelligent Scheduling',
            description:
                "Automatically find optimal meeting times based on participants' availability, preferences, and existing commitments.",
            benefit:
                'Eliminate back-and-forth emails and reduce scheduling time by 90%.',
        },
        {
            title: 'Smart Calendar Optimization',
            description:
                'Analyze your calendar patterns to suggest ideal times for focused work, breaks, and productivity-enhancing time blocks.',
            benefit:
                'Create a balanced schedule that maximizes productivity and prevents burnout.',
        },
        {
            title: 'Meeting Preparation',
            description:
                'Automatically compile relevant documents, past conversation notes, and action items before each meeting.',
            benefit:
                'Enter every meeting fully prepared with minimal manual preparation.',
        },
        {
            title: 'Travel Time Estimation',
            description:
                'Intelligently add travel buffer time between meetings based on locations, traffic conditions, and transportation methods.',
            benefit:
                'Avoid rushing between appointments and reduce scheduling stress.',
        },
        {
            title: 'Meeting Follow-ups',
            description:
                'Generate and track meeting summaries, action items, and follow-up tasks automatically.',
            benefit:
                'Ensure nothing falls through the cracks after conversations.',
        },
        {
            title: 'Priority Protection',
            description:
                'Guard your calendar against low-value commitments that conflict with your priorities and goals.',
            benefit:
                'Maintain time for important work despite scheduling pressure.',
        },
    ],
    keyBenefits: [
        'Reduce scheduling time by up to 90%',
        'Decrease meeting overload with smart calendar optimization',
        'Improve meeting preparedness and effectiveness',
        'Ensure consistent follow-through on meeting commitments',
        'Balance workload more effectively across your schedule',
        'Protect time for deep work and high-priority activities',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Calendar integration',
                description:
                    'Connect Vernis AI to your calendar systems, email, and other scheduling tools.',
            },
            {
                title: 'Preference learning',
                description:
                    'The system learns your scheduling preferences, productivity patterns, and priority frameworks.',
            },
            {
                title: 'Scheduling automation',
                description:
                    'Enable AI-powered scheduling assistance for internal and external meeting coordination.',
            },
            {
                title: 'Calendar optimization',
                description:
                    'Receive smart suggestions for time blocking, meeting consolidation, and schedule balancing.',
            },
            {
                title: 'Meeting enhancement',
                description:
                    'Leverage automated preparation materials and follow-up tracking for every important conversation.',
            },
        ],
    },
    featuredCapability: {
        title: 'Dynamic Time Allocation',
        description:
            'Vernis AI helps you adapt your schedule to changing priorities and energy levels:',
        bulletPoints: [
            'Identifies your most productive time periods for different types of work',
            'Suggests schedule adjustments based on deadlines and priority shifts',
            'Protects focus time by clustering meetings and minimizing context switching',
            'Adapts scheduling patterns based on your energy levels and productivity data',
            'Recommends breaks and recovery time to maintain sustainable performance',
        ],
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        textColor: 'text-amber-700',
    },
    cta: {
        title: 'Ready to Transform Your Time Management?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced schedule management with Vernis AI.',
    },
};
