import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface LogoProps {
    className?: string;
    showText?: boolean;
    logoSize?: 'sm' | 'md' | 'lg';
    textSize?: 'sm' | 'md' | 'lg';
    linkTo?: string;
    showLogo?: boolean;
}

export function Logo({
    className,
    showText = true,
    logoSize = 'md',
    textSize = 'md',
    linkTo = '/',
    showLogo = true,
}: LogoProps) {
    const sizeClasses = {
        sm: 'h-6',
        md: 'h-20',
        lg: 'h-35',
    };

    const logoImage = showLogo && (
        <img
            src="/vernis-ai-logo.svg"
            alt="VernisAI Logo"
            className={cn(sizeClasses[logoSize], 'w-auto')}
        />
    );

    const content = (
        <>
            {logoImage}
            {showText && (
                <span
                    className={cn(
                        'font-bold',
                        textSize === 'sm' && 'text-base',
                        textSize === 'md' && 'text-xl',
                        textSize === 'lg' && 'text-2xl',
                    )}
                >
                    VernisAI
                </span>
            )}
        </>
    );

    if (linkTo) {
        return (
            <Link
                to={linkTo}
                className={cn(
                    'flex items-center space-x-2 transition-transform duration-200 hover:scale-105',
                    className,
                )}
            >
                {content}
            </Link>
        );
    }

    return (
        <div className={cn('flex items-center space-x-2', className)}>
            {content}
        </div>
    );
}
