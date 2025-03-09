import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
    id: string;
    title: string;
    description: string;
    icon: string;
}

// Map feature IDs to their specific routes
const featureRoutes: Record<string, string> = {
    'ai-assistant': '/features/agents',
    'document-analysis': '/features/knowledge-base',
    'data-visualization': '/features/pipelines',
    'workflow-automation': '/features/actions',
};

export function FeatureCard({
    id,
    title,
    description,
    icon,
}: FeatureCardProps) {
    // Get the specific route or fallback to the generic route
    const route = featureRoutes[id] || `/features/${id}`;

    return (
        <div className="rounded-lg bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-4 text-4xl">{icon}</div>
            <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
            <p className="mb-4 text-gray-600">{description}</p>
            <Link
                to={route}
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
            >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </div>
    );
}
