/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "cherryDarkmode":"#1a1213",  
        "babypinkDarkmode":"#402d31"
          
         }
    },
  },
  plugins: [],
};
