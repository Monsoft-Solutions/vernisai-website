import { UseCase } from '../types/UseCase';
import { contentCreationUseCase } from './content-creation';
import { dataAnalysisUseCase } from './data-analysis';
import { socialMediaManagementUseCase } from './social-media-management';
import { knowledgeManagementUseCase } from './knowledge-management';
import { learningAccelerationUseCase } from './learning-acceleration';
import { personalAssistantUseCase } from './personal-assistant';
import { projectManagementUseCase } from './project-management';
import { emailManagementUseCase } from './email-management';
import { customerSupportUseCase } from './customer-support';
import { scheduleManagementUseCase } from './schedule-management';

export const useCases: UseCase[] = [
    contentCreationUseCase,
    dataAnalysisUseCase,
    socialMediaManagementUseCase,
    knowledgeManagementUseCase,
    learningAccelerationUseCase,
    personalAssistantUseCase,
    projectManagementUseCase,
    emailManagementUseCase,
    customerSupportUseCase,
    scheduleManagementUseCase,
    // Add more use cases as they are created
];

export function getUseCaseById(id: string): UseCase | undefined {
    return useCases.find((useCase) => useCase.id === id);
}

export type UseCaseIconMapping = {
    [key: string]: string;
};

// This will need to be updated as new use cases are added
export const useCaseIconNames: UseCaseIconMapping = {
    'content-creation': 'FileText',
    'data-analysis': 'BarChart3',
    'social-media-management': 'Share2',
    'knowledge-management': 'Library',
    'learning-acceleration': 'GraduationCap',
    'personal-assistant': 'UserCheck',
    'project-management': 'Kanban',
    'email-management': 'Mail',
    'customer-support': 'MessageSquare',
    'schedule-management': 'Calendar',
    // Add additional mappings as new use cases are created
};

export * from './content-creation';
export * from './data-analysis';
export * from './social-media-management';
export * from './knowledge-management';
export * from './learning-acceleration';
export * from './personal-assistant';
export * from './project-management';
export * from './email-management';
export * from './customer-support';
export * from './schedule-management';
export * from './use-cases-for-section';
