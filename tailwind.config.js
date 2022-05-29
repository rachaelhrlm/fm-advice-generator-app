module.exports = {
    content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                grow: 'grow 1s ease-out',
            },
            colors: {
                primary: {
                    cyan: 'hsl(193, 38%, 86%)',
                    green: 'hsl(150, 100%, 66%)',
                },
                neutral: {
                    'dark-blue': 'hsl(218, 23%, 16%)',
                    'dark-gray-blue': 'hsl(217, 19%, 24%)',
                    'gray-blue': 'hsl(217, 19%, 38%)',
                },
            },
            dropShadow: {
                glow: '0 0 15px rgba(82, 255, 168, 0.75)',
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
