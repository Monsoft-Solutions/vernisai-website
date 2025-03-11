// Import the Action type
import { Action } from '../types/action';
import { ActionCategory } from '../types/ActionCategory';

// Define the Analytics & Reporting actions
const reportGenerationAction: Action = {
    id: 'report-generation',
    name: 'Generate Reports',
    description:
        'Create automated reports from Google Analytics, Power BI and other sources',
    longDescription:
        'Automate the generation and distribution of reports from various analytics and business intelligence platforms.',
    iconName: 'FileText',
    benefits: [
        'Automated reporting',
        'Data consolidation',
        'Time-saving',
        'Consistent reporting format',
    ],
    useCases: [
        'Business intelligence',
        'Performance reporting',
        'Stakeholder updates',
        'Data analysis',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const kpiMonitoringAction: Action = {
    id: 'kpi-monitoring',
    name: 'Monitor KPIs and Metrics',
    description:
        'Track key performance indicators and business metrics automatically',
    longDescription:
        'Set up automated monitoring and alerts for key performance indicators and business metrics.',
    iconName: 'TrendingUp',
    benefits: [
        'Real-time performance tracking',
        'Proactive monitoring',
        'Goal alignment',
        'Performance visibility',
    ],
    useCases: [
        'Business performance tracking',
        'Goal achievement',
        'Strategic decision making',
        'Performance optimization',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const dashboardExportAction: Action = {
    id: 'dashboard-export',
    name: 'Export Data to Dashboards',
    description: 'Automate data exports to visualization dashboards',
    longDescription:
        'Export and integrate data from various sources into dashboards and visualization tools.',
    iconName: 'BarChart2',
    benefits: [
        'Centralized data visualization',
        'Automated data refresh',
        'Cross-source integration',
        'Custom dashboard creation',
    ],
    useCases: [
        'Executive dashboards',
        'Team performance tracking',
        'Data visualization',
        'Business intelligence',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const dataVisualizationAction: Action = {
    id: 'data-visualization',
    name: 'Automate Data Visualization',
    description: 'Create dynamic charts and visualizations from your data',
    longDescription:
        'Automatically generate and update charts, graphs, and other visualizations from various data sources.',
    iconName: 'PieChart',
    benefits: [
        'Dynamic visualization',
        'Data storytelling',
        'Pattern recognition',
        'Visual data analysis',
    ],
    useCases: [
        'Data presentation',
        'Trend analysis',
        'Performance visualization',
        'Comparative analysis',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the Analytics & Reporting category
export const analyticsReportingCategory: ActionCategory = {
    id: 'analytics-reporting',
    name: 'Analytics & Reporting',
    iconName: 'BarChart',
    description:
        'Automate reporting, analytics, and business intelligence workflows',
    actions: [
        reportGenerationAction,
        kpiMonitoringAction,
        dashboardExportAction,
        dataVisualizationAction,
    ],
};
