import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {RawColors, Fonts} from '@styles/Themes';
import {Container, Button, AnimatedView} from '@atoms';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';
import {setActiveInspection} from '@store/slices/sessionSlice';
import {navigate} from '@utils/RootNavigation';
import {CommonActions} from '@react-navigation/routers';

const BeginInspection = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const windowWidth = useWindowDimensions().height;
  const dispatch = useDispatch();

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
        horizontal={true}
        onMomentumScrollEnd={() => {
          navigate('StepOne');
        }}
        contentContainerStyle={styles.contentContainer}>
        <ImageBackground
          source={Images.semiCircle}
          style={CommonStyles.flex1}
          imageStyle={styles.backgroundImage}>
          <AnimatedView
            startXPos={windowWidth}
            elevatedYValue={0}
            startYPos={0}>
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
              <View style={styles.textContainer}>
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
              <View style={styles.textContainer}>
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
          <View style={styles.btn}>
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
          </View>
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
    width: '100@s',
    alignItems: 'center',
  },
  pointOne: {marginLeft: '108@s'},
  pointTwo: {
    paddingVertical: '36@vs',
    marginLeft: '146@s',
  },
  pointThree: {marginLeft: '108@s'},
  numberContainer: {
    height: '40@ms',
    width: '40@ms',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: RawColors.softRed,
    borderRadius: '23@ms',
    marginRight: '16@s',
  },
  textContainer: {
    width: '130@s',
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
    width: '290@s',
    backgroundColor: RawColors.sugarCane,
  },
  btn: {
    marginBottom: '24@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: RawColors.black,
    ...Fonts.Lato18B,
  },
});

export default BeginInspection;
