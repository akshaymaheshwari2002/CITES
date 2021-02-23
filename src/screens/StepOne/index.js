import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {ScaledSheet, scale, verticalScale} from 'react-native-size-matters';

import {Container, Button, Header, Tooltip} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import ChecklistContent from './ChecklistContent';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const StepOne = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const [stepData, setStepData] = useState({
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
  const [tooltipIndex, setTooltipIndex] = useState(
    route.params.showToolTip ? 1 : 0,
  );

  const bullet = useMemo(
    () => (
      <View style={checkliststyles.bulletContainer}>
        <View style={checkliststyles.bullet} />
      </View>
    ),
    [],
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {},
      tabBarIcon: () => {
        return (
          <Tooltip
            isVisible={tooltipIndex === 2}
            content={
              <Text style={styles.toolTipContent}>
                {formatMessage({
                  id: 'screen.StepOne.WalkThroughContentTwo',
                })}
              </Text>
            }
            placement="top"
            onClose={() => {
              setTooltipIndex(3);
              navigation.navigate('Search', {toolTip: true});
            }}>
            <Icon
              name="home"
              size={verticalScale(35)}
              color={RawColors.grey75}
            />
          </Tooltip>
        );
      },
    });
  }, [formatMessage, navigation, tooltipIndex]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Header
        leftContent={
          <Tooltip
            placement="bottom"
            isVisible={tooltipIndex === 1}
            content={
              <Text style={styles.toolTipContent}>
                {formatMessage({
                  id: 'screen.StepOne.WalkThroughContentTwo',
                })}
              </Text>
            }
            onClose={() => {
              setTooltipIndex(2);
            }}
            childrenWrapperStyle={styles.childrenWrapper}
            tooltipStyle={styles.toolTip}
            displayInsets={{left: 0}}>
            <Icon
              name="chevron-left"
              size={scale(26)}
              onPress={navigation.goBack}
            />
          </Tooltip>
        }
      />
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
              value={stepData[el.id]}
              onChange={(value) =>
                setStepData((state) => ({...state, [el.id]: value}))
              }
            />
          );
        })}
        <Button
          buttonContent={formatMessage({
            id: 'screen.stepOne.continueToStepTwo',
          })}
          buttonStyle={(pressed) => styles.button}
          buttonTextStyle={(pressed) => styles.buttonTextStyle}
          onPress={() => {
            navigation.navigate('StepTwo');
          }}
        />
      </Container.ScrollView>
    </Container>
  );
};

export default StepOne;

const styles = ScaledSheet.create({
  header: {
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    width: scale(32),
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
  formOneCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productionCalculatorCell: {
    marginTop: '15@ms',
  },
});
