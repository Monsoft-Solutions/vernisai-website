import React from 'react';
import { Link } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from './ui/navigation-menu';
import { navigationMenuTriggerStyle } from './ui/navigation-menu-utils';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import {
    Zap,
    BookOpen,
    FileText,
    Calendar,
    ClipboardList,
    UserCircle,
    GraduationCap,
    BarChart3,
    ChevronRight,
    Workflow,
    Puzzle,
    Sparkles,
    Brain,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './ui/logo';
import { MobileNav } from './MobileNav';

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block space-y-1 rounded-md p-3 leading-none no-underline transition-all duration-200 outline-none select-none hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm leading-none font-medium">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Logo
                        showLogo={true}
                        showText={true}
                        logoSize="md"
                        textSize="md"
                        linkTo="/"
                        className="flex items-center transition-transform hover:scale-105"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center space-x-1 md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-1">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-base font-medium transition-colors hover:bg-gray-100/80 hover:text-gray-900">
                                    How It Works
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="z-[100] rounded-md border border-gray-200 bg-white shadow-lg">
                                    <div className="w-[500px] bg-white p-4">
                                        <div className="mb-3 flex items-center justify-between">
                                            <Link
                                                to="/features"
                                                className="flex items-center gap-2 rounded-md px-2 py-1 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
                                            >
                                                <span>How It All Works</span>
                                                <ChevronRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4">
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/features/actions"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-purple-100 p-2">
                                                        <Puzzle className="h-5 w-5 text-purple-700" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Actions
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Well-defined, atomic
                                                            operations that
                                                            interact with
                                                            third-party
                                                            services.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/features/pipelines"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-blue-100 p-2">
                                                        <Workflow className="h-5 w-5 text-blue-700" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Pipelines
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Define sequences of
                                                            actions in a
                                                            structured workflow.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/features/agents"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-green-100 p-2">
                                                        <Brain className="h-5 w-5 text-green-700" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Agents
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            AI-driven entities
                                                            that execute
                                                            pipelines with
                                                            context awareness.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/features/knowledge-base"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-amber-100 p-2">
                                                        <Sparkles className="h-5 w-5 text-amber-700" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Knowledge Base
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Contextual data for
                                                            agents to retrieve
                                                            and use efficiently.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-base font-medium transition-colors hover:bg-gray-100/80 hover:text-gray-900">
                                    Use Cases
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="z-[100] rounded-md border border-gray-200 bg-white shadow-lg">
                                    <div className="max-h-[80vh] w-[600px] overflow-y-auto bg-white p-4">
                                        <div className="mb-3 flex items-center justify-between">
                                            <Link
                                                to="/use-cases"
                                                className="flex items-center gap-2 rounded-md px-2 py-1 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
                                            >
                                                <span>All Use Cases</span>
                                                <ChevronRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/use-cases/task-automation"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-yellow-100 p-2">
                                                        <Zap className="h-5 w-5 text-yellow-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Task Automation
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Automate repetitive
                                                            tasks to save time
                                                            and reduce manual
                                                            effort.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/use-cases/knowledge-management"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-blue-100 p-2">
                                                        <BookOpen className="h-5 w-5 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Knowledge Management
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Quickly access,
                                                            organize, and
                                                            retrieve important
                                                            information.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/use-cases/content-creation"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-green-100 p-2">
                                                        <FileText className="h-5 w-5 text-green-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Content Creation
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Generate and
                                                            optimize various
                                                            types of content
                                                            faster.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/use-cases/meeting-enhancement"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-purple-100 p-2">
                                                        <Calendar className="h-5 w-5 text-purple-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Meeting Enhancement
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Make meetings more
                                                            efficient and
                                                            productive.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/use-cases/project-management"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-red-100 p-2">
                                                        <ClipboardList className="h-5 w-5 text-red-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Project Management
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Streamline project
                                                            workflows and task
                                                            management.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/use-cases/personal-assistant"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-indigo-100 p-2">
                                                        <UserCircle className="h-5 w-5 text-indigo-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Personal Assistant
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Handle daily
                                                            organizational tasks
                                                            to free up mental
                                                            space.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/use-cases/learning-acceleration"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-pink-100 p-2">
                                                        <GraduationCap className="h-5 w-5 text-pink-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Learning
                                                            Acceleration
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Speed up learning
                                                            processes with
                                                            AI-assisted
                                                            education.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                }}
                                            >
                                                <Link
                                                    to="/use-cases/data-analysis"
                                                    className="flex items-center gap-4 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                                >
                                                    <div className="rounded-full bg-orange-100 p-2">
                                                        <BarChart3 className="h-5 w-5 text-orange-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base font-medium">
                                                            Data Analysis
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            Analyze and extract
                                                            insights from data
                                                            more efficiently.
                                                        </p>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        to="/pricing"
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            'text-base font-medium transition-colors hover:bg-gray-100/80 hover:text-gray-900',
                                        )}
                                    >
                                        Pricing
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        to="/about"
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            'text-base font-medium transition-colors hover:bg-gray-100/80 hover:text-gray-900',
                                        )}
                                    >
                                        About
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Waitlist Button */}
                    <div className="ml-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            <Button
                                asChild
                                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md transition-all duration-200 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg"
                            >
                                <Link to="/waitlist">Join Waitlist</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Navigation - Only show on mobile */}
                <div className="flex items-center md:hidden">
                    {/* Mobile Waitlist Button */}
                    <Link
                        to="/waitlist"
                        className="mr-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm"
                    >
                        Join Waitlist
                    </Link>

                    {/* Mobile Menu Trigger */}
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
