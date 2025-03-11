import React from 'react';
import { getIconComponent } from './icon-utils';

interface UseCaseIconProps {
    iconName: string;
    className?: string;
}

export const UseCaseIcon: React.FC<UseCaseIconProps> = ({
    iconName,
    className = '',
}) => {
    // Get the icon component based on the name
    const IconComponent = getIconComponent(iconName);

    return <IconComponent className={className} />;
};
