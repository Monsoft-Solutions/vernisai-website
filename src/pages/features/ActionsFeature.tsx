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
    const getIconComponent = (iconName: string) => {
        const IconComponent = iconMap[iconName];
        return IconComponent ? (
            <IconComponent className="h-6 w-6 text-gray-700" />
        ) : (
            <Zap className="h-6 w-6 text-gray-700" />
        );
    };

    // Handle category click
    const handleCategoryClick = (categoryId: string) => {
        navigate(`/features/actions/${categoryId}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
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

            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <motion.div
                            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                delay: 0.1,
                            }}
                        >
                            <Zap className="h-8 w-8 text-gray-700" />
                        </motion.div>
                        <motion.h1
                            className="mb-4 text-4xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Actions
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {totalActions}+ powerful operations that interact
                            with third-party services
                        </motion.p>
                    </div>

                    <motion.div
                        className="prose prose-lg mb-12 max-w-none"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p>
                            VernisAI implements the{' '}
                            <strong>Model Context Protocol (MCP)</strong>, an
                            open standard that enables AI agents to securely
                            interact with a wide range of tools and services.
                            Our platform provides access to hundreds of actions
                            that can be combined to create powerful automation
                            workflows without writing any code.
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="relative flex w-full max-w-sm items-center rounded-lg border bg-white px-3 py-2 shadow-sm">
                                <Search className="mr-2 h-4 w-4 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search for actions..."
                                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>
                            <Badge variant="outline" className="bg-white">
                                {filteredCategories.reduce(
                                    (total, category) =>
                                        total + category.actions.length,
                                    0,
                                )}{' '}
                                Actions
                            </Badge>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                className="cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <div className="mb-4 flex items-center">
                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                                        {getIconComponent(category.iconName)}
                                    </div>
                                    <h2 className="text-xl font-semibold">
                                        {category.name}
                                    </h2>
                                </div>
                                <p className="mb-4 text-gray-600">
                                    {category.description}
                                </p>
                                <div className="mb-4">
                                    <Badge
                                        variant="outline"
                                        className="mr-2 mb-2"
                                    >
                                        {category.actions.length} Actions
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="mr-2 mb-2"
                                    >
                                        MCP
                                    </Badge>
                                </div>
                                <ul className="mb-4 space-y-2">
                                    {category.actions
                                        .slice(0, 3)
                                        .map((action, actionIndex) => (
                                            <li
                                                key={actionIndex}
                                                className="flex items-start"
                                            >
                                                <CheckCircle2 className="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-gray-700" />
                                                <span className="text-gray-700">
                                                    {action.name}
                                                </span>
                                            </li>
                                        ))}
                                    {category.actions.length > 3 && (
                                        <li className="text-sm text-gray-500 italic">
                                            +{category.actions.length - 3} more
                                            actions
                                        </li>
                                    )}
                                </ul>
                                <div className="flex items-center font-medium text-gray-900">
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

                    <motion.div
                        className="mt-16 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-8 shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div>
                                <h2 className="mb-2 text-2xl font-semibold">
                                    Ready to automate your workflows?
                                </h2>
                                <p className="mb-4 text-gray-600">
                                    Join our waitlist to be among the first to
                                    experience the power of VernisAI's
                                    action-based automation.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button
                                        asChild
                                        variant="black"
                                        className="transform transition-all duration-300 hover:scale-105"
                                    >
                                        <Link to="/waitlist">
                                            Join Waitlist
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="transform border-gray-300 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                                    >
                                        <Link to="/features">
                                            Explore Features
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Badge variant="outline" className="bg-white">
                                    Model Context Protocol
                                </Badge>
                                <Badge variant="outline" className="bg-white">
                                    No-Code
                                </Badge>
                                <Badge variant="outline" className="bg-white">
                                    AI-Powered
                                </Badge>
                                <Badge variant="outline" className="bg-white">
                                    Secure
                                </Badge>
                                <Badge variant="outline" className="bg-white">
                                    Extensible
                                </Badge>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <h2 className="mb-6 text-center text-2xl font-semibold">
                            How Actions Work
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                                    <Zap className="h-8 w-8 text-gray-700" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">
                                    Select Actions
                                </h3>
                                <p className="text-gray-600">
                                    Choose from hundreds of pre-built actions or
                                    create custom ones to suit your needs.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                                    <Briefcase className="h-8 w-8 text-gray-700" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">
                                    Build Workflows
                                </h3>
                                <p className="text-gray-600">
                                    Combine actions into powerful workflows
                                    using our intuitive no-code interface.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                                    <BarChart2 className="h-8 w-8 text-gray-700" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">
                                    Automate & Monitor
                                </h3>
                                <p className="text-gray-600">
                                    Set your workflows to run automatically and
                                    monitor their performance in real-time.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
