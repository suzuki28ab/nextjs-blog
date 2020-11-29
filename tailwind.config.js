module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      maxHeight: {
        almost: 'calc(100% - 64px)',
      },
      colors: {
        green: 'rgb(107, 173, 159)',
        whiteGreen: 'rgb(245, 247, 246)',
      },
    },
  },
  variants: {},
  plugins: [],
}
