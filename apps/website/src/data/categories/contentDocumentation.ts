// Import the Action type
import { Action } from '../types/action';
import { ActionCategory } from '../types/ActionCategory';

// Define the Content & Documentation actions
const documentGenerationAction: Action = {
    id: 'document-generation',
    name: 'Generate Documents',
    description: 'Create documents in Google Docs, Notion and other platforms',
    longDescription:
        'Automate the creation and formatting of documents across various document management platforms.',
    iconName: 'File',
    benefits: [
        'Automated document creation',
        'Consistent formatting',
        'Template-based generation',
        'Multi-platform support',
    ],
    useCases: [
        'Content creation',
        'Documentation management',
        'Template utilization',
        'Knowledge base development',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const reportGenerationAction: Action = {
    id: 'report-automation',
    name: 'Automate Report Generation',
    description: 'Create standardized reports from various data sources',
    longDescription:
        'Automate the generation of reports by pulling data from multiple sources and formatting it consistently.',
    iconName: 'FileText',
    benefits: [
        'Data-driven reporting',
        'Automated data collection',
        'Standardized report formats',
        'Time-saving automation',
    ],
    useCases: [
        'Business reporting',
        'Performance analysis',
        'Compliance documentation',
        'Status updates',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const documentCollaborationAction: Action = {
    id: 'document-collaboration',
    name: 'Document Collaboration',
    description: 'Facilitate team collaboration on shared documents',
    longDescription:
        'Enable and manage collaborative document editing, reviewing, and commenting across teams.',
    iconName: 'Users',
    benefits: [
        'Real-time collaboration',
        'Version control',
        'Comment management',
        'Review workflow',
    ],
    useCases: [
        'Team documentation',
        'Collaborative writing',
        'Document review',
        'Knowledge sharing',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const contentArchivingAction: Action = {
    id: 'content-archiving',
    name: 'Content Archiving and Retrieval',
    description: 'Organize, archive, and retrieve documents efficiently',
    longDescription:
        'Automate the organization, archiving, and retrieval of documents and content across storage systems.',
    iconName: 'Archive',
    benefits: [
        'Organized content storage',
        'Efficient retrieval',
        'Automated archiving',
        'Content categorization',
    ],
    useCases: [
        'Knowledge management',
        'Document organization',
        'Information retrieval',
        'Content preservation',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the Content & Documentation category
export const contentDocumentationCategory: ActionCategory = {
    id: 'content-documentation',
    name: 'Content & Documentation',
    iconName: 'Book',
    description:
        'Automate content creation, publishing, and documentation management',
    actions: [
        documentGenerationAction,
        reportGenerationAction,
        documentCollaborationAction,
        contentArchivingAction,
    ],
};
