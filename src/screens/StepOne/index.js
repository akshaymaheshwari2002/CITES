import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StatusBar, Platform} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {ScaledSheet, scale, verticalScale} from 'react-native-size-matters';
import Tooltip from 'react-native-walkthrough-tooltip';

import {Container, Button} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import ChecklistContent from './ChecklistContent';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const StepOne = ({navigation, route}) => {
  const {formatMessage} = useIntl();
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
  const [tooltipIndex, setTooltipIndex] = useState(
    route.params.showToolTip ? 1 : 0,
  );

  const bullet = (
    <View style={checkliststyles.bulletContainer}>
      <View style={checkliststyles.bullet} />
    </View>
  );

  useEffect(() => {
    console.log(tooltipIndex);
  }, [tooltipIndex]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {},
      tabBarIcon: () => {
        return (
          <Tooltip
            topAdjustment={
              Platform.OS === 'android' ? -StatusBar.currentHeight : 0
            }
            isVisible={tooltipIndex === 2}
            content={
              <Text style={styles.toolTipContent}>
                {formatMessage({
                  id: 'screen.StepOne.WalkThroughContentTwo',
                })}
              </Text>
            }
            backgroundColor={RawColors.backToolTipColor}
            arrowStyle={styles.arrowStyle}
            tooltipStyle={styles.toolTipStyle}
            placement="top"
            contentStyle={styles.toolTipContentStyle}
            arrowSize={styles.arrowSize}
            childContentSpacing={0}
            onClose={() => {
              setTooltipIndex(3);
              navigation.navigate('Search', {toolTip: true});
            }}>
            <View style={tooltipIndex === 2 ? styles.icon : {}}>
              <Feather
                name={'home'}
                size={verticalScale(35)}
                color={RawColors.grey75}
              />
            </View>
          </Tooltip>
        );
      },
    });
  }, [formatMessage, navigation, tooltipIndex]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Container.ScrollView>
        <View
          style={[
            CommonStyles.navigationHeader,
            {
              justifyContent: 'center',
              paddingTop: StatusBar.currentHeight,
              //backgroundColor: 'red',
              width: scale(32),
              // borderRadius: scale(13),
            },
          ]}>
          <Tooltip
            topAdjustment={
              Platform.OS === 'android'
                ? -StatusBar.currentHeight - verticalScale(26)
                : 0
            }
            isVisible={tooltipIndex === 1}
            content={
              <Text style={styles.toolTipContent}>
                {formatMessage({id: 'screen.StepOne.WalkThroughContentOne'})}
              </Text>
            }
            backgroundColor={RawColors.backToolTipColor}
            arrowStyle={styles.arrowStyle}
            //tooltipStyle={styles.toolTipStyle}
            placement="bottom"
            contentStyle={styles.toolTipContentStyle}
            arrowSize={styles.arrowSize}
            childContentSpacing={0}
            onClose={() => {
              setTooltipIndex(2);
            }}>
            <View
              style={{
                width: scale(32),
                height: scale(32),
              }}>
              <Icon
                name={'chevron-left'}
                size={scale(26)}
                style={tooltipIndex === 1 ? [styles.icon] : {}}
              />
            </View>
          </Tooltip>
        </View>
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
            buttonContent={formatMessage({
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
  header: {
    height: 55,
  },
  leftIcon: {margin: '8@s'},

  button: {
    backgroundColor: RawColors.sugarCane,
    borderColor: RawColors.prussianBlue,
    marginHorizontal: '30@s',
    marginVertical: '20@s',
  },
  arrowSize: {height: 10, width: 10},
  //arrowStyle: {margin: 2},
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
