import React from 'react';
import { FAQItem } from '../components/FAQ';

// General FAQ items about the company and platform
export const generalFAQItems: FAQItem[] = [
    {
        question: 'What is VernisAI?',
        answer: 'VernisAI is an AI-powered platform that helps businesses automate and enhance their operations through intelligent solutions.',
    },
    {
        question: 'How does VernisAI work?',
        answer: 'VernisAI uses advanced machine learning algorithms to analyze your data, identify patterns, and provide actionable insights to improve your business processes.',
    },
    {
        question: 'Is VernisAI suitable for my business?',
        answer: "VernisAI is designed to be flexible and adaptable to businesses of all sizes and across various industries. Whether you're a small startup or a large enterprise, our solutions can be tailored to meet your specific needs.",
    },
    {
        question: 'How secure is my data with VernisAI?',
        answer: 'We take data security very seriously. All data is encrypted both in transit and at rest, and we comply with industry-standard security protocols to ensure your information remains protected.',
    },
    {
        question: 'What kind of support does VernisAI offer?',
        answer: 'We provide comprehensive support including documentation, tutorials, and dedicated customer service to help you get the most out of our platform.',
    },
];

// FAQ items for the Home page
export const homeFAQItems: FAQItem[] = [
    {
        question: 'What makes VernisAI different from other AI platforms?',
        answer: 'VernisAI stands out by democratizing AI-driven automation, making it accessible to non-technical users. Our platform enables complex workflow automation across multiple platforms without requiring coding knowledge.',
    },
    {
        question: 'Do I need technical knowledge to use VernisAI?',
        answer: 'No, VernisAI is designed with a user-friendly interface that allows non-technical users to create and manage automated workflows without writing a single line of code.',
    },
    {
        question: 'How quickly can I get started with VernisAI?',
        answer: 'You can get started with VernisAI in minutes. Simply sign up for an account, explore our pre-built templates, and start creating your own automated workflows right away.',
    },
    {
        question: 'Can VernisAI integrate with the tools I already use?',
        answer: 'Yes, VernisAI integrates with a wide range of popular business tools and platforms including Google Workspace, Microsoft Office, Slack, Trello, and many more. Our extensive library of connectors allows you to automate workflows across your existing tech stack.',
    },
    {
        question: 'Is there a free trial available?',
        answer: "Yes, we offer a free trial that allows you to explore VernisAI's features and capabilities before committing to a subscription. Sign up for early access on our website to be among the first to try our platform.",
    },
];

// FAQ items for the Features page
export const featuresFAQItems: FAQItem[] = [
    {
        question: 'What are Actions in VernisAI?',
        answer: 'Actions are well-defined, atomic operations that interact with third-party services like Google Drive, Slack, and Twitter. They serve as the building blocks for creating automated workflows in VernisAI.',
    },
    {
        question: 'How do Agents work in VernisAI?',
        answer: 'Agents in VernisAI are AI-powered entities that can perform tasks autonomously. They can make decisions, process information, and execute actions based on predefined rules or learned behaviors, allowing for sophisticated automation scenarios.',
    },
    {
        question: 'What are Pipelines and how do they help with automation?',
        answer: 'Pipelines in VernisAI allow you to connect multiple actions and agents into cohesive workflows. They enable you to create complex automation sequences that can handle sophisticated business processes across different platforms and services.',
    },
    {
        question: 'How does the Knowledge Base feature enhance my workflows?',
        answer: 'The Knowledge Base feature allows your agents to access and utilize specific information relevant to your business. This enables more contextually aware automations that can reference your company data, documentation, or other resources when making decisions or performing tasks.',
    },
    {
        question: 'Can I customize features to fit my specific business needs?',
        answer: 'Yes, all features in VernisAI are highly customizable. You can configure actions, agents, and pipelines to match your specific business processes and requirements, ensuring that the automation works exactly as you need it to.',
    },
];

