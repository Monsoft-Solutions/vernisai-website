import { UseCase } from '../types/UseCase';

export const knowledgeManagementUseCase: UseCase = {
    id: 'knowledge-management',
    name: 'Knowledge Management',
    shortDescription:
        'Organize, access, and leverage organizational knowledge effectively',
    iconName: 'Library',
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    overview: {
        paragraphs: [
            "Organizations generate vast amounts of valuable knowledge—in documents, emails, meetings, chats, and team members' expertise. But this knowledge is often scattered, unstructured, and difficult to access when needed. Vernis AI transforms knowledge management by making all organizational knowledge instantly searchable, accessible, and actionable.",
            "Our AI-powered knowledge management platform connects to all your data sources, learns from organizational context, and provides intelligent access to the right information at the right time. From answering simple questions to generating complex reports based on internal knowledge, Vernis AI helps you leverage your organization's collective intelligence.",
        ],
    },
    applications: [
        {
            title: 'Intelligent Knowledge Base',
            description:
                'Create a self-organizing knowledge base that automatically categorizes, links, and updates information.',
            benefit:
                'Eliminate manual documentation and organization while improving findability.',
        },
        {
            title: 'Semantic Search',
            description:
                'Find exactly what you need with natural language search that understands concepts, not just keywords.',
            benefit:
                'Reduce search time by 90% while finding more relevant information.',
        },
        {
            title: 'Knowledge Extraction',
            description:
                'Automatically extract insights, processes, and best practices from meetings, emails, and documents.',
            benefit:
                'Capture valuable knowledge that would otherwise remain undocumented.',
        },
        {
            title: 'Expertise Location',
            description:
                'Identify subject matter experts within your organization based on their documented knowledge and contributions.',
            benefit:
                'Connect team members with the right experts to solve problems faster.',
        },
        {
            title: 'Automated Documentation',
            description:
                'Generate comprehensive documentation from code, meetings, processes, and other knowledge sources.',
            benefit:
                'Keep documentation current without the usual maintenance burden.',
        },
        {
            title: 'Knowledge Gaps Analysis',
            description:
                'Identify areas where organizational knowledge is missing, incomplete, or outdated.',
            benefit:
                'Proactively address knowledge gaps before they impact operations.',
        },
    ],
    keyBenefits: [
        'Find information 10x faster with intelligent search',
        'Capture and preserve institutional knowledge automatically',
        'Reduce onboarding time for new employees by 50%',
        'Eliminate knowledge silos across departments',
        'Prevent knowledge loss when employees leave',
        'Make better decisions with access to complete information',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Connect your data sources',
                description:
                    'Integrate with documents, emails, chat platforms, project management tools, and other knowledge repositories.',
            },
            {
                title: 'AI knowledge processing',
                description:
                    'Our system automatically analyzes, categorizes, and links information across all sources.',
            },
            {
                title: 'Secure knowledge access',
                description:
                    'Set up appropriate access controls based on roles, teams, and security requirements.',
            },
            {
                title: 'Natural language interface',
                description:
                    'Access knowledge through conversations, queries, or traditional navigation.',
            },
            {
                title: 'Continuous learning',
                description:
                    'The system improves over time, learning from interactions and new information.',
            },
        ],
    },
    featuredCapability: {
        title: 'Conversational Knowledge Assistant',
        description:
            "Vernis AI provides a conversational interface to your organization's collective knowledge:",
        bulletPoints: [
            'Ask questions in natural language and get accurate, sourced answers',
            'Request summaries of documents, meetings, or entire projects',
            'Generate reports by combining information from multiple sources',
            'Receive proactive suggestions based on your current work context',
            'Collaborate with colleagues through shared knowledge sessions',
        ],
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        textColor: 'text-purple-700',
    },
    cta: {
        title: 'Ready to Transform Your Knowledge Management?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced knowledge management with Vernis AI.',
    },
};
