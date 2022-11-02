const colors = require('tailwindcss/colors')

const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{pages,components,lib,hooks}/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Barlow', 'sans-serif'],
            },
            colors: {
                gray: colors.zinc,
                red,
                primary: red,
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
