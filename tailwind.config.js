/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'background-brown':'#1f1a17',
        'background-beige': '#877B74',
        'text-black':'#1B1009',
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
}
