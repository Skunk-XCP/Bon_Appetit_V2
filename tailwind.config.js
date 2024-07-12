/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            ivory: "#F8F8F8",
            peach: "#ffcccb",
            lightPeach: "#ffe5e4",
            lightBlue: "#e4ecff",
         },
      },
   },
   plugins: [],
};
