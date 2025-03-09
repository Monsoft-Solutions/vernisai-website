// Import the Action type
import { Action } from '../types/Action';
import { ActionCategory } from '../types/ActionCategory';

// Define the Notifications & Alerts actions
const emailNotificationAction: Action = {
    id: 'email-notification',
    name: 'Email Notifications',
    description: 'Set up automated email alerts and notifications',
    longDescription:
        'Create and manage automated email notifications triggered by specific events or conditions.',
    iconName: 'Mail',
    benefits: [
        'Timely information delivery',
        'Automated communication',
        'Event-based triggers',
        'Customizable content',
    ],
    useCases: [
        'Status updates',
        'Alert systems',
        'Workflow notifications',
        'Customer communication',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const smsAlertAction: Action = {
    id: 'sms-alert',
    name: 'SMS Alerts',
    description: 'Send automated text message alerts for critical events',
    longDescription:
        'Configure and send SMS alerts and notifications triggered by important events or conditions.',
    iconName: 'MessageSquare',
    benefits: [
        'Immediate notification',
        'High visibility alerts',
        'Mobile-friendly communication',
        'Urgent information delivery',
    ],
    useCases: [
        'Critical alerts',
        'Time-sensitive notifications',
        'Emergency communication',
        'Service updates',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const pushNotificationAction: Action = {
    id: 'push-notification',
    name: 'Push Notifications',
    description:
        'Send automated notifications to Slack, Discord and other platforms',
    longDescription:
        'Create and manage push notifications to various messaging and collaboration platforms.',
    iconName: 'Bell',
    benefits: [
        'Real-time team communication',
        'Channel-specific notifications',
        'Integration with workflows',
        'Customizable alerts',
    ],
    useCases: [
        'Team notifications',
        'System alerts',
        'Process updates',
        'Collaboration tools',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const eventDrivenMessagingAction: Action = {
    id: 'event-driven-messaging',
    name: 'Event-driven Messaging',
    description: 'Trigger messages and alerts based on specific events',
    longDescription:
        'Set up automated messaging systems that respond to specific events, triggers, or conditions.',
    iconName: 'Activity',
    benefits: [
        'Automated response system',
        'Event-based communication',
        'Conditional messaging',
        'Process automation',
    ],
    useCases: [
        'System monitoring',
        'Workflow automation',
        'Conditional alerts',
        'Trigger-based communication',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the Notifications & Alerts category
export const notificationsAlertsCategory: ActionCategory = {
    id: 'notifications-alerts',
    name: 'Notifications & Alerts',
    iconName: 'Bell',
    description:
        'Set up notifications and monitoring systems for important events',
    actions: [
        emailNotificationAction,
        smsAlertAction,
        pushNotificationAction,
        eventDrivenMessagingAction,
    ],
};
