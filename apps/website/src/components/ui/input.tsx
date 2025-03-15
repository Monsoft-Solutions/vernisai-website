import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const inputVariants = cva(
    'flex w-full rounded-md border px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'border-gray-200 bg-white text-gray-700 placeholder:text-gray-500 focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
                filled: 'border-transparent bg-gray-100 text-gray-700 placeholder:text-gray-500 focus-visible:border-blue-600 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
                outline:
                    'border-gray-200 bg-transparent text-gray-700 placeholder:text-gray-500 focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
                error: 'border-error bg-white text-gray-700 placeholder:text-gray-500 focus-visible:border-error focus-visible:ring-2 focus-visible:ring-error focus-visible:ring-offset-2',
            },
            inputSize: {
                default: 'h-10',
                sm: 'h-8 px-2 py-1 text-xs',
                lg: 'h-11 px-4 py-3 text-base',
                xl: 'h-12 px-5 py-4 text-lg',
            },
            rounded: {
                default: 'rounded-md',
                full: 'rounded-full',
                none: 'rounded-none',
                sm: 'rounded-sm',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
            },
        },
        defaultVariants: {
            variant: 'default',
            inputSize: 'default',
            rounded: 'default',
        },
    },
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
        VariantProps<typeof inputVariants> {
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            variant,
            inputSize,
            rounded,
            icon,
            iconPosition = 'left',
            ...props
        },
        ref,
    ) => {
        return (
            <div className="relative w-full">
                {icon && iconPosition === 'left' && (
                    <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        inputVariants({ variant, inputSize, rounded }),
                        icon && iconPosition === 'left' && 'pl-10',
                        icon && iconPosition === 'right' && 'pr-10',
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
                {icon && iconPosition === 'right' && (
                    <div className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
                        {icon}
                    </div>
                )}
            </div>
        );
    },
);
Input.displayName = 'Input';

export { Input, inputVariants };
