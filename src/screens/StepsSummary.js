import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Easing,
  Dimensions,
  Animated,
} from 'react-native';
import {useIntl} from 'react-intl';
import {ms, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {RawColors, Fonts} from '@styles/Themes';
import {Container, Button, Header, AnimatedView} from '@atoms';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StepsSummary = ({navigation}) => {
  const {formatMessage} = useIntl();
  // const animationValue = useRef(new Animated.Value(0)).current;
  // const xPos = animationValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [windowWidth, 0],
  // });
  // const yPos = animationValue.interpolate({
  //   inputRange: [0, 0.8, 1],
  //   outputRange: [windowHeight / 2, -20, 0],
  // });

  // useEffect(() => {
  //   const ani = Animated.timing(animationValue, {
  //     toValue: 1,
  //     duration: 1000,
  //     easing: Easing.elastic(1),
  //     useNativeDriver: true,
  //   });
  //   ani.start();
  // }, [animationValue]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={navigation.goBack} />
        }
      />
      <Container.ScrollView
        style={CommonStyles.flex1}
        contentContainerStyle={styles.contentContainer}>
        <ImageBackground
          source={Images.semiCircle}
          style={CommonStyles.flex1}
          imageStyle={styles.backgroundImage}>
          <AnimatedView>
            <Text style={styles.title}>
              {formatMessage({id: 'screen.StepsSummary.headerPartOne'})}
            </Text>
            <Text style={styles.title}>
              {formatMessage({id: 'screen.StepsSummary.headerPartTwo'})}
            </Text>
            <Text style={styles.title}>
              {formatMessage({id: 'screen.StepsSummary.headerPartThree'})}
            </Text>
          </AnimatedView>
          <View style={styles.pointsContainer}>
            <View style={[styles.pointRow, styles.pointOne]}>
              <View style={styles.numberContainer}>
                <Text style={[Fonts.Lato18B, {color: RawColors.white}]}>1</Text>
              </View>
              <View>
                <Text style={styles.pointTitle}>
                  {formatMessage({id: 'screen.StepsSummary.contentOne'})}
                </Text>
                <Text style={styles.pointContent}>
                  {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                </Text>
              </View>
            </View>
            <View style={[styles.pointRow, styles.pointTwo]}>
              <View style={styles.numberContainer}>
                <Text style={[Fonts.Lato18B, {color: RawColors.white}]}>2</Text>
              </View>
              <View>
                <Text style={styles.pointTitle}>
                  {formatMessage({id: 'screen.StepsSummary.contentTwo'})}
                </Text>
                <Text style={styles.pointContent}>
                  {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                </Text>
              </View>
            </View>
            <View style={[styles.pointRow, styles.pointThree]}>
              <View style={styles.numberContainer}>
                <Text style={[Fonts.Lato18B, {color: RawColors.white}]}>3</Text>
              </View>
              <View>
                <Text style={styles.pointTitle}>
                  {formatMessage({id: 'screen.StepsSummary.contentThree'})}
                </Text>
                <Text style={styles.pointContent}>
                  {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                </Text>
              </View>
            </View>
          </View>
          <Button
            onPress={() =>
              navigation.navigate('StepOne', {
                screen: 'StepOne',
                params: {showToolTip: false},
              })
            }
            buttonContent={formatMessage({
              id: 'screen.InspectionFlow.buttonTwoPartTwo',
            })}
            buttonTextStyle={() => styles.buttonText}
            buttonStyle={() => styles.button}
          />
        </ImageBackground>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  contentContainer: {
    backgroundColor: RawColors.transparent,
    paddingHorizontal: '16@s',
    paddingTop: '16@vs',
  },
  backgroundImage: {
    resizeMode: 'contain',
    position: 'absolute',
    left: '-110%',
  },
  title: {
    ...Fonts.HelveticaNeue25B,
    lineHeight: '25@ms',
    letterSpacing: '0.48@ms',
  },
  pointsContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    marginTop: '54@vs',
    marginBottom: '75@ms',
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointOne: {marginLeft: '30%'},
  pointTwo: {marginLeft: '42%', paddingVertical: '36@vs'},
  pointThree: {marginLeft: '30%'},
  numberContainer: {
    height: '40@ms',
    width: '40@ms',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: RawColors.softRed,
    borderRadius: '23@ms',
    marginRight: '16@s',
  },
  pointTitle: {
    ...Fonts.HelveticaNeue25B,
    lineHeight: '25@ms',
    color: RawColors.darkGrey,
  },
  pointContent: {
    ...Fonts.Lato14R,
    lineHeight: '14@ms',
    color: RawColors.darkGrey,
  },
  button: {
    marginBottom: '24@vs',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: RawColors.black,
    ...Fonts.Lato18B,
  },
});

export default StepsSummary;
