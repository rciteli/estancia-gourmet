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
        Lohit: ['"Lohit Tamil"', 'sans-serif'],
        Livvic: ['"Livvic"', 'serif'],
        Manjari: ['"Manjari"', 'serif'],
        Strait: ['"Strait"', 'serif'],
        Tilt: ['"Tilt Warp"', 'serif'],
        Vollkorn: ['"Vollkorn"', 'serif'],
        Walter: ['"Walter Turncoat"', 'serif'],
      },
      colors: {
        'emerald': {
          700: '#047857',
        }
      }
    }
  }
}