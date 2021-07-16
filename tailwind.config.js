module.exports = {
  purge: {
    enabled:false,
    content:["./public/**/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        darkBlue:"#101b2c",
        darkGray:"#414749"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
