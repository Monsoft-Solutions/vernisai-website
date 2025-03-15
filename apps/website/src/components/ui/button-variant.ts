import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
    'cursor-pointer inline-flex items-center justify-center text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow rounded-md after:content-[""] after:absolute after:inset-0 after:bg-white/0 hover:after:bg-white/10 after:transition-colors',
    {
        variants: {
            variant: {
                default:
                    'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200',
                destructive: 'bg-error text-white hover:bg-error/90',
                outline:
                    'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300',
                secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                ghost: 'text-gray-700 hover:bg-gray-100 shadow-none hover:shadow-none',
                link: 'text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 shadow-none hover:shadow-none hover:scale-100',
                black: 'bg-gray-900 text-white hover:bg-gray-800',
                primary:
                    'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md',
            },
            size: {
                default: 'h-10 px-4 py-2 text-sm',
                sm: 'h-8 px-3 py-1.5 text-xs',
                lg: 'h-11 px-6 py-2.5 text-base',
                icon: 'h-10 w-10 p-2.5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);
