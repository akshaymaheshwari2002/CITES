import React, {useMemo, useCallback} from 'react';
import {View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {saveInspection} from '@store/slices/sessionSlice';
import {Container, Button, Header} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import ChecklistContent from './ChecklistContent';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const StepTwo = ({navigation: {navigate, goback}}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const stepTwoData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepTwo,
    shallowEqual,
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
      <Header
        leftContent={
          <FeatherIcon name="chevron-left" size={ms(26)} onPress={goback} />
        }
      />
      <StepHeader stepNumber={2} />
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
          onPress={() => {}}
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
  },
  textLink: {
    color: RawColors.black,
    textDecorationLine: 'underline',
    ...Fonts.Lato15SB,
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
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: RawColors.prussianBlue,
    backgroundColor: RawColors.white,
    height: '40@vs',
  },
  buttonTextStyle: {
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: RawColors.softRed,
    paddingHorizontal: '15@ms',
    paddingVertical: '2@ms',
    ...Fonts.Lato13R,
  },
  buttonLarge: {
    marginTop: '15@ms',
  },
  formCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
