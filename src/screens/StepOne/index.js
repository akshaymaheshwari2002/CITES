import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StatusBar, Platform} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Tooltip from 'react-native-walkthrough-tooltip';

import {Container, Button} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import ChecklistContent from './ChecklistContent';
import {Fonts, RawColors} from '@styles/Themes';

const StepOne = ({navigation, route}) => {
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
  const [toolTipVisible, setToolTipVisible] = useState(
    route.params?.toolTipVisible ?? false,
  );

  const {formatMessage} = useIntl();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <Tooltip
            topAdjustment={
              Platform.OS === 'android' ? -StatusBar.currentHeight : 0
            }
            isVisible={toolTipVisible}
            content={
              <Text style={styles.toolTipContent}>
                {formatMessage({id: 'screen.StepOne.WalkThroughContent'})}
              </Text>
            }
            backgroundColor={RawColors.backToolTipColor}
            arrowStyle={styles.arrowStyle}
            tooltipStyle={styles.toolTipStyle}
            placement="bottom"
            contentStyle={styles.toolTipContentStyle}
            arrowSize={styles.arrowSize}
            childContentSpacing={0}
            onClose={() => {
              setToolTipVisible(false);
            }}>
            <TouchableOpacity
              onPress={() => {
                setToolTipVisible(false);
              }}>
              <View style={toolTipVisible ? styles.icon : {}}>
                <Icon name="chevron-left" size={scale(26)} />
              </View>
            </TouchableOpacity>
          </Tooltip>
        );
      },
    });
  }, [formatMessage, navigation, toolTipVisible]);

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
  arrowSize: {height: 10, width: 10},
  arrowStyle: {margin: 2},
  toolTipStyle: {marginHorizontal: 10},
  toolTipContent: {
    ...Fonts.Lato17B,
  },
  toolTipContentStyle: {height: 60, width: 202, borderRadius: 10},
  icon: {
    borderRadius: 13,
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
