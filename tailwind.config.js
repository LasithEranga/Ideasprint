module.exports = {
  purge: {
    enabled:false,
    content:["./public/**/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        darkBlue:"#101b2c"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
