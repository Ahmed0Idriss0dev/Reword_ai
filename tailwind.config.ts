import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       'Reword-brand-color': {
        '50': '#eefff0',
        '100': '#d7ffdf',
        '200': '#b2ffc1',
        '300': '#76ff93',
        '400': '#34f45d',
        '500': '#09d736',
        '600': '#01b829',
        '700': '#059024',
        '800': '#0a7122',
        '900': '#0a5d1f',
        '950': '#00340d',
    },
  },
  fontFamily:{
     'Jua':['Jua']
  }
    },
  },
  plugins: [],
} satisfies Config;
