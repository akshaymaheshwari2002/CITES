import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
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
                  onPress={() => navigation.navigate('OnboardingOne')}
                  buttonStyle={() => styles.filledButton}
                  buttonTextStyle={() => ({color: RawColors.black})}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonOnePartOne',
                        })}
                      </Text>
                      <Text style={styles.buttonTextTwo}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonOnePartTwo',
                        })}
                      </Text>
                    </>
                  }
                />
                <Button
                  onPress={() => navigation.navigate('StepsSummary')}
                  buttonStyle={() => styles.filledButton}
                  buttonTextStyle={() => ({color: RawColors.black})}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonTwoPartOne',
                        })}
                      </Text>
                      <Text style={styles.buttonTextTwo}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonTwoPartTwo',
                        })}
                      </Text>
                    </>
                  }
                />
                <Button
                  buttonStyle={() => styles.filledButton}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonThreePartOne',
                        })}
                      </Text>
                      <Text style={styles.buttonTextTwo}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonThreePartTwo',
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
    lineHeight: 40,
    letterSpacing: 0.8,
  },
  headerTwo: {
    color: RawColors.darkGreyBlue,
    ...Fonts.HelveticaNeue26B,
    textAlign: 'right',
    lineHeight: 25,
    letterSpacing: 0.45,
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
    textAlign: 'left',
    ...Fonts.HelveticaNeue17R,
    color: RawColors.darkGreyBlue,
    alignSelf: 'flex-start',
    marginHorizontal: '20@s',
    marginTop: '18@s',
  },
  buttonTextTwo: {
    textAlign: 'left',
    ...Fonts.HelveticaNeue18B,
    fontWeight: 'bold',
    color: RawColors.darkGreyBlue,
    alignSelf: 'flex-start',
    marginHorizontal: '20@s',
    marginBottom: '18@s',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    top: '110@vs',
    height: '146@vs',
    paddingRight: '45@s',
    //paddingBottom: '20@s',
  },
});

export default InspectionFlow;
