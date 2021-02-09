import {createTheming} from '@callstack/react-theme-provider';

const Themes = {
  DEFAULT: {
    primaryColor: '#000000',
  },
};

const RawColors = {
  transparent: 'transparent',
  white: '#FFFFFF',
  dimGrey: '#707070',
  snow: '#F9F9F9',
};

const Fonts = {
  Lato15R: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
  },
};

const {ThemeProvider, useTheme} = createTheming(Themes.DEFAULT);

export {ThemeProvider, useTheme, Themes, Fonts, RawColors};
