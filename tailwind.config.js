  /** @type {import('tailwindcss').Config} */
  const withMT = require("@material-tailwind/react/utils/withMT");
  module.exports = withMT({
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      padding: ['hover'],
      visibility: ['hover'],
    }
  },
  corePlugins: {
    textStrokeWidth: true,
    textStrokeColor: true,
  },
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      borderRadius: {},
      colors: {},
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
  });
