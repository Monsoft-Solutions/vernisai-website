import { UseCase } from '../types/UseCase';

export const socialMediaManagementUseCase: UseCase = {
    id: 'social-media-management',
    name: 'Social Media Management',
    shortDescription:
        'Streamline content creation and engagement across platforms',
    iconName: 'Share2',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    overview: {
        paragraphs: [
            'Managing social media effectively requires consistent content creation, engagement, and analytics across multiple platforms—a time-consuming process for individuals and teams. Vernis AI transforms social media management by automating routine tasks and enhancing creative processes.',
            'Our AI tools help you generate platform-optimized content, schedule posts intelligently, respond to engagement efficiently, and analyze performance to continuously improve your social media strategy. With Vernis AI, you can maintain an active, engaging presence across all platforms while reducing the time investment required.',
        ],
    },
    applications: [
        {
            title: 'Content Calendar Generation',
            description:
                'Automatically create content calendars based on industry trends, audience engagement patterns, and your marketing goals.',
            benefit:
                'Maintain consistent posting schedules without the weekly planning burden.',
        },
        {
            title: 'Platform-Specific Content',
            description:
                'Transform core ideas into platform-optimized content for Instagram, Twitter, LinkedIn, TikTok, and more.',
            benefit:
                "Maximize engagement by tailoring content to each platform's unique format and audience.",
        },
        {
            title: 'Comment Management',
            description:
                'Automatically categorize, prioritize, and draft responses to comments across all platforms.',
            benefit:
                'Increase engagement while saving hours of manual comment management.',
        },
        {
            title: 'Hashtag Optimization',
            description:
                'Generate and analyze optimal hashtag combinations for maximum reach and engagement.',
            benefit:
                'Improve content discovery without extensive hashtag research.',
        },
        {
            title: 'Trend Monitoring',
            description:
                'Identify and alert you to relevant trending topics and conversations in your industry.',
            benefit:
                'Stay relevant by joining conversations at the optimal moment.',
        },
        {
            title: 'Performance Analytics',
            description:
                'Generate insights from cross-platform performance data with actionable recommendations.',
            benefit:
                'Continuously improve your social strategy based on real engagement data.',
        },
    ],
    keyBenefits: [
        'Reduce social media management time by up to 70%',
        'Maintain consistent posting across all platforms',
        'Generate engaging, platform-optimized content at scale',
        'Respond to audience interactions more efficiently',
        'Identify and capitalize on trending topics in real-time',
        'Make data-driven decisions to continuously improve performance',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Connect your accounts',
                description:
                    'Integrate your social media accounts through secure API connections.',
            },
            {
                title: 'Define your brand voice',
                description:
                    'Upload examples of your content to help the AI understand and replicate your unique style.',
            },
            {
                title: 'Set your strategy',
                description:
                    'Specify your goals, target audience, and content themes for each platform.',
            },
            {
                title: 'Generate and schedule content',
                description:
                    'Create platform-specific content and schedule it for optimal posting times.',
            },
            {
                title: 'Monitor and engage',
                description:
                    'Use AI-powered tools to manage interactions and respond to comments efficiently.',
            },
        ],
    },
    featuredCapability: {
        title: 'Content Repurposing Engine',
        description:
            'Vernis AI can automatically transform a single piece of content into multiple platform-specific formats:',
        bulletPoints: [
            'Turn blog posts into engaging Twitter threads',
            'Create Instagram carousels from long-form content',
            'Generate short video scripts for TikTok or Reels',
            'Design LinkedIn articles from existing materials',
            'Produce audiograms for podcast snippets',
        ],
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700',
    },
    cta: {
        title: 'Ready to Transform Your Social Media Management?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced social media with Vernis AI.',
    },
};
