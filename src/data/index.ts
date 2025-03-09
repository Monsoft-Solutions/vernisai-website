// Export types
export { type Action } from './types/Action';
export { type ActionCategory } from './types/ActionCategory';

// Export categories
export { fileOperationsCategory } from './categories/fileOperations';
export { developmentToolsCategory } from './categories/developmentTools';
export { webSearchCategory } from './categories/webSearch';
export { communicationCategory } from './categories/communication';
export { smartHomeCategory } from './categories/smartHome';
export { aiDataCategory } from './categories/aiData';
export { marketingSocialMediaCategory } from './categories/marketingSocialMedia';
export { ecommerceCategory } from './categories/ecommerce';
export { taskProjectManagementCategory } from './categories/taskProjectManagement';
export { analyticsReportingCategory } from './categories/analyticsReporting';
export { notificationsAlertsCategory } from './categories/notificationsAlerts';
export { contentDocumentationCategory } from './categories/contentDocumentation';

// Create the action categories array
import { fileOperationsCategory } from './categories/fileOperations';
import { developmentToolsCategory } from './categories/developmentTools';
import { webSearchCategory } from './categories/webSearch';
import { communicationCategory } from './categories/communication';
import { smartHomeCategory } from './categories/smartHome';
import { aiDataCategory } from './categories/aiData';
import { marketingSocialMediaCategory } from './categories/marketingSocialMedia';
import { ecommerceCategory } from './categories/ecommerce';
import { taskProjectManagementCategory } from './categories/taskProjectManagement';
import { analyticsReportingCategory } from './categories/analyticsReporting';
import { notificationsAlertsCategory } from './categories/notificationsAlerts';
import { contentDocumentationCategory } from './categories/contentDocumentation';
import { Action } from './types/Action';

export const actionCategories = [
    fileOperationsCategory,
    developmentToolsCategory,
    webSearchCategory,
    communicationCategory,
    smartHomeCategory,
    aiDataCategory,
    marketingSocialMediaCategory,
    ecommerceCategory,
    taskProjectManagementCategory,
    analyticsReportingCategory,
    notificationsAlertsCategory,
    contentDocumentationCategory,
];

// Helper function to get a specific action by ID
export const getActionById = (actionId: string): Action | undefined => {
    for (const category of actionCategories) {
        const action = category.actions.find((a: Action) => a.id === actionId);
        if (action) return action;
    }
    return undefined;
};

// Helper function to get a specific category by ID
export const getCategoryById = (categoryId: string) => {
    return actionCategories.find((category) => category.id === categoryId);
};
