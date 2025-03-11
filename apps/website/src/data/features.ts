// Define feature types
export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface FeatureDetail extends Feature {
    longDescription: string;
    benefits: string[];
    useCases: string[];
}

// Define our features
export const features: Feature[] = [
    {
        id: 'ai-assistant',
        title: 'AI Assistant',
        description:
            'Intelligent AI assistant that helps you with your daily tasks and questions.',
        icon: '🤖',
    },
    {
        id: 'document-analysis',
        title: 'Document Analysis',
        description:
            'Analyze and extract insights from your documents with advanced AI technology.',
        icon: '📄',
    },
    {
        id: 'data-visualization',
        title: 'Data Visualization',
        description:
            'Transform complex data into clear, actionable visualizations.',
        icon: '📊',
    },
    {
        id: 'workflow-automation',
        title: 'Workflow Automation',
        description:
            'Automate repetitive tasks and streamline your business processes.',
        icon: '⚙️',
    },
];

// Define detailed feature information
export const featureDetails: Record<string, FeatureDetail> = {
    'ai-assistant': {
        id: 'ai-assistant',
        title: 'AI Assistant',
        description:
            'Our intelligent AI assistant helps you with your daily tasks and questions.',
        icon: '🤖',
        longDescription: `
      The VernisAI AI Assistant is designed to be your personal productivity partner. 
      Using advanced natural language processing and machine learning algorithms, 
      our assistant can understand complex queries, provide accurate responses, 
      and learn from your interactions to become more personalized over time.
    `,
        benefits: [
            'Available 24/7 to answer your questions',
            'Learns from your interactions to provide personalized assistance',
            'Integrates with your existing tools and workflows',
            'Handles complex queries with contextual understanding',
            'Continuously improves with regular updates and enhancements',
        ],
        useCases: [
            'Customer support automation',
            'Personal productivity assistant',
            'Research and information gathering',
            'Meeting scheduling and management',
            'Task prioritization and reminders',
        ],
    },
    'document-analysis': {
        id: 'document-analysis',
        title: 'Document Analysis',
        description:
            'Analyze and extract insights from your documents with advanced AI technology.',
        icon: '📄',
        longDescription: `
      Our Document Analysis feature uses cutting-edge AI to extract valuable insights from your documents.
      Whether you're dealing with contracts, reports, or research papers, our system can identify key information,
      summarize content, and help you make informed decisions faster.
    `,
        benefits: [
            'Extract key information from documents automatically',
            'Generate comprehensive summaries of long documents',
            'Identify patterns and trends across multiple documents',
            'Compare and contrast different documents efficiently',
            'Save hours of manual document review time',
        ],
        useCases: [
            'Legal contract analysis',
            'Research paper review',
            'Financial report analysis',
            'Medical record processing',
            'Compliance document verification',
        ],
    },
    'data-visualization': {
        id: 'data-visualization',
        title: 'Data Visualization',
        description:
            'Transform complex data into clear, actionable visualizations.',
        icon: '📊',
        longDescription: `
      Our Data Visualization tools transform complex datasets into clear, intuitive visual representations.
      Make better decisions with interactive charts, graphs, and dashboards that reveal patterns and insights
      that might otherwise remain hidden in raw data.
    `,
        benefits: [
            'Convert complex data into intuitive visual formats',
            'Create interactive dashboards for real-time monitoring',
            'Customize visualizations to match your specific needs',
            'Share insights easily with stakeholders',
            'Make data-driven decisions with confidence',
        ],
        useCases: [
            'Business intelligence dashboards',
            'Sales and marketing performance tracking',
            'Financial trend analysis',
            'Project progress monitoring',
            'Resource allocation optimization',
        ],
    },
    'workflow-automation': {
        id: 'workflow-automation',
        title: 'Workflow Automation',
        description:
            'Automate repetitive tasks and streamline your business processes.',
        icon: '⚙️',
        longDescription: `
      Our Workflow Automation feature helps you streamline operations by automating repetitive tasks.
      Build custom workflows without coding, connect your favorite tools, and let our AI handle the routine
      work so you can focus on what matters most to your business.
    `,
        benefits: [
            'Eliminate repetitive manual tasks',
            'Reduce human error in routine processes',
            'Increase team productivity and focus',
            'Create consistent, reliable workflows',
            'Scale operations without proportionally increasing workload',
        ],
        useCases: [
            'Customer onboarding processes',
            'Approval workflows',
            'Data entry and validation',
            'Report generation and distribution',
            'Cross-platform data synchronization',
        ],
    },
};
