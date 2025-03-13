import { FAQItem } from '../components/EnhancedFAQ';

// General FAQ items about the company and platform
export const generalFAQItems: FAQItem[] = [
    {
        question: 'What is VernisAI?',
        answer: 'VernisAI is an AI-powered platform that helps businesses automate and enhance their operations through intelligent solutions.',
        category: 'General',
    },
    {
        question: 'How does VernisAI work?',
        answer: 'VernisAI uses advanced machine learning algorithms to analyze your data, identify patterns, and provide actionable insights to improve your business processes.',
        category: 'General',
    },
    {
        question: 'Is VernisAI suitable for my business?',
        answer: "VernisAI is designed to be flexible and adaptable to businesses of all sizes and across various industries. Whether you're a small startup or a large enterprise, our solutions can be tailored to meet your specific needs.",
        category: 'General',
    },
    {
        question: 'How secure is my data with VernisAI?',
        answer: 'We take data security very seriously. All data is encrypted both in transit and at rest, and we comply with industry-standard security protocols to ensure your information remains protected.',
        category: 'Security',
    },
    {
        question: 'What kind of support does VernisAI offer?',
        answer: 'We provide comprehensive support including documentation, tutorials, and dedicated customer service to help you get the most out of our platform.',
        category: 'Support',
    },
];

// FAQ items for the Home page
export const homeFAQItems: FAQItem[] = [
    {
        question: 'What makes VernisAI different from other AI platforms?',
        answer: 'VernisAI stands out by democratizing AI-driven automation, making it accessible to non-technical users. Our platform enables complex workflow automation across multiple platforms without requiring coding knowledge.',
        category: 'General',
    },
    {
        question: 'Do I need technical knowledge to use VernisAI?',
        answer: 'No, VernisAI is designed with a user-friendly interface that allows non-technical users to create and manage automated workflows without writing a single line of code.',
        category: 'Usage',
    },
    {
        question: 'How quickly can I get started with VernisAI?',
        answer: 'You can get started with VernisAI in minutes. Simply sign up for an account, explore our pre-built templates, and start creating your own automated workflows right away.',
        category: 'Getting Started',
    },
    {
        question: 'Can VernisAI integrate with the tools I already use?',
        answer: 'Yes, VernisAI integrates with a wide range of popular business tools and platforms including Google Workspace, Microsoft Office, Slack, Trello, and many more. Our extensive library of connectors allows you to automate workflows across your existing tech stack.',
        category: 'Integrations',
    },
    {
        question: 'Is there a free trial available?',
        answer: "Yes, we offer a free trial that allows you to explore VernisAI's features and capabilities before committing to a subscription. Sign up for early access on our website to be among the first to try our platform.",
        category: 'Pricing',
    },
];

// FAQ items for the Features page
export const featuresFAQItems: FAQItem[] = [
    {
        question: 'What are Actions in VernisAI?',
        answer: 'Actions are well-defined, atomic operations that interact with third-party services like Google Drive, Slack, and Twitter. They serve as the building blocks for creating automated workflows in VernisAI.',
        category: 'Features',
    },
    {
        question: 'How do Agents work in VernisAI?',
        answer: 'Agents in VernisAI are AI-powered entities that can perform tasks autonomously. They can make decisions, process information, and execute actions based on predefined rules or learned behaviors, allowing for sophisticated automation scenarios.',
        category: 'Features',
    },
    {
        question: 'What are Pipelines and how do they help with automation?',
        answer: 'Pipelines in VernisAI allow you to connect multiple actions and agents into cohesive workflows. They enable you to create complex automation sequences that can handle sophisticated business processes across different platforms and services.',
        category: 'Features',
    },
    {
        question: 'How does the Knowledge Base feature enhance my workflows?',
        answer: 'The Knowledge Base feature allows your agents to access and utilize specific information relevant to your business. This enables more contextually aware automations that can reference your company data, documentation, or other resources when making decisions or performing tasks.',
        category: 'Features',
    },
    {
        question: 'Can I customize features to fit my specific business needs?',
        answer: 'Yes, all features in VernisAI are highly customizable. You can configure actions, agents, and pipelines to match your specific business processes and requirements, ensuring that the automation works exactly as you need it to.',
        category: 'Features',
    },
];

