import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from '@vernisai/utils';

const badgeVariants = cva(
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

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <span
                className={cn(badgeVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
