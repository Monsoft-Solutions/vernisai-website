// Import the Action type
import { Action } from '../types/action';
import { ActionCategory } from '../types/ActionCategory';

// Define the Marketing & Social Media actions
const socialMediaSchedulerAction: Action = {
    id: 'social-media-scheduler',
    name: 'Schedule Social Media Posts',
    description:
        'Schedule and automate posts across Twitter, Facebook, LinkedIn',
    longDescription:
        'Plan and schedule social media content across multiple platforms with automated posting capabilities.',
    iconName: 'Share2',
    benefits: [
        'Consistent social media presence',
        'Time-saving automation',
        'Cross-platform publishing',
        'Content calendar management',
    ],
    useCases: [
        'Marketing campaigns',
        'Brand awareness',
        'Content distribution',
        'Audience engagement',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const blogPublishingAction: Action = {
    id: 'blog-publishing',
    name: 'Publish Blog Posts',
    description:
        'Publish and manage content on WordPress, Medium and other platforms',
    longDescription:
        'Create, edit, and publish blog posts across various content management systems and blogging platforms.',
    iconName: 'FileText',
    benefits: [
        'Streamlined publishing workflow',
        'Content management',
        'Multi-platform distribution',
        'SEO optimization',
    ],
    useCases: [
        'Content marketing',
        'Thought leadership',
        'Brand storytelling',
        'Knowledge sharing',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const analyticsTrackingAction: Action = {
    id: 'analytics-tracking',
    name: 'Track Analytics and Metrics',
    description:
        'Monitor performance with Google Analytics, Meta Insights and more',
    longDescription:
        'Track and analyze marketing metrics and performance indicators across various analytics platforms.',
    iconName: 'BarChart',
    benefits: [
        'Data-driven decision making',
        'Performance monitoring',
        'Campaign optimization',
        'ROI measurement',
    ],
    useCases: [
        'Marketing performance analysis',
        'Audience insights',
        'Campaign tracking',
        'Conversion optimization',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const emailCampaignAction: Action = {
    id: 'email-campaign',
    name: 'Automate Email Campaigns',
    description:
        'Create and manage email campaigns with MailChimp, ActiveCampaign',
    longDescription:
        'Design, schedule, and automate email marketing campaigns across various email marketing platforms.',
    iconName: 'Mail',
    benefits: [
        'Automated email sequences',
        'Subscriber management',
        'Campaign analytics',
        'Personalized messaging',
    ],
    useCases: [
        'Lead nurturing',
        'Customer engagement',
        'Product announcements',
        'Newsletter distribution',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the Marketing & Social Media category
export const marketingSocialMediaCategory: ActionCategory = {
    id: 'marketing-social-media',
    name: 'Marketing & Social Media',
    iconName: 'Share2',
    description:
        'Tools to automate digital marketing, social media posting, and content scheduling',
    actions: [
        socialMediaSchedulerAction,
        blogPublishingAction,
        analyticsTrackingAction,
        emailCampaignAction,
    ],
};
