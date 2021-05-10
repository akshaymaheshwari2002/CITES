import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms, s} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CommonActions} from '@react-navigation/native';

import {RawColors, Fonts} from '@styles/Themes';
import {Container, Button, AnimatedView} from '@atoms';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';
import {setActiveInspection} from '@store/slices/sessionSlice';

const BeginInspection = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const windowWidth = useWindowDimensions().height;
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.persistedReducer.locale);
  const {height, width} = Dimensions.get('window');
  const aspectRatio = height / width;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          hitSlop={10}
          onPress={() => {
            if (route.params.fromOnboarding) {
              navigation.dispatch(
                CommonActions.reset({
                  index: 3,
                  routes: [
                    {name: 'LanguageSelection'},
                    {name: 'HomePage'},
                    {name: 'InspectionFlow'},
                    {name: 'InspectionOnboarding', params: {defaultIndex: 0}},
                  ],
                }),
              );
            } else {
              navigation.goBack();
            }
          }}>
          <Icon name="chevron-left" size={ms(22)} />
        </Pressable>
      ),
    });
  }, [formatMessage, navigation, route.params.fromOnboarding]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        style={CommonStyles.flex1}
        contentContainerStyle={styles.contentContainer}>
        <ImageBackground
          source={Images.semiCircle}
          style={CommonStyles.flex1}
          imageStyle={styles.backgroundImage}>
          <AnimatedView startXPos={windowWidth} startYPos={0}>
            <Text style={styles.title}>
              {formatMessage({id: 'screen.StepsSummary.header'})}
            </Text>
          </AnimatedView>
          <View style={styles.pointsContainer}>
            <View
              style={[
                styles.pointRow,
                aspectRatio > 1.6 ? {marginLeft: s(110)} : {marginLeft: s(100)},
              ]}>
              <Image source={Images.beginNo1} style={styles.helpIcon} />
              <View style={styles.textContainer}>
                <Text style={styles.pointTitle}>
                  {formatMessage({id: 'screen.StepsSummary.contentOne'})}
                </Text>
                <Text style={styles.pointContent}>
                  {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.pointRow,
                aspectRatio > 1.6 ? {marginLeft: s(146)} : {marginLeft: s(115)},
              ]}>
              <Image source={Images.beginNo2} style={styles.helpIcon} />
              <View style={styles.textContainer}>
                <Text style={styles.pointTitle}>
                  {formatMessage({id: 'screen.StepsSummary.contentTwo'})}
                </Text>
                <Text style={styles.pointContent}>
                  {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.pointRow,
                aspectRatio > 1.6 ? {marginLeft: s(110)} : {marginLeft: s(90)},
              ]}>
              <Image source={Images.beginNo3} style={styles.helpIcon} />
              <View style={styles.textContainer}>
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
            onPress={async () => {
              await dispatch(setActiveInspection({}));
              navigation.navigate('StepOne', {
                screen: 'StepOne',
                params: {showToolTip: false},
              });
            }}
            buttonContent={formatMessage({
              id: 'button.beginInspection',
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
    paddingHorizontal: '14@s',
    paddingTop: '16@vs',
  },
  backgroundImage: {
    resizeMode: 'contain',
    position: 'absolute',
    left: '-110%',
    tintColor: RawColors.eggshell,
  },
  title: {
    ...Fonts.HelveticaNeue25B,
    letterSpacing: '0.48@ms',
    lineHeight: '40.7@ms',
  },
  pointsContainer: {
    //backgroundColor: 'pink',
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingTop: '54@vs',
    paddingBottom: '90.7@ms',
  },
  pointRow: {
    flexDirection: 'row',
    width: '100@s',
    //backgroundColor:'green',
    alignItems: 'center',
  },
  pointOne: {
    backgroundColor: 'pink',
  },
  pointTwo: {
    paddingVertical: '36@vs',
    marginLeft: '146@s',
  },
  pointThree: {
    marginLeft: '110@s',
  },
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

export default BeginInspection;
