// Import the Action type
import { Action } from '../types/Action';
import { ActionCategory } from '../types/ActionCategory';

// Define the AI & Data actions
const memoryAction: Action = {
    id: 'memory',
    name: 'Memory',
    description: 'A persistent memory system based on knowledge graphs',
    longDescription:
        'Store and retrieve information using a persistent memory system based on knowledge graphs.',
    iconName: 'Database',
    benefits: [
        'Persistent information storage',
        'Knowledge graph structure',
        'Contextual retrieval',
        'Long-term memory',
    ],
    useCases: [
        'Personal knowledge management',
        'Contextual assistance',
        'Information organization',
        'Learning enhancement',
    ],
    implementation: 'Model Context Protocol',
    source: 'modelcontextprotocol/servers',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const wolframAlphaAction: Action = {
    id: 'wolfram-alpha',
    name: 'Wolfram Alpha',
    description: 'Query computational knowledge engine',
    longDescription:
        'Access the Wolfram Alpha computational knowledge engine for answers to factual queries.',
    iconName: 'Search',
    benefits: [
        'Computational knowledge access',
        'Mathematical problem-solving',
        'Data-driven answers',
        'Scientific information',
    ],
    useCases: [
        'Research assistance',
        'Mathematical calculations',
        'Scientific inquiry',
        'Fact verification',
    ],
    implementation: 'Model Context Protocol',
    source: 'SecretiveShell/MCP-wolfram-alpha',
    sourceUrl: 'https://github.com/SecretiveShell/MCP-wolfram-alpha',
};

const amazonBedrockAction: Action = {
    id: 'amazon-bedrock',
    name: 'Amazon Bedrock',
    description: 'Access Nova Canvas for image generation',
    longDescription:
        "Generate images using Amazon Bedrock's Nova Canvas model.",
    iconName: 'Image',
    benefits: [
        'High-quality image generation',
        'AWS integration',
        'Customizable outputs',
        'Scalable processing',
    ],
    useCases: [
        'Creative content generation',
        'Visual design assistance',
        'Concept visualization',
        'Marketing asset creation',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const vegaliteAction: Action = {
    id: 'vegalite',
    name: 'VegaLite',
    description: 'Generate data visualizations from fetched data',
    longDescription:
        'Create data visualizations using the VegaLite format from various data sources.',
    iconName: 'BarChart2',
    benefits: [
        'Dynamic visualization creation',
        'Data-driven charts',
        'Multiple chart types',
        'Interactive elements',
    ],
    useCases: [
        'Data analysis',
        'Report generation',
        'Trend visualization',
        'Information presentation',
    ],
    implementation: 'Model Context Protocol',
    source: 'isaacwasserman/mcp-vegalite-server',
    sourceUrl: 'https://github.com/isaacwasserman/mcp-vegalite-server',
};

const bitcoinAction: Action = {
    id: 'bitcoin',
    name: 'Bitcoin',
    description: 'Generate keys, validate addresses, query blockchain',
    longDescription:
        'Interact with Bitcoin blockchain to generate keys, validate addresses, and query transaction data.',
    iconName: 'Lock',
    benefits: [
        'Secure key generation',
        'Address validation',
        'Blockchain querying',
        'Transaction analysis',
    ],
    useCases: [
        'Cryptocurrency management',
        'Blockchain analysis',
        'Transaction verification',
        'Wallet management',
    ],
    implementation: 'Model Context Protocol',
    source: 'AbdelStark/bitcoin-mcp',
    sourceUrl: 'https://github.com/AbdelStark/bitcoin-mcp',
};

// Create the AI & Data category
export const aiDataCategory: ActionCategory = {
    id: 'ai-data',
    name: 'AI & Data',
    iconName: 'Cpu',
    description: 'AI tools, data visualization, and knowledge management',
    actions: [
        memoryAction,
        wolframAlphaAction,
        amazonBedrockAction,
        vegaliteAction,
        bitcoinAction,
    ],
};
