import { useState } from 'react';
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
                <Button variant="ghost" size="icon" className="p-1.5">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[300px] overflow-y-auto sm:w-[350px]"
            >
                <SheetHeader className="mb-4 border-b pb-2">
                    <SheetTitle className="flex items-center justify-between">
                        <Logo
                            showLogo={true}
                            showText={true}
                            logoSize="md"
                            textSize="md"
                        />
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5 py-2">
                    {/* Features/How It Works Section */}
                    <div className="space-y-3">
                        <div
                            className="flex cursor-pointer items-center justify-between rounded-md bg-gray-50/50 p-2 hover:bg-gray-100/60"
                            onClick={() => handleNavigation('/features')}
                        >
                            <h3 className="flex items-center text-base font-semibold">
                                <span className="mr-2 rounded-full bg-purple-100 p-1.5">
                                    <Brain className="h-4 w-4 text-purple-700" />
                                </span>
                                How It Works
                            </h3>
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                        </div>
                        <div className="ml-2 flex flex-col gap-2 border-l border-gray-200 pl-3">
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation('/features/actions')
                                    }
                                >
                                    <div className="rounded-full bg-purple-100 p-1.5">
                                        <Puzzle className="h-3.5 w-3.5 text-purple-700" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        Actions
                                    </span>
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
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation('/features/pipelines')
                                    }
                                >
                                    <div className="rounded-full bg-blue-100 p-1.5">
                                        <Workflow className="h-3.5 w-3.5 text-blue-700" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        Pipelines
                                    </span>
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
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation('/features/agents')
                                    }
                                >
                                    <div className="rounded-full bg-green-100 p-1.5">
                                        <Brain className="h-3.5 w-3.5 text-green-700" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        Agents
                                    </span>
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
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/features/knowledge-base',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-amber-100 p-1.5">
                                        <Sparkles className="h-3.5 w-3.5 text-amber-700" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        Knowledge Base
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Use Cases Section */}
                    <div className="space-y-3">
                        <div
                            className="flex cursor-pointer items-center justify-between rounded-md bg-gray-50/50 p-2 hover:bg-gray-100/60"
                            onClick={() => handleNavigation('/use-cases')}
                        >
                            <h3 className="flex items-center text-base font-semibold">
                                <span className="mr-2 rounded-full bg-blue-100 p-1.5">
                                    <BrainCircuit className="h-4 w-4 text-blue-700" />
                                </span>
                                Use Cases
                            </h3>
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                        </div>
                        <div className="ml-2 grid grid-cols-1 gap-x-2 gap-y-2 border-l border-gray-200 pl-3 sm:grid-cols-2">
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
                            >
                                <div
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/task-automation',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-yellow-100 p-1.5">
                                        <Zap className="h-3.5 w-3.5 text-yellow-600" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        Task Automation
                                    </span>
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
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/personal-assistant',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-indigo-100 p-1.5">
                                        <UserCircle className="h-3.5 w-3.5 text-indigo-600" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        Personal Assistant
                                    </span>
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
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/content-creation',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-green-100 p-1.5">
                                        <FileText className="h-3.5 w-3.5 text-green-600" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        Content Creation
                                    </span>
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
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/knowledge-management',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-blue-100 p-1.5">
                                        <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        Knowledge Mgmt
                                    </span>
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
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation(
                                            '/use-cases/meeting-enhancement',
                                        )
                                    }
                                >
                                    <div className="rounded-full bg-purple-100 p-1.5">
                                        <Calendar className="h-3.5 w-3.5 text-purple-600" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        Meetings
                                    </span>
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
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-50"
                                    onClick={() =>
                                        handleNavigation('/use-cases')
                                    }
                                >
                                    <div className="rounded-full bg-purple-100 p-1.5">
                                        <ChevronRight className="h-3.5 w-3.5 text-purple-600" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        See All Use Cases
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Other Navigation Links */}
                    <div className="space-y-1 pt-1">
                        <div
                            className="flex cursor-pointer items-center gap-2.5 rounded-md p-3 transition-colors duration-200 hover:bg-gray-50"
                            onClick={() => handleNavigation('/pricing')}
                        >
                            <div className="text-base font-medium">Pricing</div>
                        </div>
                        <div
                            className="flex cursor-pointer items-center gap-2.5 rounded-md p-3 transition-colors duration-200 hover:bg-gray-50"
                            onClick={() => handleNavigation('/about')}
                        >
                            <div className="text-base font-medium">About</div>
                        </div>
                    </div>

                    {/* Join Waitlist Button */}
                    <div className="mt-6 border-t border-gray-200 pt-4">
                        <Button
                            asChild
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md transition-all duration-200 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg"
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
