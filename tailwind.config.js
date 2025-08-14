/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}"],
     safelist: [
        { pattern: /^gap-/ },
        { pattern: /^w-/ },
        { pattern: /^h-/ },
        { pattern: /^text-/ },
        { pattern: /^bg-/ },
        { pattern: /^p-/ },
        { pattern: /^border-/ },
    ],
  theme: {
    extend: {
      boxShadow: {
      amber: '0 0 10px rgba(251,191,36,0.8)',
    },
    },
  },
  plugins: [],
}

