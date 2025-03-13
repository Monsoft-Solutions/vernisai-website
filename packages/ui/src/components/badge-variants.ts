import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
    {
        variants: {
            variant: {
                default: 'bg-gray-100',
                outline: 'border border-gray-200',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);
