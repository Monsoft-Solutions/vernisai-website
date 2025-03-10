import { UseCase } from '../types/UseCase';
import { contentCreationUseCase } from './content-creation';
import { dataAnalysisUseCase } from './data-analysis';

export const useCases: UseCase[] = [
    contentCreationUseCase,
    dataAnalysisUseCase,
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
    // Add additional mappings as new use cases are created
};

export * from './content-creation';
export * from './data-analysis';