// FAQ items for the Use Cases page
export const useCasesFAQItems: FAQItem[] = [
    {
        question: 'How can VernisAI help with task automation?',
        answer: 'VernisAI excels at automating repetitive tasks across various platforms. From data entry and file management to communication and reporting, our platform can handle routine operations automatically, saving you time and reducing manual effort.',
    },
    {
        question: 'What are some examples of knowledge management use cases?',
        answer: 'VernisAI can transform your knowledge management by automatically organizing documents, extracting key information, creating searchable knowledge bases, and even answering questions based on your company data. This makes information retrieval faster and more efficient.',
    },
    {
        question: 'How does VernisAI enhance content creation?',
        answer: 'For content creation, VernisAI can help generate drafts, optimize existing content, schedule publications, and analyze performance. This accelerates your content pipeline while maintaining quality and consistency across channels.',
    },
    {
        question: 'Can VernisAI improve meeting productivity?',
        answer: 'Yes, VernisAI can enhance meetings by automatically scheduling, creating agendas, taking notes, transcribing conversations, and generating action items. This ensures that meetings are more focused and productive, with clear follow-up tasks.',
    },
    {
        question: 'How does VernisAI assist with project management?',
        answer: 'VernisAI streamlines project management by automating task assignment, progress tracking, deadline reminders, and status reporting. This keeps projects on track and team members aligned without constant manual oversight.',
    },
    {
        question: 'What personal assistant capabilities does VernisAI offer?',
        answer: 'As a personal assistant, VernisAI can manage your calendar, prioritize emails, set reminders, prepare briefings before meetings, and handle routine correspondence. This allows you to focus on high-value work while the platform handles day-to-day administrative tasks.',
    },
];

// FAQ items about pricing and plans
export const pricingFAQItems: FAQItem[] = [
    {
        question: 'What pricing plans does VernisAI offer?',
        answer: 'VernisAI offers flexible pricing plans including a free tier for small projects, professional plans for growing businesses, and enterprise solutions for larger organizations. Visit our pricing page for detailed information.',
    },
    {
        question: 'Is there a free trial available?',
        answer: 'Yes, we offer a 14-day free trial of our professional plan so you can experience the full capabilities of our platform before making a commitment.',
    },
    {
        question: 'Can I upgrade or downgrade my plan?',
        answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated based on the remaining time in your billing cycle.',
    },
    {
        question:
            'Do you offer discounts for non-profits or educational institutions?',
        answer: 'Yes, we offer special pricing for non-profit organizations, educational institutions, and startups. Please contact our sales team for more information.',
    },
];

// FAQ items about technical aspects
export const technicalFAQItems: FAQItem[] = [
    {
        question: 'What technologies does VernisAI use?',
        answer: 'VernisAI is built on a modern tech stack including machine learning frameworks, cloud infrastructure, and secure APIs to ensure reliability, scalability, and performance.',
    },
    {
        question: 'Can VernisAI integrate with my existing tools?',
        answer: 'Yes, VernisAI offers robust API integrations with many popular business tools and platforms. We also provide custom integration solutions for enterprise clients.',
    },
    {
        question: 'What are the system requirements for using VernisAI?',
        answer: 'VernisAI is a cloud-based solution that works in any modern web browser. There are no special hardware or software requirements beyond an internet connection.',
    },
    {
        question: 'How often is the platform updated?',
        answer: 'We continuously improve our platform with regular updates and new features. Major updates are typically released quarterly, with smaller improvements and bug fixes deployed more frequently.',
    },
];

// FAQ items about getting started
export const gettingStartedFAQItems: FAQItem[] = [
    {
        question: 'How can I get started with VernisAI?',
        answer: React.createElement(
            React.Fragment,
            null,
            React.createElement('p', null, 'Getting started is easy! Simply:'),
            React.createElement(
                'ol',
                { className: 'list-decimal pl-5 mt-2 space-y-1' },
                React.createElement('li', null, 'Sign up for an account'),
                React.createElement('li', null, 'Complete your profile'),
                React.createElement('li', null, 'Connect your data sources'),
                React.createElement('li', null, 'Start exploring insights'),
            ),
            React.createElement(
                'p',
                { className: 'mt-2' },
                'Our team is also available to help with onboarding if needed.',
            ),
        ),
    },
    {
        question: 'How long does it take to set up VernisAI?',
        answer: 'Basic setup can be completed in minutes. For more complex integrations or enterprise deployments, our team will work with you to create a customized implementation plan.',
    },
    {
        question: 'Is training required to use VernisAI?',
        answer: 'VernisAI is designed to be intuitive and user-friendly. We provide comprehensive documentation, video tutorials, and webinars to help you get the most out of our platform. Advanced training sessions are also available for enterprise clients.',
    },
];
