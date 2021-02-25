import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {useIntl} from 'react-intl';

import {RawColors} from '@styles/Themes';
import {setTooltipProps} from '@store/slices/sessionSlice';
import {Tooltip} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const tabButtons = [
  {name: 'home', icon: 'home', screen: 'LanguageSelection'},
  {name: 'search', icon: 'search'},
  {name: 'edit', icon: 'edit-3'},
  {name: 'list', icon: 'list'},
];

const TabBar = ({navigation}) => {
  const {formatMessage} = useIntl();
  const {bottom: marginBottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const tooltipProps = useSelector(
    (state) => state.sessionReducer.tooltipProps,
    shallowEqual,
  );

  const handlePress = useCallback(
    (item) => {
      if (item.screen) {
        navigation.navigate(item.screen);
      }
    },
    [navigation],
  );

  const handleTooltipClose = useCallback(
    (consumerItem) => {
      let _tooltipProps;

      if (consumerItem.name === 'home') {
        _tooltipProps = {
          consumerName: 'search',
          isVisible: true,
          content: formatMessage({
            id: 'screen.StepOne.WalkThroughContentThree',
          }),
        };
      } else if (consumerItem.name === 'search') {
        _tooltipProps = {
          consumerName: 'edit',
          isVisible: true,
          content: formatMessage({
            id: 'screen.StepOne.WalkThroughContentFour',
          }),
        };
      } else if (consumerItem.name === 'edit') {
        _tooltipProps = {
          consumerName: 'list',
          isVisible: true,
          content: formatMessage({
            id: 'screen.StepOne.WalkThroughContentFive',
          }),
        };
      } else {
        _tooltipProps = null;
      }

      dispatch(setTooltipProps(_tooltipProps));
    },
    [dispatch, formatMessage],
  );

  return (
    <View style={[styles.container, {marginBottom}]}>
      {tabButtons.map((item) => (
        <Tooltip
          key={item.name}
          placement="top"
          onClose={() => handleTooltipClose(item)}
          {...(tooltipProps?.consumerName === item.name ? tooltipProps : {})}>
          <TouchableOpacity
            onPress={() => handlePress(item)}
            style={CommonStyles.centerContent}>
            <Icon
              name={item.icon}
              size={ms(tooltipProps?.consumerName === item.name ? 24 : 34)}
              color={RawColors.pinkishGrey}
            />
          </TouchableOpacity>
        </Tooltip>
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
