import { UseCase } from '../types/UseCase';

export const contentCreationUseCase: UseCase = {
    id: 'content-creation',
    name: 'Content Creation',
    shortDescription: 'Generate and optimize various types of content faster',
    iconName: 'FileText',
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    overview: {
        paragraphs: [
            'Content creation is often one of the most time-consuming aspects of marketing, communication, and education. Vernis AI transforms this process by helping you generate high-quality content in a fraction of the time it would take manually.',
            "Our AI doesn't just create generic content—it learns your brand voice, understands your audience, and produces material that resonates with your specific goals. Whether you need blog posts, social media content, marketing copy, or educational materials, Vernis AI helps you create more content, more consistently, without sacrificing quality.",
        ],
    },
    applications: [
        {
            title: 'Blog Posts & Articles',
            description:
                'Generate well-structured blog posts and articles on any topic with proper research and citations.',
            benefit:
                "Publish content consistently without writer's block or extensive research time.",
        },
        {
            title: 'Social Media Content',
            description:
                'Create engaging posts, captions, and hashtags optimized for different social platforms.',
            benefit:
                'Maintain an active social presence with less time investment.',
        },
        {
            title: 'Marketing Copy',
            description:
                'Generate compelling ad copy, email campaigns, and landing page content that converts.',
            benefit:
                'Improve marketing effectiveness with persuasive, targeted messaging.',
        },
        {
            title: 'Product Descriptions',
            description:
                'Create unique, SEO-friendly descriptions that highlight key features and benefits.',
            benefit:
                'Scale product listings without sacrificing quality or uniqueness.',
        },
        {
            title: 'Video Scripts',
            description:
                'Develop structured scripts for tutorials, explainer videos, and promotional content.',
            benefit: 'Streamline video production with ready-to-film scripts.',
        },
        {
            title: 'Content Optimization',
            description:
                'Refine existing content for clarity, engagement, and SEO performance.',
            benefit:
                'Maximize the impact of your content with data-driven improvements.',
        },
    ],
    keyBenefits: [
        'Create content 5x faster than traditional methods',
        'Maintain consistent brand voice across all content types',
        'Scale content production without proportionally increasing costs',
        'Overcome creative blocks with AI-generated ideas and outlines',
        'Optimize content for specific platforms and audience segments',
        'Free up creative professionals for higher-value strategic work',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Define your content needs',
                description:
                    'Specify the type of content, target audience, tone, and key points you want to address.',
            },
            {
                title: 'Train on your brand voice',
                description:
                    'Upload examples of your existing content to help the AI understand and replicate your unique style.',
            },
            {
                title: 'Generate content',
                description:
                    'Use our intuitive interface to create first drafts, outlines, or complete pieces based on your specifications.',
            },
            {
                title: 'Review and refine',
                description:
                    'Edit the AI-generated content with our collaborative tools to ensure it meets your exact requirements.',
            },
            {
                title: 'Optimize and distribute',
                description:
                    'Use built-in tools to optimize content for SEO, readability, and engagement before publishing.',
            },
        ],
    },
    featuredCapability: {
        title: 'Multi-Format Content Generation',
        description:
            'Vernis AI can transform a single piece of content into multiple formats to maximize your reach:',
        bulletPoints: [
            'Convert blog posts into social media threads',
            'Transform articles into presentation slides',
            'Create video scripts from written content',
            'Generate email newsletters from longer content pieces',
            'Produce infographics from data-heavy articles',
        ],
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700',
    },
    cta: {
        title: 'Ready to Transform Your Content Creation?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced content creation with Vernis AI.',
    },
};
