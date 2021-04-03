import React, {useMemo, useCallback} from 'react';
import {View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {useIsFocused} from '@react-navigation/core';

import {saveInspection} from '@store/slices/sessionSlice';
import {Container, Button} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import ChecklistContent from './ChecklistContent';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import Toast from 'react-native-simple-toast';

const StepTwo = ({navigation}) => {
  const {formatMessage} = useIntl();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const stepTwoData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepTwo,
    shallowEqual,
  );
  const handleStepTwoSubmit = useCallback(() => {
    if (stepTwoData && Object.keys(stepTwoData).length) {
      let stepTwoComplete = true;

      Object.keys(stepTwoData).forEach((key) => {
        if (!stepTwoData[key] && key !== 'formTwo' && key !== 'formThree') {
          stepTwoComplete = false;
        } else if (stepTwoComplete !== true) {
          Toast.show(
            formatMessage({
              id: 'screen.StepTwo.Alert',
            }),
          );
        }
      });

      if (stepTwoComplete) {
        navigation.navigate('StepThree', {formSummaryStepTwo: true});
      }
    } else {
      Toast.show(
        formatMessage({
          id: 'screen.StepTwo.Alert',
        }),
      );
    }
  }, [formatMessage, navigation, stepTwoData]);

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
          stepTwo: {
            [key]: value,
          },
        }),
      );
    },
    [dispatch],
  );

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <StepHeader stepNumber={2} showAnimation={isFocused} />
      <Container.ScrollView style={CommonStyles.flex1}>
        {ChecklistContent({
          checkliststyles,
          bullet,
        }).map((el) => {
          return (
            <ChecklistCell
              key={el.id}
              content={el.content}
              value={stepTwoData?.[el.id]}
              onChange={(value) => handleChange(el.id, value)}
            />
          );
        })}
        <Button
          buttonContent={formatMessage({
            id: 'screen.stepTwo.continueToStepThree',
          })}
          buttonStyle={(pressed) => styles.button}
          buttonTextStyle={(pressed) => styles.buttonTextStyle}
          onPress={handleStepTwoSubmit}
        />
      </Container.ScrollView>
    </Container>
  );
};

export default StepTwo;

const styles = ScaledSheet.create({
  button: {
    backgroundColor: RawColors.sugarCane,
    borderColor: RawColors.prussianBlue,
    marginHorizontal: '30@s',
    marginVertical: '20@s',
  },
  buttonTextStyle: {
    textTransform: 'uppercase',
    color: RawColors.smaltBlueApprox,
    padding: '10@ms',
    ...Fonts.Lato15R,
  },
});

const checkliststyles = ScaledSheet.create({
  textGeneral: {
    color: RawColors.black,
    ...Fonts.Lato17SB,
    paddingRight: '13@ms',
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
  buttonLarge: {
    marginTop: '15@ms',
  },
  formCell: {
    //flexDirection: 'row',
    //alignItems: 'center',
  },
});
