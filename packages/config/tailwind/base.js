/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: {
                    DEFAULT: '#e2e8f0',
                },
                background: 'white',
                foreground: '#1a202c',
                primary: {
                    DEFAULT: '#3f51b5',
                    foreground: 'white',
                },
                secondary: {
                    DEFAULT: '#f5f5f5',
                    foreground: '#1a202c',
                },
                destructive: {
                    DEFAULT: '#e53e3e',
                    foreground: 'white',
                },
                muted: {
                    DEFAULT: '#f5f5f5',
                    foreground: '#64748b',
                },
                accent: {
                    DEFAULT: '#f5f5f5',
                    foreground: '#1a202c',
                },
                popover: {
                    DEFAULT: 'white',
                    foreground: '#1a202c',
                },
                card: {
                    DEFAULT: 'white',
                    foreground: '#1a202c',
                },
                input: '#e2e8f0',
                ring: '#3f51b5',
            },
            borderRadius: {
                lg: '0.5rem',
                md: '0.375rem',
                sm: '0.25rem',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};