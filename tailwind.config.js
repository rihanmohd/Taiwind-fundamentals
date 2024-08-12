module.exports = {
  content: ['./*.html'],
  theme: {
    screnns: {
      sm: '480px',
      md: '768px',
      lg: '976',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condenced', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')],
}

