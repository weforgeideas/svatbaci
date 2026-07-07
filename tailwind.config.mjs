/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark:    '#1A1714',
        dark2:   '#2B2018',
        muted:   '#5C5044',
        cream:   '#FAF6EF',
        cream2:  '#EDE5D8',
        cream3:  '#E2D5C3',
        sage:    '#4A5940',
        'sage-l':'#8B9B82',
        'sage-ll':'#C4CEC0',
        gold:    '#C8900A',
        'gold-h':'#A87608',
        rust:    '#9B6B44',
      },
      fontFamily: {
        sans:   ['Inter', 'system-ui', 'sans-serif'],
        serif:  ['"Cormorant Infant"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
};
