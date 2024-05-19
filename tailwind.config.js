module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./utils/tailwind-preset')],
  theme: {
    extend: {
      fontFamily: {
        violet: ['Violet Sans'],
        clash: ['Clash Grotesk'],
        clashdisplay: ['Clash Display'],
        belgro: ['Belgro'],
        helvetica: ['Helvetica Neue'],
      },
      colors: {
        primary: '#FFDA03',
        yellow: '#FAE55D',
        graydark: '#313131',
        pink: '#D4527D',
        pinklight: '#F5709A',
        pinklighter: '#E9A5BB',
        pinkcontrast: '#ED5AA0',
        pinkstrong: '#DF378D',
        green: '#056D5E',
        orange: '#D36037',
        fuchsia: '#9A3E88',
        purple: '#984DFD',
        purpledark: '#A54692',
        blue: '#264467',
        bluelight: '#00D7F4',
        coral: '#DF665F',
        greenlighter: '#3CECCF',
      },
      backgroundSize: {
        '100': '100%',
        '30': '30%',
      }
    }
  }
};
