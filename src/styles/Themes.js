import {createTheming} from '@callstack/react-theme-provider';
import {moderateScale} from 'react-native-size-matters';

const Themes = {
  DEFAULT: {
    primaryColor: '#000000',
  },
};

const RawColors = {
  transparent: 'transparent',
  white: 'white',
  black: 'black',
  dimGrey: '#707070',
  snow: '#F9F9F9',
  whiteTwo: 'rgb(249,249,249)',
  grey: '#929292',
  darkGrey: '#2D4652',
  lightGrey: '#F2F2F7',
};

const Fonts = {
  Lato15R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(15),
  },
  Lato17R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(17),
  },
  HelverticaNeue30B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(30),
  },
  HelveticaNeue30B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(30),
  },
  HelveticaNeue40B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(40),
  },
};

const {ThemeProvider, useTheme} = createTheming(Themes.DEFAULT);

export {ThemeProvider, useTheme, Themes, Fonts, RawColors};
