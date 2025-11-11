/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Roshini Portfolio - Black & Grey Color Palette
                primary: {
                    DEFAULT: '#111827', // Primary (Charcoal Black)
                    light: '#374151', // Secondary (Dark Grey)
                    softer: '#6B7280', // Tertiary (Medium Grey)
                },
                accent: {
                    light: '#9CA3AF', // Light Grey Accent
                    lighter: '#D1D5DB', // Lighter Grey
                },
                background: {
                    dark: '#0D0E12', // Background Dark (Pure Black)
                    light: '#FFFFFF', // Background Light (White)
                },
                text: {
                    primary: '#FFFFFF', // Text Primary (White on dark)
                    secondary: '#111827', // Text Secondary (Black on light)
                    grey: '#6B7280', // Neutral Grey (Mid)
                    light: '#9CA3AF', // Light Grey Text
                },
                divider: '#E5E7EB', // Section Divider (Light Grey)
                hover: '#374151', // Hover Highlight (Dark Grey)
                // Legacy support
                dark: '#111827',
                light: '#F9FAFB',
                border: '#E5E7EB',
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            fontWeight: {
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                black: '900',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-primary': 'linear-gradient(135deg, #111827 0%, #374151 100%)',
                'gradient-footer': 'linear-gradient(180deg, #0D0E12 0%, #111827 100%)',
                'gradient-hero': 'radial-gradient(circle at center, rgba(55,65,81,0.15), rgba(13,14,18,0.95))',
            },
        },
    },
    plugins: [],
}
