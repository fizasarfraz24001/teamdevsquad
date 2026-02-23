/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4F8CFF',
                    dark: '#3d7ae8',
                    purple: '#7C5CFF',
                },
                heading: {
                    DEFAULT: '#E6EDF3',
                },
                paragraph: {
                    DEFAULT: '#E6EDF3',
                },
                background: {
                    DEFAULT: '#0B0F19',
                },
                dark: {
                    DEFAULT: '#0a0a0a',
                    light: '#1a1a1a',
                    lighter: '#2a2a2a',
                },
            },
        },
    },
    plugins: [],
}

