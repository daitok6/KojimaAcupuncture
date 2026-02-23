/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "15px"
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '960px',
        'xl': '1200px',
      },
      fontFamily: {
        primary: ['var(--font-rubik)', 'monospace'],
      },
      colors: {
        primary: "#FFFBF5",
        "primary-warm": "#FFF8E8",
        accent: {
          DEFAULT: "#674636",
          hover: "#5C4033",
          light: "#8B7355",
        },
        sage: {
          DEFAULT: "#AAB396",
          light: "#B8C4A4",
          dark: "#8F9B7A",
        }
      },
      boxShadow: {
        'premium': '0 4px 24px -4px rgba(92, 64, 51, 0.08), 0 8px 48px -8px rgba(92, 64, 51, 0.06)',
        'premium-lg': '0 12px 48px -12px rgba(92, 64, 51, 0.12), 0 24px 64px -16px rgba(92, 64, 51, 0.08)',
        'soft': '0 2px 12px -2px rgba(92, 64, 51, 0.04)',
        'card': '0 1px 3px rgba(92, 64, 51, 0.04)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
