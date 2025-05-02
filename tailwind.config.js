/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#ecfefe',
            100: '#d0f7f6',
            200: '#a6eeeb',
            300: '#74e2dd',
            400: '#4ecdc4', // Main primary color
            500: '#33b0a9',
            600: '#298d88',
            700: '#25716e',
            800: '#235a59',
            900: '#214b4a',
            950: '#0f2d2d',
          },
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
            950: '#030712',
          },
        },
        fontFamily: {
          sans: [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
          ],
        },
        animation: {
          'wave-slow': 'wave 15s linear infinite',
          'wave-medium': 'wave 12s linear infinite',
          'wave-fast': 'wave 10s linear infinite',
        },
        keyframes: {
          wave: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        boxShadow: {
          card: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    plugins: [],
  };