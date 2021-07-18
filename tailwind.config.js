module.exports = {
  purge: {
    enabled:true,
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
