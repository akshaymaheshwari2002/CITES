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
  sugarCane: '#EFF3DE',
  grey: '#929292',
  darkGrey: '#2D4652',
  lightGrey: '#F2F2F7',
  greyLight: '#f4fcef',
  darkSalmon: '#cc685a',
  darkGreyBlue: '#2F414B',
  softRed: '#DA6F60',
  brightRed: '#DE7162',
  tuna: '#3C3C43',
  green: '#3BB54A',
  ghostCheckboxBorder: '#C7C7CC',
  spunPearl: '#B0B0B6',
  prussianBlue: '#083863',
  smaltBlueApprox: '#51666c',
  darkBlue: '#2A414C',
};

const Fonts = {
  Lato13R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(13),
  },
  Lato22B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(22),
  },
  Lato20B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(20),
  },
  Lato50R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(50),
  },
  Lato15R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(15),
  },
  Lato17R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(17),
  },
  Lato17B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(17),
  },
  Lato20R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(20),
  },
  Lato34R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(34),
  },
  HelveticaNeue17R: {
    fontFamily: 'HelveticaNeue-Regular',
    fontSize: moderateScale(17),
  },
  HelveticaNeue18B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(18),
  },
  HelveticaNeue25B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(25),
  },
  Lato15SB: {
    fontFamily: 'Lato-Semibold',
    fontSize: moderateScale(15),
  },
  Lato17SB: {
    fontFamily: 'Lato-Semibold',
    fontSize: moderateScale(17),
  },
  HelveticaNeue30B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(30),
  },
  HelveticaNeue40B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(40),
  },
  HelveticaNeue26B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(26),
  },
  HelveticaNeue80B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(80),
  },
};

const {ThemeProvider, useTheme} = createTheming(Themes.DEFAULT);

export {ThemeProvider, useTheme, Themes, Fonts, RawColors};
