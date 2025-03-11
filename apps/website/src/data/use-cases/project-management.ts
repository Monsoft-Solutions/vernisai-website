import { UseCase } from '../types/UseCase';

export const projectManagementUseCase: UseCase = {
    id: 'project-management',
    name: 'Project Management',
    shortDescription:
        'Deliver projects more efficiently with AI-powered planning and execution',
    iconName: 'Kanban',
    iconBgColor: 'bg-rose-100',
    iconColor: 'text-rose-600',
    overview: {
        paragraphs: [
            'Project management involves complex coordination of tasks, resources, timelines, and stakeholders—often leading to information overload, miscommunications, and inefficient processes. Vernis AI transforms project management by providing intelligent assistance for planning, execution, communication, and risk management.',
            "Our AI-powered project management platform integrates with your existing tools to automate routine tasks, provide data-driven insights, and help teams collaborate more effectively. Whether you're managing software development, marketing campaigns, product launches, or any complex initiative, Vernis AI helps you deliver projects more efficiently with fewer resources.",
        ],
    },
    applications: [
        {
            title: 'Intelligent Project Planning',
            description:
                'Generate comprehensive project plans with realistic timelines, resource allocations, and dependency mapping.',
            benefit: 'Create more accurate plans in minutes instead of days.',
        },
        {
            title: 'Automated Progress Tracking',
            description:
                'Automatically track task completion, milestone achievements, and overall project progress.',
            benefit:
                'Maintain real-time visibility without manual status updates.',
        },
        {
            title: 'Risk Identification',
            description:
                'Proactively identify potential risks and bottlenecks before they impact your project.',
            benefit:
                "Address issues early when they're easier and less costly to resolve.",
        },
        {
            title: 'Resource Optimization',
            description:
                'Intelligently allocate team members and resources based on skills, availability, and project requirements.',
            benefit:
                'Maximize productivity while preventing burnout and bottlenecks.',
        },
        {
            title: 'Communication Assistance',
            description:
                'Generate status reports, meeting agendas, and stakeholder updates based on real project data.',
            benefit:
                'Keep everyone informed with minimal time spent on communication.',
        },
        {
            title: 'Decision Support',
            description:
                'Get data-driven recommendations for project decisions and trade-offs.',
            benefit:
                'Make more objective decisions that optimize for project success.',
        },
    ],
    keyBenefits: [
        'Reduce project management overhead by up to 60%',
        'Increase on-time delivery rates by identifying risks early',
        'Improve resource utilization with AI-optimized allocation',
        'Enhance team collaboration through streamlined communication',
        'Make better decisions with data-driven recommendations',
        'Capture institutional knowledge for future projects',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Connect your tools',
                description:
                    'Integrate with your existing project management, communication, and development tools.',
            },
            {
                title: 'Project setup',
                description:
                    'Define project goals, constraints, and team capabilities to establish the foundation.',
            },
            {
                title: 'AI-assisted planning',
                description:
                    'Develop comprehensive project plans with intelligent suggestions for tasks, timelines, and resources.',
            },
            {
                title: 'Execution and monitoring',
                description:
                    'Track progress automatically with AI identifying risks, blockers, and optimization opportunities.',
            },
            {
                title: 'Continuous improvement',
                description:
                    'Learn from each project to improve estimations, resource allocation, and process efficiency over time.',
            },
        ],
    },
    featuredCapability: {
        title: 'Project Intelligence Hub',
        description:
            'Vernis AI creates a central intelligence hub that transforms project management:',
        bulletPoints: [
            'Generate comprehensive status reports in seconds, not hours',
            'Receive early warnings about potential schedule slippages or resource conflicts',
            'Automatically capture and organize project decisions and their context',
            'Get AI-suggested solutions for emerging project challenges',
            'Leverage insights from past projects to improve future planning',
        ],
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200',
        textColor: 'text-rose-700',
    },
    cta: {
        title: 'Ready to Transform Your Project Management?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced project management with Vernis AI.',
    },
};
