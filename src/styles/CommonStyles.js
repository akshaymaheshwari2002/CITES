import {StyleSheet} from 'react-native';
import {RawColors} from './Themes';

export default StyleSheet.create({
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
    backgroundColor: RawColors.snow,
  },
});
