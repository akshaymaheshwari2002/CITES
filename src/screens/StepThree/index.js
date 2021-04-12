import React, {useMemo, useCallback} from 'react';
import {View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {useIsFocused} from '@react-navigation/core';

import {saveInspection} from '@store/slices/sessionSlice';
import {Container, Button} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import ChecklistContent from './ChecklistContent';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const StepThree = ({navigation: {navigate, goBack}}) => {
  const {formatMessage} = useIntl();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const stepThreeData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepThree,
    shallowEqual,
  );
  const handleChange = useCallback(
    (key, value) => {
      dispatch(
        saveInspection({
          stepThree: {
            [key]: value,
          },
        }),
      );
    },
    [dispatch],
  );
  const handleStepThreeSubmit = useCallback(() => {
    // if (Object.keys(stepThreeData).length) {
    //   let stepThreeComplete = true;

    //   Object.keys(stepThreeData).forEach((key) => {
    //     if (!stepThreeData[key] && key !== 'formFour') {
    //       stepThreeComplete = false;
    //     } else if (stepThreeComplete !== true) {
    //       Toast.show(
    //         formatMessage({
    //           id: 'screen.StepThree.Alert',
    //         }),
    //       );
    //     }
    //   });
    //   if (stepThreeComplete) {
    navigate('StepSummary', {formSummaryStepThree: true});
    //   }
    // } else {
    //   Toast.show(
    //     formatMessage({
    //       id: 'screen.StepThree.Alert',
    //     }),
    //   );
    // }
  }, [navigate]);
  const bullet = useMemo(
    () => (
      <View style={checkliststyles.bulletContainer}>
        <View style={checkliststyles.bullet} />
      </View>
    ),
    [],
  );
  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <StepHeader stepNumber={3} showAnimation={isFocused} />
      <Container.ScrollView style={CommonStyles.flex1}>
        {ChecklistContent({
          checkliststyles,
          bullet,
        }).map((el) => {
          return (
            <ChecklistCell
              key={el.id}
              content={el.content}
              value={stepThreeData?.[el.id]}
              onChange={(value) => handleChange(el.id, value)}
            />
          );
        })}
        <Button
          buttonContent={formatMessage({
            id: 'button.stepThree.continueToInspectionSummary',
          })}
          buttonStyle={(pressed) => styles.button}
          buttonTextStyle={(pressed) => styles.buttonTextStyle}
          onPress={handleStepThreeSubmit}
        />
      </Container.ScrollView>
    </Container>
  );
};

export default StepThree;

const styles = ScaledSheet.create({
  button: {
    backgroundColor: RawColors.sugarCane,
    borderColor: RawColors.prussianBlue,
    marginHorizontal: '30@s',
    width: '260@s',
    alignSelf: 'center',
    marginVertical: '20@s',
  },
  buttonTextStyle: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: RawColors.smaltBlueApprox,
    marginHorizontal: '40@s',
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
    marginTop: '5@vs',
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
    marginRight: '2@s',
    backgroundColor: RawColors.black,
  },
  button: {
    alignSelf: 'flex-start',
    borderColor: RawColors.prussianBlue,
    backgroundColor: RawColors.white,
    height: '40@vs',
    borderRadius: '24@vs',
    marginVertical: '20@s',
    paddingRight: '13@ms',
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
