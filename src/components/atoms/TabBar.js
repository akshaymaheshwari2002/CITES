import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import {RawColors} from '@styles/Themes';

const tabButtons = [
  {icon: 'home', screen: 'LanguageSelection'},
  {icon: 'search'},
  {icon: 'edit-3'},
  {icon: 'list'},
];

const TabBar = ({navigation}) => {
  const {bottom: marginBottom} = useSafeAreaInsets();

  const handlePress = useCallback(
    (item) => {
      if (item.screen) {
        navigation.navigate(item.screen);
      }
    },
    [navigation],
  );

  return (
    <View style={[styles.container, {marginBottom}]}>
      {tabButtons.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(item)}>
          <Icon name={item.icon} size={ms(34)} color={RawColors.pinkishGrey} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '74@vs',
    backgroundColor: RawColors.whiteTwo,
  },
});

export default TabBar;
