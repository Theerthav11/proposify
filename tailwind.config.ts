/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
colors: {
primary: {
yellow: "#FBE8A6",
coral: "#F4976C",
navy: "#303C6C",
teal: "#B4DFE5",
lightblue: "#D2FDFF",
},
},
},
},
plugins: [],
};
