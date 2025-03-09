// Import the Action type
import { Action } from '../types/Action';
import { ActionCategory } from '../types/ActionCategory';

// Define the communication actions
const slackAction: Action = {
    id: 'slack',
    name: 'Slack',
    description: 'Channel management and messaging capabilities',
    longDescription:
        'Interact with Slack workspaces to send messages, manage channels, and access content.',
    iconName: 'MessageSquare',
    benefits: [
        'Automated messaging',
        'Channel management',
        'Team communication',
        'Notification integration',
    ],
    useCases: [
        'Team coordination',
        'Automated updates',
        'Information sharing',
        'Workflow notifications',
    ],
    implementation: 'Model Context Protocol',
    source: 'modelcontextprotocol/servers',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const emailAction: Action = {
    id: 'email',
    name: 'Email',
    description: 'Send, receive, and organize emails',
    longDescription:
        'Manage email communications with capabilities for sending, receiving, and organizing messages.',
    iconName: 'Mail',
    benefits: [
        'Automated email management',
        'Message organization',
        'Email composition assistance',
        'Inbox processing',
    ],
    useCases: [
        'Email automation',
        'Communication management',
        'Newsletter handling',
        'Email response assistance',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const calendarAction: Action = {
    id: 'calendar',
    name: 'Calendar',
    description: 'Schedule management and event creation',
    longDescription:
        'Manage calendars, create events, and organize schedules across calendar platforms.',
    iconName: 'Calendar',
    benefits: [
        'Automated scheduling',
        'Event management',
        'Calendar organization',
        'Time optimization',
    ],
    useCases: [
        'Meeting scheduling',
        'Event planning',
        'Time management',
        'Reminder setting',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const socialMediaAction: Action = {
    id: 'social-media',
    name: 'Social Media',
    description: 'Post and retrieve content from platforms',
    longDescription:
        'Interact with social media platforms to post content and retrieve information.',
    iconName: 'Globe',
    benefits: [
        'Multi-platform support',
        'Content scheduling',
        'Engagement tracking',
        'Automated posting',
    ],
    useCases: [
        'Social media management',
        'Content distribution',
        'Audience engagement',
        'Brand monitoring',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the communication category
export const communicationCategory: ActionCategory = {
    id: 'communication',
    name: 'Communication',
    iconName: 'MessageSquare',
    description: 'Tools for messaging, email, and calendar management',
    actions: [slackAction, emailAction, calendarAction, socialMediaAction],
};
