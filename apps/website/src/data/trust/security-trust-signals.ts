// Example trust signals
export interface TrustSignal {
    icon:
        | 'security'
        | 'privacy'
        | 'uptime'
        | 'certification'
        | 'users'
        | 'support';
    title: string;
    description: string;
}

export const securityTrustSignals: TrustSignal[] = [
    {
        icon: 'security',
        title: 'End-to-End Encryption',
        description:
            'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
    },
    {
        icon: 'privacy',
        title: 'GDPR & CCPA Compliant',
        description:
            'We adhere to global privacy regulations and give you control over your data.',
    },
    {
        icon: 'uptime',
        title: '99.99% Uptime Guarantee',
        description:
            'Our platform is built on reliable infrastructure with redundancy across multiple regions.',
    },
    {
        icon: 'certification',
        title: 'SOC 2 Type II Certified',
        description:
            'We undergo regular security audits and maintain compliance with industry standards.',
    },
    {
        icon: 'users',
        title: 'Role-Based Access Control',
        description:
            'Granular permissions ensure users only access what they need.',
    },
    {
        icon: 'support',
        title: '24/7 Security Monitoring',
        description:
            'Our security team continuously monitors for threats and vulnerabilities.',
    },
];
