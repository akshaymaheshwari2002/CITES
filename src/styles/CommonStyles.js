import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from './Themes';

export default ScaledSheet.create({
  flex1: {
    flex: 1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowEffect: {
    shadowColor: RawColors.black,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  navigationHeader: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: RawColors.whiteTwo,
    height: '98@vs',
  },
  navigationLeftContainer: {
    paddingLeft: '8@s',
  },
  navigationRightContainer: {
    paddingRight: '8@s',
  },
  screenContainer: {
    flexGrow: 1,
    paddingHorizontal: '16@s',
    paddingBottom: '16@vs',
    backgroundColor: RawColors.white,
  },
});
