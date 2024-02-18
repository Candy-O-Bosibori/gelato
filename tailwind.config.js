/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ["Mea Culpa"],
        normal: ["PT Serif"]
      },
      colors:{
        "babypink":"#eec4c6",
        "cherry":"#791429",
        "darkcherry":"#460d19",

        "cherryDarkmode":"#3a040b",  
        "bpdm":"#693e41",
        "darkcherrydarkmode":"#0a080b",
        "card": "#8C6065",
        "cb":"#320307"
          
         }
    },
  },
  plugins: [],
};
