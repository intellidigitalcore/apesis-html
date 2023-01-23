/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./pages/*html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : 'rgba(34, 143, 243, 1)',
        'primary-50' : 'rgba(233, 244, 254, 1)',
        'primary-20' : 'rgba(34, 143, 243, 0.19)',
        'primary-10' : 'rgba(34, 143, 243, 0.08)',
        'text-primary' : 'rgba(59, 59, 59, 1)',
        'text-secondary' : 'rgba(163, 163, 163, 1)',
        'text-600' : 'rgba(46, 46, 46, 1)',
        'text-500' : 'rgba(59, 59, 59, 1)',
        'text-400' : 'rgba(74, 74, 74, 1)',
        'text-300' : 'rgba(87, 87, 87, 1)',
        'text-200' : 'rgba(102, 102, 102, 1)',
        'text-100' : 'rgba(117, 117, 117, 1)',
        'text-90' : '#858585',
        'text-80' : 'rgba(148, 148, 148, 1)',
        'text-50' : 'rgba(191, 191, 191, 1)',
        'text-40' : 'rgba(222, 222, 222, 1)',
        'text-10' : '#FAFAFA',
        'danger' : '#E31A1A', 
        'warning' : '#FFB547', 
        'success' : '#01B574', 
        'inactive' : 'rgba(223, 227, 232, 1)', 
      }
    },
  },
  plugins: [],
}
