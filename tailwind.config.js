export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                brand: {
                    50: '#f0f7ff',
                    100: '#e0effe',
                    200: '#bae0fd',
                    300: '#7cc7fb',
                    400: '#3385ff', // Highlight
                    500: '#005FFF', // PRIMARY COLOR
                    600: '#004ecc',
                    700: '#003da1',
                    800: '#002d75',
                    900: '#001c4a',
                    950: '#000f29',
                },
                accent: {
                    pink: '#ec4899', // Hot Pink (contrasts well with Purple)
                    cyan: '#06b6d4', // Cyan (keeps the cyberpunk vibe)
                },
                dark: {
                    900: '#030305', // Void Black
                    800: '#0a0a0c',
                    700: '#121215',
                    600: '#1c1c21',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'typing': 'typing 3.5s steps(40, end)',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    'from': { boxShadow: '0 0 10px #005FFF' },
                    'to': { boxShadow: '0 0 20px #005FFF, 0 0 10px #005FFF' },
                }
            }
        },
    },
    plugins: [],
}
