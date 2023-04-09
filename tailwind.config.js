  module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "other": {'min': '700px', 'max': '1200px'},
          "others": {'min': '0px', 'max': '700px'},
        },
        colors: {
          darkbg: "#1E293B",
          blue: {
            850: "#1e40af"
          }
        }
      },
    },
    plugins: [],
}