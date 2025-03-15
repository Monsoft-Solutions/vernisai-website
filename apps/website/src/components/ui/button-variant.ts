import { cva } from 'class-variance-authority';

const baseStyles = [
    // Layout and positioning
    'cursor-pointer',
    'inline-flex',
    'items-center',
    'justify-center',
    'relative',
    'overflow-hidden',

    // Typography
    'text-sm',
    'font-medium',

    // Animation and transitions
    'transition-all',
    'duration-300',
    'transform',
    'hover:scale-[1.02]',
    'active:scale-[0.98]',

    // Focus states
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-ring',
    'focus-visible:ring-offset-2',

    // Disabled states
    'disabled:opacity-60',
    'disabled:cursor-not-allowed',

    // Visual effects
    'shadow-sm',
    'hover:shadow',
    'rounded-md',

    // Pseudo-element for hover effects
    'after:content-[""]',
    'after:absolute',
    'after:inset-0',
    'after:bg-white/0',
    'hover:after:bg-white/10',
    'after:transition-colors',
].join(' ');

// Separate variant styles for easier maintenance
const variants = {
    default: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200',
    destructive: 'bg-error text-white hover:bg-error/90',
    outline:
        'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    ghost: 'text-gray-700 hover:bg-gray-100 shadow-none hover:shadow-none',
    link: 'text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 shadow-none hover:shadow-none hover:scale-100',
    black: 'bg-gray-900 text-white hover:bg-gray-800',
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md',
    gradient:
        'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-md hover:from-blue-700 hover:to-purple-700',
    'gradient-blue':
        'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white hover:shadow-md hover:from-blue-700 hover:via-blue-600 hover:to-indigo-700',
    'gradient-shine':
        'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-md relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 hover:after:opacity-100 hover:from-blue-700 hover:to-indigo-700 overflow-hidden after:-translate-x-full hover:after:translate-x-full after:transition-all after:duration-1000 after:ease-in-out',
    white: 'bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700',
};

// Sizes with consistent rounding
const sizes = {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-8 px-3 py-1.5 text-xs',
    lg: 'h-11 px-6 py-2.5 text-base',
    xl: 'h-12 px-8 py-3 text-lg',
    icon: 'h-10 w-10 p-2.5',
};

export const buttonVariants = cva(baseStyles, {
    variants: {
        variant: variants,
        size: sizes,
        animation: {
            none: 'hover:scale-100 active:scale-100',
            scale: 'hover:scale-[1.02] active:scale-[0.98]',
            arrow: '',
        },
        glow: {
            true: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]',
            false: '',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
        animation: 'scale',
        glow: false,
    },
});

export const getArrowAnimation = (enabled: boolean = true) => {
    return enabled ? 'group-hover:translate-x-1' : '';
};
