module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      maxHeight: {
        almost: 'calc(100% - 64px)',
      },
      colors: {
        customGreen: 'rgb(107, 173, 159)',
        customDarkGreen: 'rgb(63, 100, 93)',
        customGray: 'rgb(245, 247, 246)',
      },
    },
  },
  variants: {},
  plugins: [],
}
