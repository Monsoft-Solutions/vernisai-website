export interface Testimonial {
    quote: string;
    author: string;
    title: string;
    company: string;
    avatar: string;
    metrics?: {
        label: string;
        value: string;
    }[];
    industry?: string;
    useCase?: string;
}

// General testimonials for the homepage
export const generalTestimonials: Testimonial[] = [
    {
        quote: 'VernisAI has completely transformed how I manage my inbox. I save at least 5 hours every week that I used to spend sorting and responding to emails.',
        author: 'Sarah Johnson',
        title: 'Marketing Director',
        company: 'GrowthMasters',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
        quote: 'As someone with no technical background, I was amazed at how easy it was to set up automated workflows. VernisAI has made technology accessible to me.',
        author: 'Michael Chen',
        title: 'Small Business Owner',
        company: 'Urban Eats',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
        quote: "The meeting management features alone are worth it. My team's productivity has increased dramatically since we started using VernisAI to handle scheduling and follow-ups.",
        author: 'Priya Patel',
        title: 'Team Lead',
        company: 'TechInnovate',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
];

// Enhanced testimonials with specific metrics and detailed success stories for the pricing page
export const pricingTestimonials: Testimonial[] = [
    {
        quote: "After implementing VernisAI's Pro plan, our content production increased by 65% while reducing the time our team spent on repetitive tasks. The ROI was evident within the first month.",
        author: 'Jennifer Martinez',
        title: 'Content Operations Manager',
        company: 'MediaPulse',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        metrics: [
            { label: 'Time Saved', value: '22 hours/week' },
            { label: 'Content Output', value: '+65%' },
            { label: 'ROI', value: '3.8x' },
        ],
        industry: 'Digital Media',
        useCase: 'Content Production',
    },
    {
        quote: "Our customer support team was drowning in repetitive inquiries. VernisAI's automation workflows now handle 78% of our tier-1 support tickets automatically, allowing our team to focus on complex customer issues.",
        author: 'David Wilson',
        title: 'Customer Experience Director',
        company: 'SupportHero',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        metrics: [
            { label: 'Automated Responses', value: '78% of tickets' },
            { label: 'Response Time', value: 'From 4hrs to 12min' },
            { label: 'CSAT Score', value: 'Increased by 23%' },
        ],
        industry: 'SaaS',
        useCase: 'Customer Support',
    },
    {
        quote: "As a small marketing agency, we needed to scale our operations without adding headcount. VernisAI's Starter plan helped us automate our reporting workflows, saving each team member about 6 hours per week while improving accuracy.",
        author: 'Emma Rodriguez',
        title: 'Agency Owner',
        company: 'Bright Spark Marketing',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        metrics: [
            { label: 'Reports Automated', value: '100%' },
            { label: 'Time Saved', value: '6 hours/person/week' },
            { label: 'Error Rate', value: 'Reduced by 92%' },
        ],
        industry: 'Marketing Agency',
        useCase: 'Reporting Automation',
    },
    {
        quote: 'Our enterprise-level implementation of VernisAI has transformed how our 200+ person sales team manages their pipeline. The custom integrations with our CRM have eliminated data entry and improved forecast accuracy dramatically.',
        author: 'Robert Chang',
        title: 'VP of Sales Operations',
        company: 'GrowthForce',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
        metrics: [
            { label: 'Data Entry', value: 'Reduced by 94%' },
            { label: 'Forecast Accuracy', value: 'Improved by 37%' },
            { label: 'Sales Productivity', value: '+28%' },
        ],
        industry: 'Enterprise Software',
        useCase: 'Sales Operations',
    },
];

// Industry-specific testimonials
export const industryTestimonials: Record<string, Testimonial[]> = {
    marketing: [
        {
            quote: 'VernisAI has revolutionized our content calendar management. What used to take days of planning now happens automatically, with AI-suggested optimizations that have improved our engagement rates by 42%.',
            author: 'Alex Thompson',
            title: 'Head of Content',
            company: 'BrandBuilders',
            avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
            metrics: [
                { label: 'Planning Time', value: 'Reduced by 85%' },
                { label: 'Content Engagement', value: '+42%' },
                { label: 'Publishing Consistency', value: '100%' },
            ],
            industry: 'Marketing',
            useCase: 'Content Calendar',
        },
    ],
    healthcare: [
        {
            quote: 'In healthcare, documentation is critical but time-consuming. VernisAI helps our administrative staff process patient records and insurance forms in a fraction of the time, while maintaining HIPAA compliance.',
            author: 'Dr. Sarah Miller',
            title: 'Medical Director',
            company: 'HealthFirst Clinic',
            avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
            metrics: [
                { label: 'Admin Time', value: 'Reduced by 62%' },
                { label: 'Documentation Accuracy', value: '99.7%' },
                { label: 'Patient Satisfaction', value: 'Increased by 31%' },
            ],
            industry: 'Healthcare',
            useCase: 'Administrative Automation',
        },
    ],
    education: [
        {
            quote: 'As an educational institution, we use VernisAI to streamline grading, feedback, and administrative tasks. Our faculty now spends more time with students and less time on paperwork.',
            author: 'Professor James Wilson',
            title: 'Department Chair',
            company: 'Metropolitan University',
            avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
            metrics: [
                { label: 'Grading Time', value: 'Reduced by 47%' },
                { label: 'Student Feedback', value: '3x more detailed' },
                { label: 'Faculty Satisfaction', value: 'Increased by 58%' },
            ],
            industry: 'Education',
            useCase: 'Academic Administration',
        },
    ],
};
