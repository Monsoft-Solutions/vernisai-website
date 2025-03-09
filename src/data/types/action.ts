// Define the Action type
export type Action = {
    id: string;
    name: string;
    description: string;
    longDescription?: string;
    iconName?: string;
    benefits?: string[];
    useCases?: string[];
    implementation?: string;
    source?: string;
    sourceUrl?: string;
};
