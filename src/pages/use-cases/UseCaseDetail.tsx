import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { UseCaseTemplate } from '../../components/use-cases/use-case-template';
import { getUseCaseById } from '../../data/use-cases';
import { getIconComponent } from '../../components/use-cases/use-case-icon';

export const UseCaseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // If there's no ID, redirect to the use cases overview
    if (!id) {
        return <Navigate to="/use-cases" replace />;
    }

    // Get the use case by ID
    const useCase = getUseCaseById(id);

    // If the use case doesn't exist, redirect to the use cases overview
    if (!useCase) {
        return <Navigate to="/use-cases" replace />;
    }

    // Get the icon component
    const IconComponent = getIconComponent(useCase.iconName);

    return <UseCaseTemplate useCase={useCase} icon={IconComponent} />;
};
