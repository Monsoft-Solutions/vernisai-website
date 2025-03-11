import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import {
    Zap,
    CheckCircle2,
    Search,
    FileText,
    Github,
    MessageSquare,
    Globe,
    Home,
    Cpu,
    Briefcase,
    BarChart2,
    Database,
    GitBranch,
    Bot,
    Calendar,
    Mail,
    Image,
    Cloud,
    Code,
    Lock,
    LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { actionCategories } from '../../data';
import { SEO } from '../../components';

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
    FileText,
    Github,
    Globe,
    MessageSquare,
    Home,
    Cpu,
    Zap,
    Database,
    GitBranch,
    Bot,
    Search,
    Calendar,
    Mail,
    Image,
    BarChart2,
    Briefcase,
    Cloud,
    Code,
    Lock,
};

export function ActionsFeature() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Filter categories based on search term
    const filteredCategories = searchTerm
        ? actionCategories
              .map((category) => ({
                  ...category,
                  actions: category.actions.filter(
                      (action) =>
                          action.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                          action.description
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()),
                  ),
              }))
              .filter((category) => category.actions.length > 0)
        : actionCategories;

    // Count total actions
    const totalActions = actionCategories.reduce(
        (total, category) => total + category.actions.length,
        0,
    );

    // Get icon component from name
    const getIconComponent = (iconName: string, className = '') => {
        const IconComponent = iconMap[iconName];
        return IconComponent ? (
            <IconComponent className={`h-6 w-6 ${className}`} />
        ) : (
            <Zap className={`h-6 w-6 ${className}`} />
        );
    };

    // Handle category click
    const handleCategoryClick = (categoryId: string) => {
        navigate(`/features/actions/${categoryId}`);
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

    // Get color for category
    const getCategoryColors = (categoryId: string) => {
        return categoryColorMap[categoryId] || 'bg-gray-100 text-gray-700';
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50/40 via-white to-white pb-20">
            <SEO
                title="Actions - Powerful Integrations for Your Workflows"
                description="Explore VernisAI's extensive library of pre-built actions and integrations to automate your workflows across various platforms and services."
                keywords="AI actions, workflow integrations, automation tools, API integrations, no-code actions"
                canonicalUrl="https://vernis.ai/features/actions"
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'WebPage',
                    name: 'VernisAI Actions',
                    description:
                        "Explore VernisAI's extensive library of pre-built actions and integrations.",
                    url: 'https://vernis.ai/features/actions',
                    publisher: {
                        '@type': 'Organization',
                        name: 'VernisAI',
                        logo: 'https://vernis.ai/images/vernisai-logo.png',
                    },
                }}
            />

            {/* Hero section with improved visual appeal */}
            <div className="bg-gradient-to-b from-indigo-50/80 to-white">
                <div className="container mx-auto px-4 py-16 sm:py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-16 text-center">
                            <motion.div
                                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    delay: 0.1,
                                }}
                            >
                                <Zap className="h-10 w-10 text-white" />
                            </motion.div>
                            <motion.h1
                                className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Actions
                            </motion.h1>
                            <motion.p
                                className="mx-auto max-w-2xl text-xl text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="font-medium text-indigo-600">
                                    {totalActions}+
                                </span>{' '}
                                powerful operations that interact with
                                third-party services to transform your workflow
                            </motion.p>
                        </div>

                        <motion.div
                            className="prose prose-lg mx-auto mb-12 max-w-3xl text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <p className="text-gray-600">
                                VernisAI implements the{' '}
                                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                                    <Code className="h-4 w-4" />
                                    Model Context Protocol (MCP)
                                </span>
                                <span className="mx-2">—</span>
                                an open standard that enables AI agents to
                                securely interact with a wide range of tools and
                                services. Our platform provides access to
                                hundreds of actions that can be combined to
                                create powerful automation workflows without
                                writing any code.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    {/* Improved search section */}
                    <motion.div
                        className="sticky top-20 z-10 -mt-6 mb-12 rounded-xl border border-gray-200 bg-white p-4 shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="relative flex w-full items-center rounded-lg border bg-white px-3 py-2 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 sm:max-w-md">
                                <Search className="mr-2 h-5 w-5 text-gray-500" />
                                <Input
                                    type="text"
                                    placeholder="Search for actions..."
                                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                {searchTerm && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                        onClick={() => setSearchTerm('')}
                                    >
                                        <span className="sr-only">
                                            Clear search
                                        </span>
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-gray-500"
                                        >
                                            <path
                                                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </Button>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                                    {filteredCategories.reduce(
                                        (total, category) =>
                                            total + category.actions.length,
                                        0,
                                    )}{' '}
                                    Actions
                                </Badge>
                                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                                    {filteredCategories.length} Categories
                                </Badge>
                            </div>
                        </div>
                    </motion.div>

                    {/* Categories grid with improved card design */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.05 }}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                {/* Subtle background gradient for visual interest */}
                                <div className="absolute inset-0 top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-indigo-50/30 to-purple-50/30 opacity-50"></div>

                                <div className="mb-5 flex items-center">
                                    <div
                                        className={`mr-4 flex h-12 w-12 items-center justify-center rounded-lg shadow-sm ${getCategoryColors(category.id)}`}
                                    >
                                        {getIconComponent(category.iconName)}
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {category.name}
                                    </h2>
                                </div>
                                <p className="mb-5 text-gray-600">
                                    {category.description}
                                </p>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <Badge
                                        className={`${getCategoryColors(category.id)} border-0`}
                                    >
                                        {category.actions.length} Actions
                                    </Badge>
                                    <Badge className="bg-gray-100 text-gray-700">
                                        MCP
                                    </Badge>
                                </div>

                                {/* Display actions with improved visual hierarchy */}
                                <ul className="mb-5 space-y-3 border-t border-gray-100 pt-4">
                                    {category.actions
                                        .slice(0, 3)
                                        .map((action, actionIndex) => (
                                            <li
                                                key={actionIndex}
                                                className="flex items-start"
                                            >
                                                <CheckCircle2 className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-indigo-500" />
                                                <div>
                                                    <span className="font-medium text-gray-800">
                                                        {action.name}
                                                    </span>
                                                    <p className="line-clamp-1 text-sm text-gray-500">
                                                        {action.description}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    {category.actions.length > 3 && (
                                        <li className="text-sm font-medium text-indigo-600">
                                            +{category.actions.length - 3} more
                                            actions
                                        </li>
                                    )}
                                </ul>

                                {/* View category button with hover effect */}
                                <div className="inline-flex items-center font-medium text-indigo-600 transition-all group-hover:translate-x-1">
                                    View Category
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* How it works section with visual improvements */}
                    <motion.div
                        className="mt-20 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
                            How Actions{' '}
                            <span className="text-indigo-600">Work</span>
                        </h2>
                        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
                            {/* Connection line for desktop */}
                            <div className="absolute top-16 left-1/2 hidden h-0.5 w-3/4 -translate-x-1/2 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 md:block"></div>

                            <div className="relative flex flex-col items-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 shadow-sm">
                                    <Zap className="h-9 w-9 text-indigo-600" />
                                </div>
                                <span className="absolute -top-2 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                                    1
                                </span>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                    Select Actions
                                </h3>
                                <p className="text-gray-600">
                                    Choose from our extensive library of
                                    pre-built actions or create custom ones to
                                    suit your specific business needs.
                                </p>
                            </div>

                            <div className="relative flex flex-col items-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-purple-200 shadow-sm">
                                    <Briefcase className="h-9 w-9 text-purple-600" />
                                </div>
                                <span className="absolute -top-2 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                                    2
                                </span>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                    Build Workflows
                                </h3>
                                <p className="text-gray-600">
                                    Combine multiple actions into powerful
                                    workflows using our intuitive drag-and-drop
                                    interface—no coding required.
                                </p>
                            </div>

                            <div className="relative flex flex-col items-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-sm">
                                    <BarChart2 className="h-9 w-9 text-blue-600" />
                                </div>
                                <span className="absolute -top-2 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                                    3
                                </span>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                    Automate & Monitor
                                </h3>
                                <p className="text-gray-600">
                                    Deploy your workflows to run automatically
                                    on triggers or schedules, and monitor their
                                    performance in real-time through dashboards.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA section with improved design */}
                    <motion.div
                        className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="relative px-8 py-12 sm:px-12">
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>

                            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                                <div className="max-w-xl">
                                    <h2 className="mb-3 text-3xl font-bold tracking-tight text-white">
                                        Ready to automate your workflows?
                                    </h2>
                                    <p className="mb-6 text-lg text-indigo-100">
                                        Join our waitlist to be among the first
                                        to experience the power of VernisAI's
                                        action-based automation and transform
                                        how your team works.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-white font-medium text-indigo-600 hover:bg-indigo-50"
                                        >
                                            <Link to="/waitlist">
                                                Join Waitlist
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="lg"
                                            className="border-indigo-200 font-medium text-white hover:bg-indigo-500"
                                        >
                                            <Link to="/features">
                                                Explore Features
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-white/20 text-white hover:bg-white/30">
                                        Model Context Protocol
                                    </Badge>
                                    <Badge className="bg-white/20 text-white hover:bg-white/30">
                                        No-Code
                                    </Badge>
                                    <Badge className="bg-white/20 text-white hover:bg-white/30">
                                        AI-Powered
                                    </Badge>
                                    <Badge className="bg-white/20 text-white hover:bg-white/30">
                                        Secure
                                    </Badge>
                                    <Badge className="bg-white/20 text-white hover:bg-white/30">
                                        Extensible
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
