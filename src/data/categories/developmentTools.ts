// Import the Action type
import { Action } from '../types/Action';
import { ActionCategory } from '../types/ActionCategory';

// Define the development tools actions
const githubAction: Action = {
    id: 'github',
    name: 'GitHub',
    description: 'Repository management and API integration',
    longDescription:
        'Interact with GitHub repositories, issues, pull requests, and other GitHub API features.',
    iconName: 'Github',
    benefits: [
        'Complete GitHub API access',
        'Repository management',
        'Issue and PR workflows',
        'Code review assistance',
    ],
    useCases: [
        'Code repository management',
        'Automated issue triage',
        'Pull request reviews',
        'Development workflow automation',
    ],
    implementation: 'Model Context Protocol',
    source: 'modelcontextprotocol/servers',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const gitlabAction: Action = {
    id: 'gitlab',
    name: 'GitLab',
    description: 'Repository management and CI/CD integration',
    longDescription:
        'Access and manage GitLab repositories, issues, merge requests, and CI/CD pipelines.',
    iconName: 'Code',
    benefits: [
        'GitLab API integration',
        'CI/CD pipeline management',
        'Repository operations',
        'Issue tracking',
    ],
    useCases: [
        'DevOps automation',
        'Code management',
        'Pipeline optimization',
        'Project management',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const postgresqlAction: Action = {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'Read-only database access with schema validation',
    longDescription:
        'Connect to PostgreSQL databases to query data with schema validation and security controls.',
    iconName: 'Database',
    benefits: [
        'Secure database access',
        'Schema validation',
        'Complex query support',
        'Read-only safety',
    ],
    useCases: [
        'Data analysis',
        'Report generation',
        'Database exploration',
        'Data visualization preparation',
    ],
    implementation: 'Model Context Protocol',
    source: 'modelcontextprotocol/servers',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const sqliteAction: Action = {
    id: 'sqlite',
    name: 'SQLite',
    description: 'Local database access and querying',
    longDescription:
        'Work with SQLite databases for local data storage and retrieval.',
    iconName: 'Database',
    benefits: [
        'Lightweight database operations',
        'Local data storage',
        'SQL query capabilities',
        'No server required',
    ],
    useCases: [
        'Local application data',
        'Embedded databases',
        'Data analysis',
        'Prototype development',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const codeAnalysisAction: Action = {
    id: 'code-analysis',
    name: 'Code Analysis',
    description: 'Analyze and improve code quality',
    longDescription:
        'Analyze code for quality, security issues, and performance optimizations.',
    iconName: 'Code',
    benefits: [
        'Code quality assessment',
        'Security vulnerability detection',
        'Performance optimization',
        'Best practice enforcement',
    ],
    useCases: [
        'Code reviews',
        'Security audits',
        'Technical debt reduction',
        'Developer assistance',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the development tools category
export const developmentToolsCategory: ActionCategory = {
    id: 'development-tools',
    name: 'Development Tools',
    iconName: 'Github',
    description:
        'Tools for software development, code management, and database operations',
    actions: [
        githubAction,
        gitlabAction,
        postgresqlAction,
        sqliteAction,
        codeAnalysisAction,
    ],
};
