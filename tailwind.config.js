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
                    DEFAULT: '#00ff88',
                    dark: '#00cc6f',
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

