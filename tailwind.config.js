/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells Tailwind where to look for class names in your project files.
  content: [
    "./App.{js,jsx,tsx}", // Check App.tsx/jsx
    "./src/**/*.{js,jsx,tsx}", // Check any source directory (like 'src')
    // Add other directories if needed, e.g., components/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}