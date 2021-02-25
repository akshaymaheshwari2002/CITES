import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';

const InspectionFlow = ({navigation}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <ImageBackground
        style={styles.container}
        source={Images.backgroundPatternTopBlur}>
        <Container.ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logo}>
            <Text style={styles.headerOne}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartOne'})}
            </Text>
            <Text style={styles.headerTwo}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartTwo'})}
            </Text>
            <Text style={styles.headerTwo}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartThree'})}
            </Text>
            <Text style={styles.headerTwo}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartFour'})}
            </Text>
          </View>
          <ImageBackground
            style={styles.backgroundContainer}
            source={Images.backgroundTwoBlur}
            imageStyle={styles.backgroundImage}>
            <ImageBackground
              style={styles.backgroundContainer}
              source={Images.backgroundOne}
              imageStyle={styles.backgroundImage}>
              <View style={styles.contentContainer}>
                <Button
                  onPress={() => navigation.navigate('InspectionOnboarding')}
                  buttonStyle={() => styles.filledButton}
                  buttonTextStyle={() => ({color: RawColors.black})}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonOnePartOne',
                        })}
                      </Text>
                      <View style={styles.secondText}>
                        <Text style={styles.buttonTextTwo}>
                          {formatMessage({
                            id: 'screen.InspectionFlow.buttonOnePartTwo',
                          })}
                        </Text>
                        <Icon
                          name="chevron-right"
                          size={ms(18)}
                          style={styles.icon}
                        />
                      </View>
                    </>
                  }
                />
                <Button
                  onPress={() =>
                    navigation.navigate('TabNavigator', {
                      screen: 'StepsSummary',
                    })
                  }
                  buttonStyle={() => styles.filledButton}
                  buttonTextStyle={() => ({color: RawColors.black})}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonTwoPartOne',
                        })}
                      </Text>
                      <View style={styles.secondText}>
                        <Text style={styles.buttonTextTwo}>
                          {formatMessage({
                            id: 'screen.InspectionFlow.buttonTwoPartTwo',
                          })}
                        </Text>
                        <Icon
                          name="chevron-right"
                          size={ms(18)}
                          style={styles.icon}
                        />
                      </View>
                    </>
                  }
                />
                <Button
                  onPress={() =>
                    navigation.navigate('TabNavigator', {
                      screen: 'ContinueInspection',
                    })
                  }
                  buttonStyle={() => styles.filledButton}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonThreePartOne',
                        })}
                      </Text>
                      <View style={styles.secondText}>
                        <Text style={styles.buttonTextTwo}>
                          {formatMessage({
                            id: 'screen.InspectionFlow.buttonThreePartTwo',
                          })}
                        </Text>
                        <Icon
                          name="chevron-right"
                          size={ms(18)}
                          style={styles.icon}
                        />
                      </View>
                    </>
                  }
                />
              </View>
            </ImageBackground>
          </ImageBackground>
        </Container.ScrollView>
      </ImageBackground>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: RawColors.greyLight,
  },
  scrollContainer: {
    paddingTop: '140@vs',
    backgroundColor: RawColors.transparent,
  },
  backgroundContainer: {
    flexGrow: 1,
    paddingTop: '28@vs',
  },
  backgroundImage: {
    resizeMode: 'stretch',
  },
  headerOne: {
    color: RawColors.brightRed,
    ...Fonts.HelveticaNeue40B,
    lineHeight: '40@ms',
    letterSpacing: '0.8@ms',
  },
  headerTwo: {
    color: RawColors.darkGreyBlue,
    ...Fonts.HelveticaNeue26B,
    textAlign: 'right',
    lineHeight: '26@ms',
    letterSpacing: '0.45@ms',
  },
  contentContainer: {
    flex: 1,
    width: '78.4%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '100@vs',
    paddingBottom: '16@vs',
  },
  filledButton: {
    borderColor: RawColors.darkSalmon,
    height: '84@ms',
    marginBottom: '16@vs',
  },
  buttonTextOne: {
    ...Fonts.Lato17R,
    color: RawColors.darkGreyBlue,
    alignSelf: 'flex-start',
    marginLeft: '20@s',
    marginTop: '18@s',
  },
  secondText: {
    flexDirection: 'row',
    marginLeft: '20@s',
    marginBottom: '18@s',
    alignItems: 'center',
  },
  buttonTextTwo: {
    ...Fonts.Lato18B,
    fontWeight: 'bold',
    color: RawColors.darkGreyBlue,
    alignSelf: 'flex-start',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'flex-end',
    width: '78.4%',
    top: '98@vs',
  },
  icon: {
    marginLeft: '2@s',
    flex: 1,
    marginTop: '4@ms',
  },
});

export default InspectionFlow;
