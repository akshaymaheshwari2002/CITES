import React from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
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
        source={Images.backgroundPatternTopBlur}
        imageStyle={styles.resizeModeRepeat}>
        <Container.ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logo}>
            <Image
              source={Images?.eye}
              style={styles.eye}
              resizeMode="contain"
            />
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
                          id: 'button.learnUseApp',
                        })}
                      </Text>

                      <Text style={styles.buttonTextTwo}>
                        {formatMessage({
                          id: 'button.firstInspection',
                        })}
                      </Text>
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
                          id: 'button.beginInspection',
                        })}
                      </Text>

                      <Text style={styles.buttonTextTwo}>
                        {formatMessage({
                          id: 'button.newInspection',
                        })}
                      </Text>
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
                          id: 'button.continueInspection',
                        })}
                      </Text>
                      <Text style={styles.buttonTextTwo}>
                        {formatMessage({
                          id: 'button.startedInspection',
                        })}
                      </Text>
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
  resizeModeRepeat: {
    resizeMode: 'repeat',
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
  eye: {
    height: '60@ms',
    aspectRatio: 1.3194,
    alignSelf: 'flex-end',
    marginVertical: '10@s',
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
    borderColor: RawColors.brightRed,
    backgroundColor: RawColors.brightRed,
    height: '100@ms',
    width: '294@s',
    marginVertical: '20@s',
    marginBottom: '16@vs',
  },
  buttonTextOne: {
    ...Fonts.Lato20R,
    marginVertical: '5@s',
    color: RawColors.white,
  },
  buttonTextTwo: {
    ...Fonts.Lato20I,
    color: RawColors.white,
    alignSelf: 'center',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'flex-end',
    width: '78.4%',
    top: '58@vs',
  },
  icon: {
    marginLeft: '2@s',
    flex: 1,
    marginTop: '4@ms',
  },
});

export default InspectionFlow;
