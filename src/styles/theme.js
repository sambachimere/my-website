export default {
  darkTheme: {
    colors: {
      background: '#000',
      backgroundLine: "#fff",
      black: 'white',
      textColor: '#fff',
      white: 'black',
      linearGradientBefore:
        'linear-gradient( to right, rgb(0 0 0, 1) 0%, rgba(0, 0, 0, 0) 100% )',
      linearGradientAfter:
        'linear-gradient( to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100% )',
    },
    transition: '0.3s',
  },
  lightTheme: {
    colors: {
      background: '#fff',
      backgroundLine: "#000",
      black: 'black',
      white: 'white',
      textColor: '#000',
      textShadow: '0px -19px #eee',
      border: '1px solid #111111',
      linearGradientBefore:
        'linear-gradient( to right, rgb(0 0 0 / 0.32) 0%, rgba(0, 0, 0, 0) 100% )',
      linearGradientAfter:
        'linear-gradient( to left, rgb(0 0 0 / 0.32) 0%, rgba(0, 0, 0, 0) 100% )',
    },
    transition: '0.3s',
  },
};
