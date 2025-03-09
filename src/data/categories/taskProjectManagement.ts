// Import the Action type
import { Action } from '../types/Action';
import { ActionCategory } from '../types/ActionCategory';

// Define the Task & Project Management actions
const taskCreationAction: Action = {
    id: 'task-creation',
    name: 'Create Tasks',
    description:
        'Create and assign tasks in Asana, Trello, Jira and other platforms',
    longDescription:
        'Automate task creation, assignment, and management across various project management tools.',
    iconName: 'CheckSquare',
    benefits: [
        'Streamlined task management',
        'Automated task assignment',
        'Cross-platform integration',
        'Workflow automation',
    ],
    useCases: [
        'Project coordination',
        'Team collaboration',
        'Work distribution',
        'Process automation',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const projectStatusAction: Action = {
    id: 'project-status',
    name: 'Update Project Status',
    description: 'Automate status updates and progress tracking for projects',
    longDescription:
        'Track and update project status, milestones, and progress across project management platforms.',
    iconName: 'GitBranch',
    benefits: [
        'Real-time status updates',
        'Progress visualization',
        'Milestone tracking',
        'Stakeholder communication',
    ],
    useCases: [
        'Project monitoring',
        'Status reporting',
        'Team coordination',
        'Resource allocation',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const deadlineReminderAction: Action = {
    id: 'deadline-reminder',
    name: 'Task Deadline Reminders',
    description: 'Set up automated reminders for approaching deadlines',
    longDescription:
        'Create and manage automated reminders and notifications for task and project deadlines.',
    iconName: 'Clock',
    benefits: [
        'Deadline adherence',
        'Proactive notifications',
        'Time management',
        'Priority awareness',
    ],
    useCases: [
        'Project timeline management',
        'Deadline compliance',
        'Team accountability',
        'Workload planning',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const timeTrackingAction: Action = {
    id: 'time-tracking',
    name: 'Time Tracking Integration',
    description: 'Track time spent on tasks and projects automatically',
    longDescription:
        'Integrate with time tracking tools to monitor and record time spent on various tasks and projects.',
    iconName: 'Watch',
    benefits: [
        'Accurate time recording',
        'Productivity analysis',
        'Billing automation',
        'Resource allocation',
    ],
    useCases: [
        'Billable hours tracking',
        'Project costing',
        'Productivity measurement',
        'Resource planning',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the Task & Project Management category
export const taskProjectManagementCategory: ActionCategory = {
    id: 'task-project-management',
    name: 'Task & Project Management',
    iconName: 'Clipboard',
    description:
        'Streamline task assignment, project tracking, and productivity',
    actions: [
        taskCreationAction,
        projectStatusAction,
        deadlineReminderAction,
        timeTrackingAction,
    ],
};
