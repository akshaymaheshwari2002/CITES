module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@root': '.',
          '@assets': './src/assets',
          '@components': './src/components',
          '@atoms': './src/atoms',
          '@molecules': './src/molecules',
          '@organisms': './src/organisms',
          '@config': './src/config',
          '@locale': './src/locale',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@store': './src/store',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@hocs': './src/hocs',
          '@services': './src/services',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