// FAQ items for the Use Cases page
export const useCasesFAQItems: FAQItem[] = [
    {
        question: 'How can VernisAI help with task automation?',
        answer: 'VernisAI excels at automating repetitive tasks across various platforms. From data entry and file management to communication and reporting, our platform can handle routine operations automatically, saving you time and reducing manual effort.',
        category: 'Use Cases',
    },
    {
        question: 'What are some examples of knowledge management use cases?',
        answer: 'VernisAI can transform your knowledge management by automatically organizing documents, extracting key information, creating searchable knowledge bases, and even answering questions based on your company data. This makes information retrieval faster and more efficient.',
        category: 'Use Cases',
    },
    {
        question: 'How does VernisAI enhance content creation?',
        answer: 'For content creation, VernisAI can help generate drafts, optimize existing content, schedule publications, and analyze performance. This accelerates your content pipeline while maintaining quality and consistency across channels.',
        category: 'Use Cases',
    },
    {
        question: 'Can VernisAI improve meeting productivity?',
        answer: 'Yes, VernisAI can enhance meetings by automatically scheduling, creating agendas, taking notes, transcribing conversations, and generating action items. This ensures that meetings are more focused and productive, with clear follow-up tasks.',
        category: 'Use Cases',
    },
    {
        question: 'How does VernisAI assist with project management?',
        answer: 'VernisAI streamlines project management by automating task assignment, progress tracking, deadline reminders, and status reporting. This keeps projects on track and team members aligned without constant manual oversight.',
        category: 'Use Cases',
    },
    {
        question: 'What personal assistant capabilities does VernisAI offer?',
        answer: 'As a personal assistant, VernisAI can manage your calendar, prioritize emails, set reminders, prepare briefings before meetings, and handle routine correspondence. This allows you to focus on high-value work while the platform handles day-to-day administrative tasks.',
        category: 'Use Cases',
    },
];

// FAQ items about pricing and plans
export const pricingFAQItems: FAQItem[] = [
    {
        question: 'What pricing plans does VernisAI offer?',
        answer: 'VernisAI offers three main plans: Starter, Pro, and Team. Each plan includes different features and usage limits tailored to different business needs.',
        category: 'Pricing',
    },
    {
        question: 'Is there a free trial available?',
        answer: 'Yes, all our plans come with a 14-day free trial, so you can experience the full capabilities of our platform before making a commitment. No credit card is required to start your trial.',
        category: 'Pricing',
    },
    {
        question: 'What happens if I exceed my plan limits?',
        answer: `If you approach your monthly limits, we'll notify you so you can upgrade your plan or manage your usage. We'll never charge you extra without your consent.`,
        category: 'Pricing',
    },
    {
        question: 'Can I upgrade or downgrade my plan?',
        answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated based on the remaining time in your billing cycle.',
        category: 'Pricing',
    },
    {
        question: "What's the difference between monthly and annual billing?",
        answer: "Annual billing offers a 20% discount compared to monthly billing. You'll be charged once per year instead of monthly, making it more economical for long-term use.",
        category: 'Pricing',
    },
    {
        question:
            'Do you offer discounts for non-profits or educational institutions?',
        answer: 'Yes, we offer special pricing for non-profit organizations, educational institutions, and startups. Please contact our sales team for more information about our discount programs.',
        category: 'Pricing',
    },
    {
        question: 'Can I add team members to my plan?',
        answer: 'Yes, our Pro plan supports up to 5 team members, while the Team plan supports unlimited team members. The Starter plan is limited to a single user.',
        category: 'Pricing',
    },
    {
        question: 'How do AI operations work? What counts as an operation?',
        answer: 'AI operations include any task performed by our AI, such as generating content, analyzing data, or automating workflows. Each discrete AI task counts as one operation toward your monthly limit.',
        category: 'Pricing',
    },
];

