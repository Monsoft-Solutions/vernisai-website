import { Link } from 'react-router-dom';
import { Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

export function MeetingEnhancement() {
    // Meeting enhancement use cases
    const meetingUseCases = [
        {
            title: 'Meeting Summaries',
            description:
                'Automatically generate concise, accurate summaries of meetings with key points and decisions.',
            benefit:
                'Save time reviewing meetings and ensure nothing important is missed.',
        },
        {
            title: 'Action Item Extraction',
            description:
                'Identify and organize action items, assigning them to team members with deadlines.',
            benefit:
                'Improve follow-through on commitments made during meetings.',
        },
        {
            title: 'Meeting Preparation',
            description:
                'Generate agendas, gather relevant documents, and provide context for upcoming discussions.',
            benefit:
                'Ensure meetings start with clear objectives and necessary information.',
        },
        {
            title: 'Real-time Meeting Assistance',
            description:
                'Provide live information, research, and context during meetings when questions arise.',
            benefit:
                'Make more informed decisions without delaying for research.',
        },
        {
            title: 'Meeting Scheduling',
            description:
                'Coordinate calendars, suggest optimal meeting times, and handle scheduling communications.',
            benefit:
                'Eliminate back-and-forth emails and find meeting times faster.',
        },
        {
            title: 'Meeting Analytics',
            description:
                'Track meeting patterns, participation levels, and effectiveness over time.',
            benefit: 'Optimize your meeting culture with data-driven insights.',
        },
    ];

    // Key benefits of meeting enhancement
    const keyBenefits = [
        'Reduce meeting time by up to 30% with better preparation and focus',
        'Capture 100% of important information without manual note-taking',
        'Increase follow-through on action items by 75%',
        'Make meetings more inclusive for remote and asynchronous team members',
        'Eliminate the need for detailed meeting minutes and transcription',
        'Transform meetings from time drains to productive collaboration sessions',
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-4xl">
                {/* Back Button */}
                <Link
                    to="/use-cases"
                    className="mb-8 inline-flex items-center text-blue-600 hover:underline"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Back to Use Cases</span>
                </Link>

                {/* Hero Section */}
                <div className="mb-12 text-center">
                    <motion.div
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Calendar className="h-8 w-8 text-purple-600" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-4xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Meeting Enhancement
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Make meetings more efficient and productive
                    </motion.p>
                </div>

                {/* Overview Section */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
                    <p className="mb-4 text-gray-700">
                        Meetings are essential for collaboration but often
                        consume excessive time with limited outcomes. Vernis AI
                        transforms the entire meeting lifecycle—from preparation
                        and facilitation to documentation and follow-up—making
                        meetings more productive and less time-consuming.
                    </p>
                    <p className="text-gray-700">
                        Our AI meeting assistant works across your favorite
                        meeting platforms to capture information, provide
                        context, organize outcomes, and ensure follow-through.
                        By handling the administrative burden of meetings,
                        Vernis AI lets participants focus on meaningful
                        discussion and decision-making.
                    </p>
                </motion.div>

                {/* Meeting Enhancement Use Cases */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Meeting Enhancement Applications
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {meetingUseCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                className="rounded-lg border border-gray-200 p-6 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 * index + 0.5,
                                }}
                            >
                                <h3 className="mb-2 text-xl font-medium">
                                    {useCase.title}
                                </h3>
                                <p className="mb-3 text-gray-600">
                                    {useCase.description}
                                </p>
                                <p className="text-sm font-medium text-blue-600">
                                    Benefit: {useCase.benefit}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Benefits Section */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="mb-6 text-2xl font-semibold">
                        Key Benefits
                    </h2>
                    <div className="rounded-lg bg-gray-50 p-6">
                        <ul className="space-y-4">
                            {keyBenefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.1 * index + 0.7,
                                    }}
                                >
                                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                                    <span>{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* How it Works */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <h2 className="mb-4 text-2xl font-semibold">
                        How It Works
                    </h2>
                    <ol className="ml-5 list-decimal space-y-4">
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Connect to your calendar and meeting tools:
                            </span>{' '}
                            Integrate with platforms like Google Calendar,
                            Microsoft Teams, Zoom, and Slack.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Pre-meeting preparation:
                            </span>{' '}
                            Receive AI-generated agendas, relevant document
                            summaries, and context for upcoming meetings.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                During the meeting:
                            </span>{' '}
                            The AI assistant captures discussions, decisions,
                            and action items in real-time while providing
                            relevant information when needed.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Post-meeting organization:
                            </span>{' '}
                            Automatically receive structured summaries, action
                            item lists with assignees, and follow-up reminders.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-medium">
                                Continuous improvement:
                            </span>{' '}
                            The system learns from your meeting patterns to
                            suggest process improvements and optimize future
                            meetings.
                        </li>
                    </ol>
                </motion.div>

                {/* Featured Capability */}
                <motion.div
                    className="mb-12 rounded-lg border border-purple-200 bg-purple-50 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h3 className="mb-3 text-xl font-semibold text-purple-700">
                        Featured Capability: Smart Action Item Tracking
                    </h3>
                    <p className="mb-4 text-gray-700">
                        Vernis AI's action item tracking goes beyond simple task
                        lists:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-gray-700">
                        <li>
                            Automatically identifies commitments made during
                            meetings
                        </li>
                        <li>
                            Assigns tasks to the right people based on context
                        </li>
                        <li>Sets reasonable deadlines based on discussion</li>
                        <li>Sends personalized follow-up reminders</li>
                        <li>
                            Tracks completion status and escalates when needed
                        </li>
                        <li>
                            Provides analytics on follow-through rates by team
                            and individual
                        </li>
                    </ul>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="rounded-lg bg-blue-50 p-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    <h2 className="mb-4 text-2xl font-semibold">
                        Ready to Transform Your Meetings?
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Join our waitlist to be among the first to experience
                        the power of AI-enhanced meetings with Vernis AI.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/waitlist">Join our waitlist</Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
