/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mdh: { max: '767px' },
      ...defaultTheme.screens,
    },
    fontFamily: {
      Antonio: ['Antonio', ...defaultTheme.fontFamily.sans],
      Spartan: ['League-Spartan', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      head1: '5rem',
      head2: '2.5rem',
      head3: '0.75rem',
      head4: '0.688rem',
      body1: '0.875rem',
    },
    extend: {
      colors: {
        'planet-white': '#FFFFFF',
        'planet-dark': '#070724',
        'planet-darkgray': '#38384F',
        'planet-lightgray': '#838391',
        'planet-aquablue': '#419EBB',
        'planet-gold': '#EDA249',
        'planet-purple': '#6f2ed6',
        'planet-orange1': '#D14C32',
        'planet-orange2': '#D83A34',
        'planet-orange3': '#CD5120',
        'planet-aquagreen': '#1ec2a4',
        'planet-blue': '#2d68f0',
      },
    },
  },
  plugins: [],
};
