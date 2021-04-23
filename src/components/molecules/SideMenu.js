import React, {useEffect, useState} from 'react';
import {
  View,
  useWindowDimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button} from '@atoms';
import {navigate} from '@utils/RootNavigation';

const SideMenu = ({hideModal}) => {
  const {width: windowWidth} = useWindowDimensions();
  const {formatMessage} = useIntl();
  // const activeInspection = useSelector((state) => {
  //   return state?.sessionReducer?.activeInspection;
  // });
  // const [isInspectionActive, setIsInspectionActive] = useState(false);
  // const [isStepOneCompleted, setIsStepOneCompleted] = useState(false);
  // const [isStepTwoCompleted, setIsStepTwoCompleted] = useState(false);

  // useEffect(() => {
  //   setIsInspectionActive(Boolean(Object.keys(activeInspection ?? {}).length));
  // }, [activeInspection, setIsInspectionActive]);

  // useEffect(() => {
  //   setIsStepOneCompleted(
  //     Boolean(
  //       activeInspection?.stepOne &&
  //         Object.values(activeInspection?.stepOne ?? {}).reduce(
  //           (accumulator, currentValue) =>
  //             !currentValue ? false : accumulator,
  //           true,
  //         ),
  //     ),
  //   );
  // }, [activeInspection, setIsInspectionActive, setIsStepOneCompleted]);

  // useEffect(() => {
  //   setIsStepTwoCompleted(
  //     Boolean(
  //       activeInspection?.stepTwo &&
  //         Object.values(activeInspection?.stepTwo ?? {}).reduce(
  //           (accumulator, currentValue) =>
  //             !currentValue ? false : accumulator,
  //           true,
  //         ),
  //     ),
  //   );
  // }, [activeInspection, setIsInspectionActive, setIsStepTwoCompleted]);

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={hideModal}
      activeOpacity={1}>
      <Container.ScrollView
        style={[
          styles.scrollView,
          {
            width: windowWidth < vs(180) ? windowWidth : vs(180),
          },
        ]}
        contentContainerStyle={styles.contentWrapper}>
        <TouchableWithoutFeedback>
          <View style={styles.height100}>
            <Button
              buttonContent={formatMessage({
                id: 'drawer.stepOne',
              })}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('StepOne');
              }}
            />
            <Button
              buttonContent={formatMessage({
                id: 'drawer.stepTwo',
              })}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('StepTwo');
              }}
            />
            <Button
              buttonContent={formatMessage({
                id: 'drawer.stepThree',
              })}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('StepThree');
              }}
            />
            <Button
              buttonContent={formatMessage({
                id: 'drawer.formOne',
              })}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('FormOne');
              }}
            />
            <Button
              buttonContent={formatMessage({
                id: 'drawer.formTwo',
              })}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('FormTwo');
              }}
            />
            <Button
              buttonContent={formatMessage({
                id: 'drawer.formThree',
              })}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('FormThree');
              }}
            />
            <Button
              buttonContent={formatMessage({
                id: 'drawer.formFour',
              })}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('FormFour');
              }}
            />
            <Button
              buttonContent={formatMessage({
                id: 'drawer.determineSourceCode',
              })}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('DetermineSourceCode');
              }}
            />
            <Button
              buttonContent={formatMessage({
                id: 'drawer.productionCapacityCalculator',
              })}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('ProductionCapacityCalculator');
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Container.ScrollView>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: '97@vs',
    marginBottom: '80@vs',
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: RawColors.black,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: RawColors.silverFoil,
    borderTopLeftRadius: '20@vs',
    borderBottomWidth: 1.5,
  },
  contentWrapper: {
    alignItems: 'center',
    paddingVertical: '10@s',
    backgroundColor: RawColors.transparent,
  },
  button: {
    backgroundColor: RawColors.approxTwilightBlue,
    borderColor: RawColors.grey75,
    borderWidth: '1@s',
    marginHorizontal: '16@s',
    marginVertical: '10@s',
  },
  buttonTextStyle: {
    textTransform: 'uppercase',
    color: RawColors.black,
    padding: '10@ms',
    ...Fonts.Lato15R,
  },
  height100: {
    height: '100%',
  },
});

export default SideMenu;
