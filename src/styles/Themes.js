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
  greyShade: 'rgb(242, 242, 247)',
  darkSalmon: '#cc685a',
  darkGreyBlue: '#2F414B',
  softRed: '#DA6F60',
  brightRed: '#DE7162',
  redShade: '#ED6A5C',
  darkRed: '#EE695C',
  tuna: '#3C3C43',
  green: '#3BB54A',
  ghostCheckboxBorder: '#C7C7CC',
  spunPearl: '#B0B0B6',
  prussianBlue: '#083863',
  smaltBlueApprox: '#51666c',
  charcoalGrey60: 'rgba(60,60,67,0.6)',
  error: '#dd4746',
  darkBlue: '#2A414C',
  approxTwilightBlue: '#FBFCF6',
  approxDolphin: 'rgba(118,118,128,0.12)',
  backToolTipColor: 'rgba(0,0,0,0.5)',
  sideMenu: '#00000029',
  lightContinueInspection: '#F6F9EF',
  eggshell: 'rgb(239,243,222)',
  silverFoil: '#B1B1B0',
  pinkishGrey: 'rgb(191,191,191)',
  beige: 'rgb(238,244,220)',
  marine: 'rgb(8,56,99)',
  gaussianblack: 'rgba(25,2,2,0.3)',
  darkPeach: 'rgb(47,65,75)',
};

const Fonts = {
  Didot56B: {
    fontFamily: 'Didot',
    fontSize: moderateScale(56),
  },
  Italic13R: {
    fontStyle: 'italic',
    fontSize: moderateScale(13),
  },
  Italic15R: {
    fontStyle: 'italic',
    fontSize: moderateScale(15),
  },
  Regular15R: {
    fontSize: moderateScale(15),
  },
  Lato19B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(19),
  },
  Lato19R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(19),
  },
  Lato12R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(12),
  },
  Lato13R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(13),
  },
  Lato16B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(16),
  },
  Lato22B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(22),
  },
  Lato20B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(20),
  },
  Lato15I: {
    fontFamily: 'Lato-Italic',
    fontSize: moderateScale(15),
  },
  Lato20I: {
    fontFamily: 'Lato-Italic',
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
    textAlign: 'center',
  },
  Lato17R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(17),
  },
  Lato18B: {
    fontFamily: 'Lato-Bold',
    fontSize: moderateScale(18),
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
  Lato20SB: {
    fontFamily: 'Lato-SemiBold',
    fontSize: moderateScale(20),
  },
  Lato34R: {
    fontFamily: 'Lato-Regular',
    fontSize: moderateScale(34),
  },
  HelveticaNeue17R: {
    fontFamily: 'HelveticaNeueRegular',
    fontSize: moderateScale(17),
  },
  HelveticaNeue13B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(13),
  },
  HelveticaNeue18B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(18),
  },
  HelveticaNeue20B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(20),
  },
  HelveticaNeue19B: {
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
  HelveticaNeue28B: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: moderateScale(28),
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
