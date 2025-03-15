import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { ArrowRight } from 'lucide-react';

import { cn } from '../../lib/utils';
import { buttonVariants, getArrowAnimation } from './button-variant';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    showArrow?: boolean;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            animation,
            glow,
            rounded,
            asChild = false,
            showArrow = false,
            iconRight,
            iconLeft,
            loading = false,
            children,
            disabled,
            ...props
        },
        ref,
    ) => {
        const Comp = asChild ? Slot : 'button';
        const isDisabled = disabled || loading;

        // If showArrow is true and no custom iconRight is provided, use the default arrow
        const rightIcon =
            showArrow && !iconRight && !loading ? (
                <ArrowRight
                    className={`ml-2 h-4 w-4 transition-transform duration-300 ${getArrowAnimation()}`}
                    aria-hidden="true"
                />
            ) : iconRight && !loading ? (
                <span className="ml-2" aria-hidden="true">
                    {iconRight}
                </span>
            ) : null;

        // Add the left icon if provided
        const leftIcon =
            iconLeft && !loading ? (
                <span className="mr-2" aria-hidden="true">
                    {iconLeft}
                </span>
            ) : loading ? (
                <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            ) : null;

        // For asChild=true, we need to pass the children as is
        if (asChild) {
            return (
                <Comp
                    className={cn(
                        'group',
                        buttonVariants({
                            variant,
                            size,
                            animation,
                            glow,
                            rounded,
                            className,
                        }),
                    )}
                    ref={ref}
                    disabled={isDisabled}
                    {...props}
                >
                    {children}
                </Comp>
            );
        }

        // For regular buttons, we can add the group class and icons
        return (
            <Comp
                className={cn(
                    'group',
                    buttonVariants({
                        variant,
                        size,
                        animation,
                        glow,
                        rounded,
                        className,
                    }),
                )}
                ref={ref}
                disabled={isDisabled}
                {...props}
            >
                {leftIcon}
                <span>{children}</span>
                {rightIcon}
            </Comp>
        );
    },
);
Button.displayName = 'Button';

export { Button };
