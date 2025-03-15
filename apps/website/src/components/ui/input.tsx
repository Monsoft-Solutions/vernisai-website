import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';
import { inputVariants } from './input-variant';

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

export { Input };
