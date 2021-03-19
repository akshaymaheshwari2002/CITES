import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {useIntl} from 'react-intl';
import {CommonActions, useNavigation} from '@react-navigation/native';

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

const TabBar = () => {
  const {formatMessage} = useIntl();
  const {bottom: marginBottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const navigation = useNavigation();
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

  const handleTooltipClose = useCallback(() => {
    let _tooltipProps;
    const {consumerName, sourceCodeOnboarding} = tooltipProps;

    if (consumerName === 'home') {
      _tooltipProps = {
        consumerName: 'search',
        isVisible: true,
        content: formatMessage({
          id: 'screen.StepOne.WalkThroughContentThree',
        }),
        contentstyle: {
          height: ms(60),
          width: ms(138),
        },
        sourceCodeOnboarding,
      };
    } else if (consumerName === 'search') {
      _tooltipProps = {
        consumerName: 'edit',
        isVisible: true,
        content: formatMessage({
          id: 'screen.StepOne.WalkThroughContentFour',
        }),
        contentstyle: {
          height: ms(90),
          width: ms(180),
        },
        sourceCodeOnboarding,
      };
    } else if (consumerName === 'edit') {
      _tooltipProps = {
        consumerName: 'list',
        isVisible: true,
        content: formatMessage({
          id: 'screen.StepOne.WalkThroughContentFive',
        }),
        contentstyle: {
          height: ms(110),
          width: ms(258),
        },
        sourceCodeOnboarding,
      };
    } else {
      if (sourceCodeOnboarding) {
        _tooltipProps = {
          consumerName: 'moreInfoButton',
          isVisible: true,
          content: formatMessage({
            id: 'screen.StepOne.WalkThroughContentFive',
          }),
          contentstyle: {
            height: ms(60),
            width: ms(236),
          },
          sourceCodeOnboarding,
        };
      } else {
        _tooltipProps = null;
        navigation.dispatch(
          CommonActions.reset({
            index: 3,
            routes: [
              {name: 'LanguageSelection'},
              {name: 'HomePage'},
              {name: 'InspectionFlow'},
              {
                name: 'TabNavigator',
                state: {routes: [{name: 'BeginInspection'}]},
              },
            ],
          }),
        );
      }
    }

    dispatch(setTooltipProps(_tooltipProps));
  }, [dispatch, formatMessage, navigation, tooltipProps]);

  return (
    <View style={[styles.container, {marginBottom}]}>
      {tabButtons.map((item) => (
        <Tooltip
          key={item.name}
          placement="top"
          onClose={handleTooltipClose}
          {...(tooltipProps?.consumerName === item.name ? tooltipProps : {})}>
          <TouchableOpacity
            onPress={() => handlePress(item)}
            style={CommonStyles.centerContent}>
            <Icon
              name={item.icon}
              size={ms(tooltipProps?.consumerName === item.name ? 22 : 24)}
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
    height: '54@vs',
    backgroundColor: RawColors.whiteTwo,
  },
});

export default TabBar;
