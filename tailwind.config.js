module.exports = {
  content: ['./*.html'],

  theme: {
    extend: {
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#212121',
        'primary-light': '#5A5A5A',
        'primary-red': '#DD1B1E',
        'primary-cyan': '#009289',
        'primary-mid-dark': '#A0A0A0',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
