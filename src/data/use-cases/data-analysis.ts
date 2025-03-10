import { UseCase } from '../types/UseCase';

export const dataAnalysisUseCase: UseCase = {
    id: 'data-analysis',
    name: 'Data Analysis',
    shortDescription: 'Analyze and extract insights from data more efficiently',
    iconName: 'BarChart3',
    iconBgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    overview: {
        paragraphs: [
            'Organizations today collect vast amounts of data, but extracting meaningful insights from that data remains challenging and time-consuming. Vernis AI transforms data analysis by automating routine analytical tasks, uncovering hidden patterns, and making advanced analytics accessible to everyone in your organization.',
            'Our AI-powered data analysis capabilities work with your existing data sources and tools to provide faster, deeper insights without requiring specialized data science expertise. From automated reporting to predictive analytics, Vernis AI helps you turn raw data into actionable intelligence.',
        ],
    },
    applications: [
        {
            title: 'Automated Reporting',
            description:
                'Generate comprehensive reports from raw data with visualizations and key insights highlighted.',
            benefit:
                'Save hours of manual report creation while improving clarity and consistency.',
        },
        {
            title: 'Trend Identification',
            description:
                'Automatically detect patterns, anomalies, and trends in large datasets that might be missed manually.',
            benefit:
                'Discover valuable insights that drive strategic decisions.',
        },
        {
            title: 'Data Visualization',
            description:
                'Create clear, interactive visualizations that make complex data understandable at a glance.',
            benefit:
                'Communicate insights effectively to stakeholders at all levels.',
        },
        {
            title: 'Predictive Analytics',
            description:
                'Forecast future trends and outcomes based on historical data and relevant variables.',
            benefit:
                'Make proactive decisions based on likely future scenarios.',
        },
        {
            title: 'Data Cleaning & Preparation',
            description:
                'Automatically clean, normalize, and prepare data for analysis, handling missing values and outliers.',
            benefit:
                'Reduce data preparation time by up to 80% while improving data quality.',
        },
        {
            title: 'Natural Language Queries',
            description:
                'Ask questions about your data in plain language and receive accurate, relevant answers.',
            benefit:
                'Democratize data access for team members without technical expertise.',
        },
    ],
    keyBenefits: [
        'Analyze data 10x faster than traditional methods',
        'Discover insights that would be missed by manual analysis',
        'Make data-driven decisions with greater confidence',
        'Democratize data analysis across your organization',
        'Reduce errors and inconsistencies in reporting',
        'Free up analysts for higher-value strategic work',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Connect your data sources',
                description:
                    'Integrate with databases, spreadsheets, APIs, and other data repositories.',
            },
            {
                title: 'Automated data preparation',
                description:
                    'The system cleans, normalizes, and structures your data for analysis.',
            },
            {
                title: 'Analysis configuration',
                description:
                    "Define the insights you're looking for or let the AI discover patterns automatically.",
            },
            {
                title: 'Insight generation',
                description:
                    'Advanced algorithms analyze the data and identify key findings, trends, and anomalies.',
            },
            {
                title: 'Visualization and reporting',
                description:
                    'Results are presented in clear, actionable formats with explanations in plain language.',
            },
        ],
    },
    featuredCapability: {
        title: 'Conversational Data Analysis',
        description:
            "Vernis AI's conversational interface transforms how you interact with your data:",
        bulletPoints: [
            'Ask questions about your data in natural language',
            'Receive answers with relevant visualizations and explanations',
            'Follow up with additional questions to explore further',
            'Request comparisons, trends, and predictions conversationally',
            'Share insights with colleagues through collaborative analysis',
        ],
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-700',
    },
    cta: {
        title: 'Ready to Transform Your Data Analysis?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced data analysis with Vernis AI.',
    },
};
