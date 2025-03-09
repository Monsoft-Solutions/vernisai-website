import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import {
    ChevronLeft,
    ExternalLink,
    Zap,
    FileText,
    Database,
    Globe,
    MessageSquare,
    Home,
    Cpu,
    Search,
    Calendar,
    Mail,
    Image,
    BarChart2,
    Briefcase,
    Cloud,
    Code,
    Lock,
    GitBranch,
    Bot,
} from 'lucide-react';
import { getCategoryById, Action } from '../../data';

// Map of common icons used in the component
const iconComponents = {
    FileText,
    Database,
    Globe,
    Zap,
    MessageSquare,
    Home,
    Cpu,
    Search,
    Calendar,
    Mail,
    Image,
    BarChart2,
    Briefcase,
    Cloud,
    Code,
    Lock,
    GitBranch,
    Bot,
};

export function ActionCategory() {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();
    const [category] = useState(getCategoryById(categoryId || ''));
    const [selectedAction, setSelectedAction] = useState<Action | null>(null);

    // Select the first action by default when the category loads
    useEffect(() => {
        if (category && category.actions.length > 0 && !selectedAction) {
            setSelectedAction(category.actions[0]);
        }
    }, [category, selectedAction]);

    useEffect(() => {
        if (!category) {
            navigate('/features/actions');
        }
    }, [category, navigate]);

    if (!category) {
        return null;
    }

    // Get icon component based on name
    const getIconComponent = (iconName: string) => {
        // Default to Zap icon if the requested icon is not found
        const IconComponent =
            iconComponents[iconName as keyof typeof iconComponents] || Zap;
        return <IconComponent className="h-6 w-6 text-gray-700" />;
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <Button
                        variant="ghost"
                        className="mb-4 flex items-center text-gray-600"
                        onClick={() => navigate('/features/actions')}
                    >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Back to Actions
                    </Button>

                    <div className="mb-6 flex items-center">
                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                            {getIconComponent(category.iconName)}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                {category.name}
                            </h1>
                            <p className="text-gray-600">
                                {category.description}
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 flex flex-wrap gap-2">
                        <Badge variant="outline">
                            {category.actions.length} Actions
                        </Badge>
                        <Badge variant="outline">Model Context Protocol</Badge>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="md:col-span-1">
                        <div className="sticky top-8">
                            <h2 className="mb-4 text-xl font-semibold">
                                Available Actions
                            </h2>
                            <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-4">
                                {category.actions.map((action) => (
                                    <div
                                        key={action.id}
                                        className={`cursor-pointer rounded-md p-3 transition-colors ${
                                            selectedAction?.id === action.id
                                                ? 'bg-gray-100'
                                                : 'hover:bg-gray-50'
                                        }`}
                                        onClick={() =>
                                            setSelectedAction(action)
                                        }
                                    >
                                        <div className="flex items-center">
                                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-md bg-gray-100">
                                                {getIconComponent(
                                                    action.iconName ||
                                                        category.iconName,
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-medium">
                                                    {action.name}
                                                </h3>
                                                <p className="line-clamp-1 text-sm text-gray-600">
                                                    {action.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        {selectedAction ? (
                            <motion.div
                                key={selectedAction.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-lg border border-gray-200 bg-white p-6 shadow-md"
                            >
                                <div className="mb-6 flex items-center">
                                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                                        {getIconComponent(
                                            selectedAction.iconName ||
                                                category.iconName,
                                        )}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">
                                            {selectedAction.name}
                                        </h2>
                                        <p className="text-gray-600">
                                            {selectedAction.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="prose prose-gray max-w-none">
                                    <h3 className="mb-2 mt-4 text-xl font-semibold">
                                        Overview
                                    </h3>
                                    <p className="mb-4 text-gray-700">
                                        {selectedAction.longDescription}
                                    </p>

                                    {selectedAction.benefits &&
                                        selectedAction.benefits.length > 0 && (
                                            <>
                                                <h3 className="mb-2 mt-6 text-xl font-semibold">
                                                    Key Benefits
                                                </h3>
                                                <ul className="mb-4 list-disc space-y-1 pl-5">
                                                    {selectedAction.benefits.map(
                                                        (benefit, index) => (
                                                            <li
                                                                key={index}
                                                                className="text-gray-700"
                                                            >
                                                                {benefit}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </>
                                        )}

                                    {selectedAction.useCases &&
                                        selectedAction.useCases.length > 0 && (
                                            <>
                                                <h3 className="mb-2 mt-6 text-xl font-semibold">
                                                    Use Cases
                                                </h3>
                                                <ul className="mb-4 list-disc space-y-1 pl-5">
                                                    {selectedAction.useCases.map(
                                                        (useCase, index) => (
                                                            <li
                                                                key={index}
                                                                className="text-gray-700"
                                                            >
                                                                {useCase}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </>
                                        )}

                                    {selectedAction.implementation && (
                                        <>
                                            <h3 className="mb-2 mt-6 text-xl font-semibold">
                                                Implementation
                                            </h3>
                                            <p className="text-gray-700">
                                                This action is implemented using
                                                the{' '}
                                                {selectedAction.implementation}.
                                                {selectedAction.source && (
                                                    <>
                                                        {' '}
                                                        Source:{' '}
                                                        {selectedAction.sourceUrl ? (
                                                            <a
                                                                href={
                                                                    selectedAction.sourceUrl
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                                                            >
                                                                {
                                                                    selectedAction.source
                                                                }
                                                                <ExternalLink className="ml-1 h-3 w-3" />
                                                            </a>
                                                        ) : (
                                                            selectedAction.source
                                                        )}
                                                    </>
                                                )}
                                            </p>
                                        </>
                                    )}
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mr-2"
                                    >
                                        <Link to="/features">
                                            Explore Other Features
                                        </Link>
                                    </Button>
                                    <Button asChild variant="black">
                                        <Link to="/waitlist">
                                            Join Waitlist
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="flex h-full items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center">
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        Select an Action
                                    </h3>
                                    <p className="text-gray-600">
                                        Choose an action from the list to view
                                        its details and learn how it can help
                                        automate your workflows.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
