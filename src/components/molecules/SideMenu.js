import React from 'react';
import {
  View,
  useWindowDimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button} from '@atoms';
import {navigate} from '@utils/RootNavigation';

const SideMenu = ({hideModal}) => {
  const {width: windowWidth} = useWindowDimensions();
  const activeInspection = useSelector((state) => {
    return state?.sessionReducer?.activeInspection;
  });

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
          <View>
            <Button
              buttonContent={'Step 1'}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('StepOne');
              }}
            />
            {Object.keys(activeInspection ?? {}).length &&
            activeInspection?.stepOne &&
            Object.values(activeInspection?.stepOne ?? {}).reduce(
              (accumulator, currentValue) =>
                !currentValue ? false : accumulator,
              true,
            ) ? (
              <Button
                buttonContent={'Step 2'}
                buttonStyle={() => styles.button}
                buttonTextStyle={() => styles.buttonTextStyle}
                onPress={() => {
                  navigate('StepTwo');
                }}
              />
            ) : null}
            {Object.keys(activeInspection ?? {}).length &&
            activeInspection?.stepTwo &&
            Object.values(activeInspection?.stepTwo ?? {}).reduce(
              (accumulator, currentValue) =>
                !currentValue ? false : accumulator,
              true,
            ) ? (
              <Button
                buttonContent={'Step 3'}
                buttonStyle={() => styles.button}
                buttonTextStyle={() => styles.buttonTextStyle}
                onPress={() => {
                  navigate('StepThree');
                }}
              />
            ) : null}
            {Object.keys(activeInspection ?? {}).length ? (
              <Button
                buttonContent={'Form 1'}
                buttonStyle={() => styles.button}
                buttonTextStyle={() => styles.buttonTextStyle}
                onPress={() => {
                  navigate('FormOne');
                }}
              />
            ) : null}
            {Object.keys(activeInspection ?? {}).length &&
            activeInspection?.stepOne &&
            Object.values(activeInspection?.stepOne ?? {}).reduce(
              (accumulator, currentValue) =>
                !currentValue ? false : accumulator,
              true,
            ) ? (
              <Button
                buttonContent={'Form 2'}
                buttonStyle={() => styles.button}
                buttonTextStyle={() => styles.buttonTextStyle}
                onPress={() => {
                  navigate('FormTwo');
                }}
              />
            ) : null}
            {Object.keys(activeInspection ?? {}).length &&
            activeInspection?.stepOne &&
            Object.values(activeInspection?.stepOne ?? {}).reduce(
              (accumulator, currentValue) =>
                !currentValue ? false : accumulator,
              true,
            ) ? (
              <Button
                buttonContent={'Form 3'}
                buttonStyle={() => styles.button}
                buttonTextStyle={() => styles.buttonTextStyle}
                onPress={() => {
                  navigate('FormThree');
                }}
              />
            ) : null}
            {Object.keys(activeInspection ?? {}).length &&
            activeInspection?.stepTwo &&
            Object.values(activeInspection?.stepTwo ?? {}).reduce(
              (accumulator, currentValue) =>
                !currentValue ? false : accumulator,
              true,
            ) ? (
              <Button
                buttonContent={'Form 4'}
                buttonStyle={() => styles.button}
                buttonTextStyle={() => styles.buttonTextStyle}
                onPress={() => {
                  navigate('FormFour');
                }}
              />
            ) : null}
            <Button
              buttonContent={'Determine Source'}
              buttonStyle={() => styles.button}
              buttonTextStyle={() => styles.buttonTextStyle}
              onPress={() => {
                navigate('DetermineSourceCode');
              }}
            />
            <Button
              buttonContent={'Production Capacity Calculator'}
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
  },
  scrollView: {
    marginBottom: vs(54),
    marginTop: vs(98) - getStatusBarHeight(),
    alignSelf: 'flex-end',
    backgroundColor: RawColors.sideMenu,
    borderTopLeftRadius: '14@s',
    borderBottomLeftRadius: '14@s',
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
});

export default SideMenu;
