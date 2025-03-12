import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@vernisai/utils';
import { badgeVariants } from './badge-variants';

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

export { Badge };
