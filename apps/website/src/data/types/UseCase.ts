export type UseCase = {
    id: string;
    name: string;
    shortDescription: string;
    iconName: string;
    iconBgColor: string;
    iconColor: string;
    overview: {
        paragraphs: string[];
    };
    applications: {
        title: string;
        description: string;
        benefit: string;
    }[];
    keyBenefits: string[];
    howItWorks: {
        steps: {
            title: string;
            description: string;
        }[];
    };
    featuredCapability?: {
        title: string;
        description: string;
        bulletPoints: string[];
        bgColor: string;
        borderColor: string;
        textColor: string;
    };
    cta: {
        title: string;
        description: string;
    };
};
