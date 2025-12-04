// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Ensure all your file paths are listed here
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You should add your 'scroll' animation here
      // instead of in index.css for better organization.
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}