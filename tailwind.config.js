// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        lohit: ['"Lohit Tamil"', 'sans-serif'],
        livvic: ['Livvic', 'serif'],
        manjari: ['Manjari', 'sans-serif'],
        strait: ['Strait', 'sans-serif'],
        tilt: ['"Tilt Warp"', 'sans-serif'],
        vollkorn: ['Vollkorn', 'serif'],
        walter: ['"Walter Turncoat"', 'cursive'],
      },
      colors: {
        emerald: {
          700: '#047857',
        }
      }
    }
  }
}