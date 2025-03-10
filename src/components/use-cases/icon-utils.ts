import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import React from 'react';

// Define a more accurate type for Lucide icons
export type IconComponentType = React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>;

export function getIconComponent(iconName: string): IconComponentType {
    return (
        (LucideIcons as unknown as Record<string, IconComponentType>)[
            iconName
        ] || LucideIcons.FileQuestion
    );
}
