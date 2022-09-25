/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'background-blue':'#d8e7ee',
        'background-beige': '#877B74',
        'text-blue':'#BDCAD0',
        'border-brown': '#4A4440',
      },
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
        'montserrat': ['Montserrat','sans-serif'],
        'koulen':['Koulen', 'cursive'],
        'oswald': ['Oswald','sans-serif'],
        'yanone-kaffeesatz':['Yanone Kaffeesatz', 'sans-serif'],
        'poppins': ['Poppins','sans-serif'],
      },
      backgroundImage: {
       'bed-pic': "url('/assets/background_photo1.jpg')",
       'lake-pic': "url('/assets/Wallpaper_8.jpeg')",
       'logo-pic': "url('/assets/Untitled.png')",
       'hospital1-pic': "url('/assets/hospital-bed.png')",
       'hospital2-pic': "url('/assets/hospital-bed(1).png')",
      },
      height: {
        '128': '32rem',
        '90screen': '90vh',
        '80screen': '80vh',
        '50screen': '50vh',
      }
    },
  },
  plugins: [],
};
