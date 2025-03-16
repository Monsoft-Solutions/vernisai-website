import { WaitlistSelect } from './select.type';

// Result type for waitlist service methods
export type WaitlistResult = {
    success: boolean;
    data?: WaitlistSelect;
    error?: string;
};
