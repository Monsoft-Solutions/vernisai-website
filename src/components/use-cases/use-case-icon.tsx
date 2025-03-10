import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface UseCaseIconProps {
    iconName: string;
    className?: string;
}

// Define a more accurate type for Lucide icons
type IconComponentType = React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>;

export const UseCaseIcon: React.FC<UseCaseIconProps> = ({
    iconName,
    className = '',
}) => {
    // Get the icon component based on the name
    const IconComponent =
        (LucideIcons as unknown as Record<string, IconComponentType>)[
            iconName
        ] || LucideIcons.FileQuestion;

    return <IconComponent className={className} />;
};

export function getIconComponent(iconName: string): IconComponentType {
    return (
        (LucideIcons as unknown as Record<string, IconComponentType>)[
            iconName
        ] || LucideIcons.FileQuestion
    );
}
