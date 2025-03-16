import { WaitlistSelect } from './select.type';

// Result type for listing waitlist entries
export type WaitlistEntriesResult = {
    entries: WaitlistSelect[];
    count: number;
};
