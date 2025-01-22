/** @type {import('tailwindcss').Config} */
module.exports = {
   // NOTE: Update this to include the paths to all of your component files.
   content: [
      './app/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{tsx,jsx,ts,js}',
      './components/*.{tsx,jsx,ts,js}',
   ],
   presets: [require('nativewind/preset')],
   theme: {
      extend: {},
   },
   plugins: [],
};
