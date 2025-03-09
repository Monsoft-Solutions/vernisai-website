import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';
import { Logo } from './ui/logo';
import {
    Zap,
    UserCircle,
    FileText,
    Calendar,
    BookOpen,
    BrainCircuit,
    Workflow,
    Puzzle,
    Sparkles,
    Brain,
} from 'lucide-react';
import { motion } from 'framer-motion';

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[300px] overflow-y-auto sm:w-[350px]"
            >
                <SheetHeader className="mb-6">
                    <SheetTitle>
                        <Logo
                            showLogo={true}
                            showText={true}
                            logoSize="md"
                            textSize="md"
                        />
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <div
                            className="flex cursor-pointer items-center justify-between"
                            onClick={() => handleNavigation('/features')}
                        >
                            <h3 className="text-lg font-semibold">
                                How It Works
                            </h3>
                            <ChevronRight className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col gap-3 pl-2">
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation('/features/actions')
                                    }
                                >
                                    <div className="rounded-full bg-purple-100 p-1.5">
                                        <Puzzle className="h-4 w-4 text-purple-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Actions
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation('/features/pipelines')
                                    }
                                >
                                    <div className="rounded-full bg-blue-100 p-1.5">
                                        <Workflow className="h-4 w-4 text-blue-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Pipelines
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation('/features/agents')
                                    }
                                >
                                    <div className="rounded-full bg-green-100 p-1.5">
                                        <Brain className="h-4 w-4 text-green-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Agents
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/features/knowledge-base',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-amber-100 p-1.5">
                                        <Sparkles className="h-4 w-4 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Knowledge Base
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div
                            className="flex cursor-pointer items-center justify-between"
                            onClick={() => handleNavigation('/use-cases')}
                        >
                            <h3 className="text-lg font-semibold">Use Cases</h3>
                            <ChevronRight className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col gap-3 pl-2">
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/task-automation',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-yellow-100 p-1.5">
                                        <Zap className="h-4 w-4 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Task Automation
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/personal-assistant',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-indigo-100 p-1.5">
                                        <UserCircle className="h-4 w-4 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Personal Assistant
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/content-creation',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-green-100 p-1.5">
                                        <FileText className="h-4 w-4 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Content Creation
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/knowledge-management',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-blue-100 p-1.5">
                                        <BookOpen className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Knowledge Management
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/meeting-enhancement',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-purple-100 p-1.5">
                                        <Calendar className="h-4 w-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Meeting Enhancement
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation('/use-cases')
                                    }
                                >
                                    <div className="rounded-full bg-purple-100 p-1.5">
                                        <BrainCircuit className="h-4 w-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            All Use Cases
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div
                            className="cursor-pointer rounded-md p-2 font-medium transition-colors duration-200 hover:bg-gray-50"
                            onClick={() => handleNavigation('/pricing')}
                        >
                            Pricing
                        </div>
                        <div
                            className="cursor-pointer rounded-md p-2 font-medium transition-colors duration-200 hover:bg-gray-50"
                            onClick={() => handleNavigation('/about')}
                        >
                            About
                        </div>
                    </div>

                    <div className="mt-4">
                        <Button
                            asChild
                            className="w-full"
                            onClick={() => setOpen(false)}
                        >
                            <Link to="/waitlist">Join Waitlist</Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
