const baseConfig = require('@vernisai/config/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...baseConfig,
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
};
