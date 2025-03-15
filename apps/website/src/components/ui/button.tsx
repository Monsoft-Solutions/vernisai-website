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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            animation,
            glow,
            asChild = false,
            showArrow = false,
            iconRight,
            iconLeft,
            children,
            ...props
        },
        ref,
    ) => {
        const Comp = asChild ? Slot : 'button';

        // If showArrow is true and no custom iconRight is provided, use the default arrow
        const rightIcon =
            showArrow && !iconRight ? (
                <ArrowRight
                    className={`ml-2 h-4 w-4 transition-transform duration-300 ${getArrowAnimation()}`}
                />
            ) : iconRight ? (
                <span className="ml-2">{iconRight}</span>
            ) : null;

        // Add the left icon if provided
        const leftIcon = iconLeft ? (
            <span className="mr-2">{iconLeft}</span>
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
                            className,
                        }),
                    )}
                    ref={ref}
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
                        className,
                    }),
                )}
                ref={ref}
                {...props}
            >
                {leftIcon}
                {children}
                {rightIcon}
            </Comp>
        );
    },
);
Button.displayName = 'Button';

export { Button };
