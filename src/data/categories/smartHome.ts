// Import the Action type
import { Action } from '../types/Action';
import { ActionCategory } from '../types/ActionCategory';

// Define the smart home actions
const homeAssistantAction: Action = {
    id: 'home-assistant',
    name: 'Home Assistant',
    description: 'Control smart home devices and sensors',
    longDescription:
        'Integrate with Home Assistant to control and monitor smart home devices and sensors.',
    iconName: 'Home',
    benefits: [
        'Comprehensive device control',
        'Automation integration',
        'Sensor monitoring',
        'Scene management',
    ],
    useCases: [
        'Smart home control',
        'Device automation',
        'Environmental monitoring',
        'Energy management',
    ],
    implementation: 'Model Context Protocol',
    source: 'allenporter/mcp-server-home-assistant',
    sourceUrl: 'https://github.com/allenporter/mcp-server-home-assistant',
};

const macAppsLauncherAction: Action = {
    id: 'mac-apps-launcher',
    name: 'Mac Apps Launcher',
    description: 'List and launch applications on macOS',
    longDescription: 'Discover and launch applications on macOS systems.',
    iconName: 'Briefcase',
    benefits: [
        'Application discovery',
        'Quick launch capabilities',
        'macOS integration',
        'Workflow automation',
    ],
    useCases: [
        'Productivity enhancement',
        'Application management',
        'Workflow automation',
        'System control',
    ],
    implementation: 'Model Context Protocol',
    source: 'joshuarileydev/mac-apps-launcher-mcp-server',
    sourceUrl: 'https://github.com/joshuarileydev/mac-apps-launcher-mcp-server',
};

const deviceControlAction: Action = {
    id: 'device-control',
    name: 'Device Control',
    description: 'Manage connected devices and appliances',
    longDescription:
        'Control and monitor various connected devices and smart appliances.',
    iconName: 'Zap',
    benefits: [
        'Universal device control',
        'Status monitoring',
        'Remote management',
        'Automation capabilities',
    ],
    useCases: [
        'Smart home management',
        'Device coordination',
        'Remote control',
        'Automation setup',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const automationAction: Action = {
    id: 'automation',
    name: 'Automation',
    description: 'Create and manage home automation routines',
    longDescription:
        'Build and manage automation routines for smart home and connected devices.',
    iconName: 'GitBranch',
    benefits: [
        'Complex automation creation',
        'Trigger-based actions',
        'Schedule integration',
        'Conditional logic',
    ],
    useCases: [
        'Smart home automation',
        'Energy optimization',
        'Security management',
        'Comfort enhancement',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the smart home category
export const smartHomeCategory: ActionCategory = {
    id: 'smart-home',
    name: 'Smart Home',
    iconName: 'Home',
    description: 'Control and automate smart home devices and applications',
    actions: [
        homeAssistantAction,
        macAppsLauncherAction,
        deviceControlAction,
        automationAction,
    ],
};
