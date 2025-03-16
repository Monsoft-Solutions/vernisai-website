import { AudienceTrackingSelect } from './select.type';

// Result type for audience tracking service methods
export type AudienceTrackingResult = {
    success: boolean;
    data?: AudienceTrackingSelect;
    error?: string;
};
