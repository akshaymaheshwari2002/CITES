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
  grey57: '#919191',
  grey75: '#BFBFBF',
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
  charcoalGrey60: 'rgba(60,60,67,0.6)',
  error: '#dd4746',
  darkBlue: '#2A414C',
  backToolTipColor: 'rgba(0,0,0,0.5)',
  lightContinueInspection: '#F6F9EF',
  eggshell: 'rgb(239,243,222)',
  silverFoil: '#B1B1B0',
};

const Fonts = {
  Lato12R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(12),
  },
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
  Lato30R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(30),
  },
  Lato50R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(50),
  },
  Lato14R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(14),
  },
  Lato15R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(15),
  },
  Lato17R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(17),
  },
  Lato12B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(12),
  },
  Lato15B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(15),
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
    fontFamily: 'Lato-SemiBold',
    fontSize: moderateScale(15),
  },
  Lato17SB: {
    fontFamily: 'Lato-SemiBold',
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
