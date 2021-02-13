import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from './Themes';

export default ScaledSheet.create({
  shadowEffect: {
    shadowColor: RawColors.black,
    shadowOpacity: 0.3,
    elevation: 5,
    shadowOffset: {
      height: 40,
      width: 40,
    },
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
    flex: 1,
    paddingHorizontal: '16@s',
    backgroundColor: RawColors.white,
  },
});
