import React, {useCallback, useEffect, useMemo} from 'react';
import {View, StatusBar, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms, s} from 'react-native-size-matters';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';

import {Container, Button, Tooltip} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import ChecklistContent from './ChecklistContent';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {setTooltipProps, saveInspection} from '@store/slices/sessionSlice';

const StepOne = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const stepOneData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne || {},
    shallowEqual,
  );

  const handleStepOneSubmit = useCallback(() => {
    if (Object.keys(stepOneData).length) {
      let stepOneComplete = true;

      Object.keys(stepOneData).forEach((key) => {
        if (!stepOneData[key] && key !== 'formOne') {
          stepOneComplete = false;
        }
      });

      if (stepOneComplete) {
        navigation.navigate('StepTwo', {formSummaryStepTwo: true});
      }
    } else {
      Toast.show(
        formatMessage({
          id: 'screen.StepOne.Alert',
        }),
      );
    }
  }, [formatMessage, navigation, stepOneData]);
  const bullet = useMemo(
    () => (
      <View style={checkliststyles.bulletContainer}>
        <View style={checkliststyles.bullet} />
      </View>
    ),
    [],
  );

  const handleChange = useCallback(
    (key, value) => {
      dispatch(
        saveInspection({
          stepOne: {
            [key]: value,
          },
        }),
      );
    },
    [dispatch],
  );

  const handleTooltipClose = useCallback(() => {
    navigation.setParams({showToolTip: false});
    dispatch(
      setTooltipProps({
        consumerName: 'home',
        isVisible: true,
        content: formatMessage({
          id: 'screen.StepOne.WalkThroughContentTwo',
        }),
        contentstyle: {
          height: ms(60),
          width: ms(172),
        },
      }),
    );
  }, [dispatch, formatMessage, navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Tooltip
          placement="bottom"
          isVisible={route.params.showToolTip}
          content={formatMessage({
            id: 'screen.StepOne.WalkThroughContentOne',
          })}
          contentstyle={{
            height: ms(60),
            width: ms(300),
          }}
          onClose={handleTooltipClose}>
          <Icon name="chevron-left" size={ms(26)} onPress={navigation.goBack} />
        </Tooltip>
      ),
    });
  }, [formatMessage, handleTooltipClose, navigation, route.params.showToolTip]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <StepHeader stepNumber={1} />
      <Container.ScrollView style={CommonStyles.flex1}>
        {ChecklistContent({
          checkliststyles,
          bullet,
        }).map((el) => {
          return (
            <ChecklistCell
              key={el.id}
              content={el.content}
              value={stepOneData?.[el.id]}
              onChange={(value) => handleChange(el.id, value)}
            />
          );
        })}
        <View>
          <Button
            buttonContent={formatMessage({
              id: 'screen.stepOne.continueToStepTwo',
            })}
            buttonStyle={() => styles.button}
            buttonTextStyle={() => styles.buttonTextStyle}
            onPress={handleStepOneSubmit}
          />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  header: {
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    width: s(32),
  },
  leftIcon: {margin: '8@s'},
  button: {
    backgroundColor: RawColors.sugarCane,
    borderColor: RawColors.prussianBlue,
    marginHorizontal: '30@s',
    marginVertical: '20@s',
  },
  arrowSize: {height: 10, width: 10},
  toolTipStyle: {marginHorizontal: 25},
  toolTipContent: {
    ...Fonts.Lato17B,
  },
  toolTipContentStyle: {height: 60, width: 202, borderRadius: 10},
  icon: {
    borderRadius: 16,
    borderColor: RawColors.softRed,
    borderWidth: 3,
    backgroundColor: RawColors.white,
  },
  buttonTextStyle: {
    textTransform: 'uppercase',
    color: RawColors.smaltBlueApprox,
    padding: '10@ms',
    ...Fonts.Lato15R,
  },
  childrenWrapper: {top: '46@vs', left: '9@s'},
  toolTip: {top: '84@vs', left: '9@s', position: 'absolute'},
});

const checkliststyles = ScaledSheet.create({
  textGeneral: {
    color: RawColors.black,
    ...Fonts.Lato17SB,
  },
  textHiddenBullet: {
    color: RawColors.black,
    ...Fonts.Lato17SB,
    textDecorationLine: 'underline',
  },
  textBold: {
    color: RawColors.black,
    ...Fonts.Lato17B,
  },
  textLink: {
    color: RawColors.black,
    textDecorationLine: 'underline',
    ...Fonts.Italic15R,
  },
  bulletList: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bulletContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '8@ms',
    height: '21@ms',
  },
  hiddenBullet: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '24@ms',
  },
  bullet: {
    height: '8@ms',
    width: '8@ms',
    borderRadius: '4@ms',
    backgroundColor: RawColors.black,
  },
  button: {
    alignSelf: 'flex-start',
    borderColor: RawColors.prussianBlue,
    backgroundColor: RawColors.white,
    height: '40@vs',
    borderRadius: '24@vs',
    marginVertical: '20@s',
    marginHorizontal: '10@s',
  },
  buttonTextStyle: {
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: RawColors.softRed,
    paddingHorizontal: '16@ms',
    ...Fonts.HelveticaNeue13B,
  },
  formOneCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productionCalculatorCell: {
    marginVertical: '15@ms',
  },
});

export default StepOne;
