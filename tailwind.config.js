/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark': '#191A1A',
      'light': '#FFFFFF',
      'primary': '#0A43A0',
      'secondary': '#FFA515',
      'error': '#EE5521',
      'success': '#477F42',
    }
  },
  plugins: [],
}
