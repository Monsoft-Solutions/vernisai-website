// Example demo screens
export interface DemoScreen {
    id: string;
    title: string;
    description: string;
    image: string;
    videoUrl?: string;
}

export const workflowDemoScreens: DemoScreen[] = [
    {
        id: 'workflow-builder',
        title: 'Intuitive Workflow Builder',
        description:
            'Create complex workflows with our drag-and-drop interface. No coding required.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
        id: 'ai-assistant',
        title: 'AI Workflow Assistant',
        description:
            'Describe what you want in plain English, and our AI will create the workflow for you.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        id: 'analytics-dashboard',
        title: 'Comprehensive Analytics',
        description:
            'Monitor your workflow performance with real-time analytics and insights.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        id: 'integrations',
        title: 'Seamless Integrations',
        description:
            'Connect with over 100 popular tools and services to create powerful workflows.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
];