// FAQ items about technical aspects
export const technicalFAQItems: FAQItem[] = [
    {
        question: 'What technologies does VernisAI use?',
        answer: 'VernisAI is built on a modern tech stack including machine learning frameworks, cloud infrastructure, and secure APIs to ensure reliability, scalability, and performance.',
        category: 'Technical',
    },
    {
        question: 'Can VernisAI integrate with my existing tools?',
        answer: 'Yes, VernisAI offers robust API integrations with many popular business tools and platforms. We also provide custom integration solutions for enterprise clients.',
        category: 'Technical',
    },
    {
        question: 'What are the system requirements for using VernisAI?',
        answer: 'VernisAI is a cloud-based solution that works in any modern web browser. There are no special hardware or software requirements beyond an internet connection.',
        category: 'Technical',
    },
    {
        question: 'How often is the platform updated?',
        answer: 'We continuously improve our platform with regular updates and new features. Major updates are typically released quarterly, with smaller improvements and bug fixes deployed more frequently.',
        category: 'Technical',
    },
];

// FAQ items about getting started
export const gettingStartedFAQItems: FAQItem[] = [
    {
        question: 'How can I get started with VernisAI?',
        answer: `
            <p>Getting started is easy! Simply:</p>
            <ol class="list-decimal pl-5 mt-2 space-y-1">
                <li>Sign up for an account</li>
                <li>Complete your profile</li>
                <li>Connect your data sources</li>
                <li>Start exploring insights</li>
            </ol>
            <p class="mt-2">Our team is also available to help with onboarding if needed.</p>
        `,
        category: 'Getting Started',
    },
    {
        question: 'How long does it take to set up VernisAI?',
        answer: 'Basic setup can be completed in minutes. For more complex integrations or enterprise deployments, our team will work with you to create a customized implementation plan.',
        category: 'Getting Started',
    },
    {
        question: 'Is training required to use VernisAI?',
        answer: 'VernisAI is designed to be intuitive and user-friendly. We provide comprehensive documentation, video tutorials, and webinars to help you get the most out of our platform. Advanced training sessions are also available for enterprise clients.',
        category: 'Getting Started',
    },
];

// FAQ data for different sections of the site

// Pricing FAQs
export const pricingFAQs: FAQItem[] = [
    {
        question: 'What is included in the free trial?',
        answer: 'Our 14-day free trial includes full access to all features of the Pro plan, including unlimited workflows, all integrations, and premium support. No credit card required to start.',
        category: 'Pricing',
    },
    {
        question: 'Can I change plans at any time?',
        answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.',
        category: 'Pricing',
    },
    {
        question: 'Do you offer discounts for annual billing?',
        answer: 'Yes, we offer a 20% discount when you choose annual billing instead of monthly billing.',
        category: 'Pricing',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Team plans, we also offer invoicing with net-30 terms.',
        category: 'Billing',
    },
    {
        question: 'Is there a limit to how many workflows I can create?',
        answer: 'The Starter plan includes up to 5 workflows. The Pro plan includes 10 workflows. The Team plan includes unlimited workflows with additional governance features.',
        category: 'Features',
    },
    {
        question: 'What happens when my free trial ends?',
        answer: "When your free trial ends, you can choose to subscribe to one of our paid plans to continue using VernisAI. If you don't subscribe, your account will be downgraded to a limited version with basic features.",
        category: 'Billing',
    },
    {
        question: "Do you offer a refund if I'm not satisfied?",
        answer: "Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with VernisAI within the first 30 days of your paid subscription, contact our support team for a full refund.",
        category: 'Billing',
    },
    {
        question: 'What kind of support is included with each plan?',
        answer: 'The Starter plan includes community support. The Pro plan includes email support with a 24-hour response time. The Team plan includes dedicated support with a 4-hour response time during business hours.',
        category: 'Support',
    },
    {
        question: 'Can I use VernisAI for my entire team?',
        answer: 'Yes, our Team plan supports up to 5 users. The Starter and Pro plans are both limited to a single user each.',
        category: 'Features',
    },
    {
        question: 'Do you offer custom pricing for larger teams?',
        answer: 'Yes, for teams larger than 20 users, please contact our sales team for custom pricing options tailored to your specific needs.',
        category: 'Pricing',
    },
];
