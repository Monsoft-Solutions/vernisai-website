// Import the Action type
import { Action } from './action';

// Define the ActionCategory type
export type ActionCategory = {
    id: string;
    name: string;
    iconName: string;
    description: string;
    actions: Action[];
};
