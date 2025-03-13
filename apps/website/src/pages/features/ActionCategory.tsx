import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import {
    ArrowLeft,
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
    Check,
    LucideIcon,
} from 'lucide-react';
import { getCategoryById, Action } from '../../data';
import { SEO } from '../../components';

// Map of common icons used in the component
const iconComponents: Record<string, LucideIcon> = {
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

// Background color map for category icons
const categoryColorMap: Record<string, string> = {
    'ai-data': 'bg-indigo-100 text-indigo-600',
    'file-operations': 'bg-blue-100 text-blue-600',
    'development-tools': 'bg-green-100 text-green-600',
    'web-search': 'bg-amber-100 text-amber-600',
    communication: 'bg-purple-100 text-purple-600',
    'smart-home': 'bg-sky-100 text-sky-600',
    'marketing-social-media': 'bg-rose-100 text-rose-600',
    ecommerce: 'bg-emerald-100 text-emerald-600',
    'task-project-management': 'bg-orange-100 text-orange-600',
    'analytics-reporting': 'bg-cyan-100 text-cyan-600',
    'notifications-alerts': 'bg-red-100 text-red-600',
    'content-documentation': 'bg-teal-100 text-teal-600',
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
    const getIconComponent = (iconName: string, className = 'h-6 w-6') => {
        // Default to Zap icon if the requested icon is not found
        const IconComponent =
            iconComponents[iconName as keyof typeof iconComponents] || Zap;
        return <IconComponent className={className} />;
    };

    // Get color for category
    const getCategoryColors = (categoryId: string) => {
        return categoryColorMap[categoryId] || 'bg-gray-100 text-gray-700';
    };

    // Get color for action
    const getActionColors = (action: Action) => {
        if (action.id === selectedAction?.id) {
            return 'bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500';
        }
        return 'hover:bg-gray-50 border-l-4 border-transparent';
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 via-white to-white">
            <SEO
                title={`${category.name} - VernisAI Actions`}
                description={`Explore ${category.name} actions and integrations to automate your workflows with VernisAI's powerful automation platform.`}
                keywords={`${category.name.toLowerCase()}, actions, workflow automation, AI integration, no-code workflow`}
                canonicalUrl={`https://vernis.ai/features/actions/${categoryId}`}
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'Brand',
                    name: `VernisAI ${category.name} Actions`,
                    description: `${category.name} actions and integrations for VernisAI's workflow automation platform.`,
                    url: `https://vernis.ai/features/actions/${categoryId}`,
                    category: 'Software',
                    brand: {
                        '@type': 'Brand',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                }}
            />

            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    {/* Header Section */}
                    <div className="mb-10">
                        <Button
                            variant="ghost"
                            className="mb-4 flex items-center gap-1 text-indigo-600 transition-colors hover:bg-indigo-50/50 hover:text-indigo-700"
                            onClick={() => navigate('/features/actions')}
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Actions
                        </Button>

                        <motion.div
                            className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl shadow-sm ${getCategoryColors(category.id)}`}
                            >
                                {getIconComponent(category.iconName, 'h-8 w-8')}
                            </div>
                            <div>
                                <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                                    {category.name}
                                </h1>
                                <p className="mt-2 text-lg text-gray-600">
                                    {category.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Badge
                                        className={`${getCategoryColors(category.id)}`}
                                    >
                                        {category.actions.length} Actions
                                    </Badge>
                                    <Badge className="bg-purple-100 text-purple-700">
                                        Model Context Protocol
                                    </Badge>
                                    <Badge className="bg-gray-100 text-gray-700">
                                        No-Code Integration
                                    </Badge>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                        {/* Sidebar with action list */}
                        <div className="md:col-span-4 lg:col-span-3">
                            <motion.div
                                className="sticky top-24"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Available Actions
                                    </h2>
                                    <Badge
                                        variant="outline"
                                        className="bg-white"
                                    >
                                        {category.actions.length}
                                    </Badge>
                                </div>
                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                                    {category.actions.map((action) => (
                                        <div
                                            key={action.id}
                                            className={`cursor-pointer p-3 transition-all duration-200 ${getActionColors(action)}`}
                                            onClick={() =>
                                                setSelectedAction(action)
                                            }
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${getCategoryColors(category.id)}`}
                                                >
                                                    {getIconComponent(
                                                        action.iconName ||
                                                            category.iconName,
                                                        'h-5 w-5',
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-gray-900">
                                                        {action.name}
                                                    </h3>
                                                    <p className="line-clamp-1 text-sm text-gray-500">
                                                        {action.description}
                                                    </p>
                                                </div>
                                                {selectedAction?.id ===
                                                    action.id && (
                                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                                                        <Check className="h-4 w-4 text-indigo-600" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Main content area */}
                        <div className="md:col-span-8 lg:col-span-9">
                            {selectedAction ? (
                                <motion.div
                                    key={selectedAction.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
                                >
                                    {/* Action Header */}
                                    <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white p-6 pb-5">
                                        <div className="mb-4 flex items-center gap-4">
                                            <div
                                                className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl shadow-sm ${getCategoryColors(category.id)}`}
                                            >
                                                {getIconComponent(
                                                    selectedAction.iconName ||
                                                        category.iconName,
                                                    'h-7 w-7',
                                                )}
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-900">
                                                    {selectedAction.name}
                                                </h2>
                                                <p className="text-lg text-gray-600">
                                                    {selectedAction.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Details */}
                                    <div className="p-6">
                                        <div className="prose prose-gray max-w-none">
                                            <div className="mb-6 rounded-lg bg-indigo-50/50 p-4">
                                                <h3 className="mb-2 text-lg font-semibold text-indigo-900">
                                                    Overview
                                                </h3>
                                                <p className="text-indigo-800">
                                                    {
                                                        selectedAction.longDescription
                                                    }
                                                </p>
                                            </div>

                                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                                                {/* Benefits Section */}
                                                {selectedAction.benefits &&
                                                    selectedAction.benefits
                                                        .length > 0 && (
                                                        <div className="rounded-lg border border-gray-200 p-5">
                                                            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                                                                    <Check className="h-5 w-5 text-green-600" />
                                                                </span>
                                                                Key Benefits
                                                            </h3>
                                                            <ul className="space-y-3">
                                                                {selectedAction.benefits.map(
                                                                    (
                                                                        benefit,
                                                                        index,
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="flex items-start"
                                                                        >
                                                                            <Check className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                                                                            <span className="text-gray-700">
                                                                                {
                                                                                    benefit
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}

                                                {/* Use Cases Section */}
                                                {selectedAction.useCases &&
                                                    selectedAction.useCases
                                                        .length > 0 && (
                                                        <div className="rounded-lg border border-gray-200 p-5">
                                                            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                                                                    <Briefcase className="h-5 w-5 text-blue-600" />
                                                                </span>
                                                                Use Cases
                                                            </h3>
                                                            <ul className="space-y-3">
                                                                {selectedAction.useCases.map(
                                                                    (
                                                                        useCase,
                                                                        index,
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="flex items-start"
                                                                        >
                                                                            <div className="mt-1 mr-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                                                                                {index +
                                                                                    1}
                                                                            </div>
                                                                            <span className="text-gray-700">
                                                                                {
                                                                                    useCase
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                            </div>

                                            {/* Implementation Section */}
                                            {selectedAction.implementation && (
                                                <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50/50 p-5">
                                                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                                                            <Code className="h-5 w-5 text-purple-600" />
                                                        </span>
                                                        Implementation Details
                                                    </h3>
                                                    <p className="mb-2 text-gray-700">
                                                        This action is
                                                        implemented using the{' '}
                                                        <span className="rounded-md bg-white px-2 py-0.5 font-mono text-sm font-medium text-indigo-600">
                                                            {
                                                                selectedAction.implementation
                                                            }
                                                        </span>
                                                    </p>
                                                    {selectedAction.source && (
                                                        <div className="mt-3 flex items-center gap-2 rounded-lg bg-gray-100 p-3 text-sm">
                                                            <Code className="h-4 w-4 text-gray-500" />
                                                            <span className="text-gray-600">
                                                                Source:{' '}
                                                            </span>
                                                            {selectedAction.sourceUrl ? (
                                                                <a
                                                                    href={
                                                                        selectedAction.sourceUrl
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
                                                                >
                                                                    {
                                                                        selectedAction.source
                                                                    }
                                                                    <ExternalLink className="ml-1 h-3 w-3" />
                                                                </a>
                                                            ) : (
                                                                <span className="font-medium text-gray-700">
                                                                    {
                                                                        selectedAction.source
                                                                    }
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Footer */}
                                        <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:justify-between">
                                            <div>
                                                <Badge
                                                    className={`${getCategoryColors(category.id)}`}
                                                >
                                                    {category.name}
                                                </Badge>
                                            </div>
                                            <div className="flex flex-col gap-3 sm:flex-row">
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                                                >
                                                    <Link to="/features">
                                                        Explore Other Features
                                                    </Link>
                                                </Button>
                                                <Button
                                                    asChild
                                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                                                >
                                                    <Link to="/waitlist">
                                                        Join Waitlist
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="flex h-[600px] items-center justify-center rounded-xl border border-gray-200 bg-white p-8 text-center">
                                    <div className="max-w-md">
                                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                                            <Zap className="h-8 w-8 text-indigo-600" />
                                        </div>
                                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                            Select an Action
                                        </h3>
                                        <p className="text-gray-600">
                                            Choose an action from the list to
                                            view its details and learn how it
                                            can help automate your workflows
                                            with VernisAI.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
