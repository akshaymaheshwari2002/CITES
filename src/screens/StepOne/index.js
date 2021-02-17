import React, {useState} from 'react';
import {View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import {Container, Button} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import ChecklistContent from './ChecklistContent';
import {Fonts, RawColors} from '@styles/Themes';

const StepOne = ({navigation}) => {
  const intl = useIntl();
  const [isCheckedStatus, setIsCheckedStatus] = useState({
    researchConducted: false,
    existingRecordsExamined: false,
    outstandingInfringementInvestigations: false,
    formOneCompleted: false,
    productionCapacityCalculated: false,
    toolsEnsured: false,
    twoOfficialsArranged: false,
    inspectionConcides: false,
    facilityOwnerPresent: false,
  });

  const bullet = (
    <View style={checkliststyles.bulletContainer}>
      <View style={checkliststyles.bullet} />
    </View>
  );

  return (
    <Container>
      <Container.ScrollView>
        <StepHeader stepNumber={1} />
        {ChecklistContent({
          checkliststyles,
          bullet,
        }).map((el) => {
          return (
            <ChecklistCell
              key={el.id}
              id={el.id}
              content={el.content}
              onToggle={({checked, id}) => {
                if (isCheckedStatus[id] !== checked) {
                  setIsCheckedStatus((state = isCheckedStatus) => {
                    isCheckedStatus[id] = checked;
                    return isCheckedStatus;
                  });
                }
              }}
            />
          );
        })}
        <View>
          <Button
            buttonContent={intl.formatMessage({
              id: 'screen.stepOne.continueToStepTwo',
            })}
            buttonStyle={(pressed) => styles.button}
            buttonTextStyle={(pressed) => styles.buttonTextStyle}
            onPress={() => {}}
          />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

export default StepOne;

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
  formOneCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productionCalculatorCell: {
    marginTop: '15@ms',
  },
});
