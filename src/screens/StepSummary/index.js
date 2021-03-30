import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Easing,
  ImageBackground,
} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIsFocused} from '@react-navigation/native';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets/';

const StepSummary = ({navigation: {navigate}}) => {
  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
  const {formatMessage} = useIntl();
  const isFocused = useIsFocused();
  const animationValue = useRef(new Animated.Value(0)).current;
  const starScaleX = animationValue.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 1.5, 1],
  });
  const starScaleY = animationValue.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 1.5, 1],
  });
  const circleOpacity = animationValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 0],
  });
  const circleScaleX = animationValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 2],
  });
  const circleScaleY = animationValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 2],
  });

  useEffect(() => {
    if (isFocused) {
      const ani = Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      });
      ani.start();
    } else {
      animationValue.setValue(0);
    }
  }, [animationValue, isFocused]);
  const starsStyle = {
    position: 'absolute',
    justifyContent: 'center',
    height: ms(150),
    width: ms(150),
    transform: [{scaleX: starScaleX}, {scaleY: starScaleY}],
  };

  const circleStyle = {
    position: 'absolute',
    justifyContent: 'center',
    height: ms(150),
    width: ms(150),
    opacity: circleOpacity,
    transform: [{scaleX: circleScaleX}, {scaleY: circleScaleY}],
  };

  return (
    <Container>
      <Container.ScrollView
        contentContainerStyle={styles.container}
        style={CommonStyles.flex1}>
        <View style={styles.topContainer}>
          <View style={styles.title}>
            <Text style={styles.titleOne}>
              {formatMessage({id: 'screen.StepSummary.headerPartOne'})}
            </Text>
            <Text style={styles.titleTwo}>
              {formatMessage({id: 'screen.StepSummary.headerPartTwo'})}
            </Text>
          </View>
          <View style={styles.img}>
            <AnimatedImage
              source={Images.stars}
              resizeMode="contain"
              style={starsStyle}
            />
            <AnimatedImage
              source={Images.star}
              resizeMode="contain"
              style={circleStyle}
            />
            <Image source={Images.stepSummaryOne} style={styles.image} />
          </View>
        </View>

        <View style={styles.backColor}>
          <View style={styles.margin}>
            <Text style={styles.contentOne}>
              {formatMessage({id: 'screen.StepSummary.contentOne'})}
            </Text>
            <Text style={styles.content}>
              {formatMessage({id: 'screen.StepSummary.contentTwo'})}
            </Text>
            <Text style={styles.content}>
              {formatMessage({id: 'screen.StepSummary.contentThree'})}
            </Text>

            <Button
              buttonContent={formatMessage({
                id: 'button.printForms',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate()}
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.shareForms',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate()}
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.beginNewInspection',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate('InspectionFlow')}
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.exit',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate('LanguageSelection')}
            />
          </View>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: RawColors.white,
  },
  topContainer: {
    flexDirection: 'row',
    marginTop: '20@vs',
  },
  margin: {
    marginHorizontal: '30@s',
    alignItems: 'center',
  },
  title: {
    height: '100@vs',
    backgroundColor: 'white',
  },
  titleOne: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '26@s',
    letterSpacing: '0.48@s',
    marginLeft: '15@s',
    marginTop: '20@s',
  },
  titleTwo: {
    ...Fonts.Lato15R,
    color: RawColors.charcoalGrey60,
    lineHeight: '18@s',
    marginTop: '10@s',
    marginLeft: '15@s',
    letterSpacing: '0.09@s',
  },
  image: {
    height: '60@ms',
    width: '60@ms',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  img: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  backColor: {
    backgroundColor: 'white',
    marginTop: '30@s',
  },
  contentOne: {
    width: '100%',
    ...Fonts.Lato20SB,
    marginTop: '30@s',
    color: RawColors.black,
  },
  content: {
    width: '100%',
    ...Fonts.Lato17R,
    lineHeight: 22,
    letterSpacing: 0.41,
    marginTop: '20@s',
    color: RawColors.black,
  },
  button: {
    height: '46@vs',
    width: '100%',
    alignSelf: 'center',
    marginVertical: '16@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.marine,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StepSummary;
