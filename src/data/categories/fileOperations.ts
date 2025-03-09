// Import the Action type
import { Action } from '../types/Action';
import { ActionCategory } from '../types/ActionCategory';

// Define the file operations actions
const fileSystemAction: Action = {
    id: 'filesystem',
    name: 'Filesystem',
    description: 'Secure file operations with configurable access control',
    longDescription:
        'Access and manipulate files on your local system with granular permissions and security controls.',
    iconName: 'FileText',
    benefits: [
        'Secure access to local files',
        'Configurable permissions',
        'Read, write, and search capabilities',
        'Directory navigation',
    ],
    useCases: [
        'Document management',
        'Configuration file editing',
        'Local data processing',
        'File organization',
    ],
    implementation: 'Model Context Protocol',
    source: 'modelcontextprotocol/servers',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const googleDriveAction: Action = {
    id: 'google-drive',
    name: 'Google Drive',
    description: 'File access and search functionality for Google Drive',
    longDescription:
        'Connect to Google Drive to search, read, and manage your documents and files.',
    iconName: 'Cloud',
    benefits: [
        'Access files from anywhere',
        'Powerful search capabilities',
        'Integration with Google Workspace',
        'Secure OAuth authentication',
    ],
    useCases: [
        'Document collaboration',
        'Cloud backup management',
        'Shared file access',
        'Cross-device file synchronization',
    ],
    implementation: 'Model Context Protocol',
    source: 'modelcontextprotocol/servers',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const bearNotesAction: Action = {
    id: 'bear-notes',
    name: 'Bear Notes',
    description: 'Read from your Bear Notes (macOS)',
    longDescription:
        'Access and search through your Bear Notes application on macOS.',
    iconName: 'FileText',
    benefits: [
        'Seamless integration with Bear Notes',
        'Search through your notes',
        'Extract information from notes',
        'macOS native integration',
    ],
    useCases: [
        'Knowledge management',
        'Research assistance',
        'Note organization',
        'Information retrieval',
    ],
    implementation: 'Model Context Protocol',
    source: 'akseyh/bear-mcp-server',
    sourceUrl: 'https://github.com/akseyh/bear-mcp-server',
};

const documentAnalysisAction: Action = {
    id: 'document-analysis',
    name: 'Document Analysis',
    description: 'Extract insights from documents',
    longDescription:
        'Analyze documents to extract key information, summarize content, and identify patterns.',
    iconName: 'Search',
    benefits: [
        'Automated information extraction',
        'Document summarization',
        'Pattern recognition',
        'Multi-format support',
    ],
    useCases: [
        'Contract analysis',
        'Research paper review',
        'Data extraction from reports',
        'Content summarization',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the file operations category
export const fileOperationsCategory: ActionCategory = {
    id: 'file-operations',
    name: 'File Operations',
    iconName: 'FileText',
    description:
        'Access, manage, and analyze files across various storage systems',
    actions: [
        fileSystemAction,
        googleDriveAction,
        bearNotesAction,
        documentAnalysisAction,
    ],
};
