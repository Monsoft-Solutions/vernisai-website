import { type ReactNode, type HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'outline' | 'default';
    className?: string;
    children: ReactNode;
}

export const Badge = ({
    children,
    variant = 'default',
    className = '',
    ...props
}: BadgeProps) => {
    const variantClasses = {
        outline: 'border border-gray-200',
        default: 'bg-gray-100',
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};
