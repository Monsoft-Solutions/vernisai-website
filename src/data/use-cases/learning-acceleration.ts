import { UseCase } from '../types/UseCase';

export const learningAccelerationUseCase: UseCase = {
    id: 'learning-acceleration',
    name: 'Learning Acceleration',
    shortDescription:
        'Acquire knowledge and skills faster with AI-enhanced learning',
    iconName: 'GraduationCap',
    iconBgColor: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    overview: {
        paragraphs: [
            "In today's rapidly changing world, the ability to acquire new knowledge and skills quickly is a critical advantage for individuals and organizations. Traditional learning approaches are often time-consuming, generic, and fail to adapt to individual learning styles. Vernis AI transforms learning by personalizing content, identifying knowledge gaps, and creating interactive experiences that accelerate skill acquisition.",
            "Our AI-powered learning acceleration platform works with your existing content and learning objectives to create personalized learning pathways. Whether you're mastering a new professional skill, studying a complex subject, or onboarding employees, Vernis AI helps you learn more effectively in less time.",
        ],
    },
    applications: [
        {
            title: 'Personalized Learning Paths',
            description:
                'Create adaptive learning journeys that adjust based on your existing knowledge, learning style, and goals.',
            benefit:
                'Focus your time on exactly what you need to learn, avoiding redundancy.',
        },
        {
            title: 'Interactive Study Materials',
            description:
                'Transform static content into interactive questions, flashcards, summaries, and exercises.',
            benefit:
                'Improve retention by engaging with material actively rather than passively.',
        },
        {
            title: 'Knowledge Gap Analysis',
            description:
                'Identify specific areas where your understanding is incomplete or incorrect.',
            benefit:
                "Target your learning efforts precisely where they're most needed.",
        },
        {
            title: 'Concept Explanations',
            description:
                'Get clear, tailored explanations of complex concepts based on your background and learning style.',
            benefit:
                'Overcome learning obstacles with explanations that make sense to you.',
        },
        {
            title: 'Learning Reinforcement',
            description:
                'Receive automatically generated quizzes and exercises at optimal intervals for long-term retention.',
            benefit:
                'Ensure knowledge is retained through evidence-based spaced repetition.',
        },
        {
            title: 'Learning Analytics',
            description:
                'Track progress, identify patterns, and optimize your learning approach with detailed analytics.',
            benefit:
                'Continuously improve your learning efficiency based on personal data.',
        },
    ],
    keyBenefits: [
        'Reduce learning time by up to 60% through personalization',
        'Improve knowledge retention with active learning techniques',
        'Overcome complex learning challenges with tailored explanations',
        'Maintain consistent learning progress with smart scheduling',
        'Identify and fill knowledge gaps systematically',
        'Apply new knowledge faster in real-world situations',
    ],
    howItWorks: {
        steps: [
            {
                title: 'Define learning objectives',
                description:
                    'Specify what you want to learn and why, including your timeline and application goals.',
            },
            {
                title: 'Knowledge assessment',
                description:
                    'The system evaluates your current knowledge level to create a personalized starting point.',
            },
            {
                title: 'Content integration',
                description:
                    'Connect existing learning materials or access our library of resources across diverse subjects.',
            },
            {
                title: 'Adaptive learning experience',
                description:
                    'Engage with interactive content that adjusts in real-time based on your progress and needs.',
            },
            {
                title: 'Progress tracking',
                description:
                    'Monitor your learning journey with detailed analytics and personalized recommendations.',
            },
        ],
    },
    featuredCapability: {
        title: 'AI Learning Coach',
        description:
            'Vernis AI includes a personalized learning coach that enhances your learning experience:',
        bulletPoints: [
            "Ask questions to get clear, tailored explanations when you're stuck",
            'Receive personalized summaries that link new concepts to what you already know',
            'Get custom-generated practice exercises targeting your specific weak areas',
            'Receive motivational nudges and schedule suggestions based on your learning patterns',
            'Connect with recommended resources and learning approaches matched to your style',
        ],
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        textColor: 'text-cyan-700',
    },
    cta: {
        title: 'Ready to Transform Your Learning Experience?',
        description:
            'Join our waitlist to be among the first to experience the power of AI-enhanced learning with Vernis AI.',
    },
};
