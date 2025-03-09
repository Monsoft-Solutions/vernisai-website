// Import the Action type
import { Action } from './Action';

// Define the ActionCategory type
export type ActionCategory = {
    id: string;
    name: string;
    iconName: string;
    description: string;
    actions: Action[];
};
