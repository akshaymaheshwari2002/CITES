import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, StatusBar, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {ScaledSheet, vs, ms, s} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {Container, Button, Header, Tooltip} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import ChecklistContent from './ChecklistContent';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {getInstance} from '@utils/RealmHelper';
import {Inspection, StepOne as StepOneModel} from '@models';
import {setActiveInspection} from '@store/slices/persistedSlice';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const StepOne = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const isMounting = useRef(true);
  const dispatch = useDispatch();
  const activeStepOneId = useSelector(
    (state) => state.persistedReducer.activeInspection.activeStepOneId,
  );
  const activeInspectionId = useSelector(
    (state) => state.persistedReducer.activeInspection.id,
  );
  const [stepData, setStepData] = useState({});
  const [tooltipIndex, setTooltipIndex] = useState(
    route.params.showToolTip ? 1 : 0,
  );

  const tooltipProps = useMemo(
    () =>
      Platform.OS === 'ios'
        ? {
            arrowStyle: {left: ms(18)},
            tooltipStyle: {
              position: 'absolute',
              top: ms(getStatusBarHeight()) + vs(10) + ms(50),
              left: s(8),
            },
            childrenWrapperStyle: {
              position: 'absolute',
              top: ms(getStatusBarHeight()) + vs(10),
              left: s(8),
            },
          }
        : {
            childrenWrapperStyle: {
              position: 'absolute',
              top: getStatusBarHeight() + vs(19),
              left: ms(12),
            },
            tooltipStyle: {
              position: 'absolute',
              top: getStatusBarHeight() + vs(19.5) + ms(50),
              left: s(12),
            },
          },
    [],
  );

  const bullet = useMemo(
    () => (
      <View style={checkliststyles.bulletContainer}>
        <View style={checkliststyles.bullet} />
      </View>
    ),
    [],
  );

  const handleSubmit = useCallback(async () => {
    if (Object.keys(stepData).length) {
      const realm = await getInstance();
      let stepOneData = ChecklistContent({}).reduce(
        (acc, current) => ({
          ...acc,
          [current.id]: stepData[current.id] ?? false,
        }),
        {},
      );
      stepOneData = activeStepOneId
        ? new StepOneModel({...stepOneData, _id: activeStepOneId})
        : new StepOneModel(stepOneData);
      const inspectionData = new Inspection({
        _id: activeInspectionId,
        stepOne: stepOneData,
      });

      console.log({inspectionData});

      realm.write(() => {
        realm.create('Inspection', inspectionData, 'modified');
        dispatch(
          setActiveInspection({
            id: inspectionData._id.toHexString(),
            activeStepOneId: stepOneData._id.toHexString(),
          }),
        );
      });
    }
  }, [activeInspectionId, activeStepOneId, dispatch, stepData]);

  useEffect(() => {
    navigation.setOptions({
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
            <Icon name="home" size={vs(35)} color={RawColors.grey75} />
          </Tooltip>
        );
      },
    });
  }, [formatMessage, navigation, tooltipIndex]);

  useEffect(() => {
    if (isMounting.current) {
      (async () => {
        if (activeStepOneId) {
          const realm = await getInstance();
          const stepOneObjects = realm.objects('StepOne');
          const activeStepOneData = JSON.parse(
            JSON.stringify(
              stepOneObjects.filter(
                ({_id}) => _id.toHexString() === activeStepOneId,
              )[0] ?? {},
            ),
          );

          delete activeStepOneData.formOne;
          delete activeStepOneData._id;
          setStepData(activeStepOneData);
        }
      })();

      isMounting.current = false;
    }
  }, [activeStepOneId]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
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
            {...tooltipProps}>
            <Icon
              name="chevron-left"
              size={ms(26)}
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
              id={el.id}
              content={el.content}
              value={stepData[el.id]}
              onChange={(value) => {
                setStepData((state) => ({...state, [el.id]: value}));
              }}
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
            onPress={handleSubmit}
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

export default StepOne;
