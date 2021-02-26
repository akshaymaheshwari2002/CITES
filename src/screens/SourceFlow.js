import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';

const SourceFlow = ({navigation}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <ImageBackground
        style={styles.container}
        source={Images.backgroundPatternTopBlur}>
        <Container.ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logo}>
            <Text style={styles.headerOne}>
              {formatMessage({id: 'screen.SourceFlow.headerPartOne'})}
            </Text>
            <Text style={styles.headerTwo}>
              {formatMessage({id: 'screen.SourceFlow.headerPartTwo'})}
            </Text>
            <Text style={styles.headerTwo}>
              {formatMessage({id: 'screen.SourceFlow.headerPartThree'})}
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
                  onPress={() => navigation.navigate('OnboardingOneA')}
                  buttonStyle={() => styles.filledButton}
                  buttonTextStyle={() => ({color: RawColors.black})}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'button.learnSourceCode',
                        })}
                      </Text>
                    </>
                  }
                />
                <Button
                  //onPress={() => navigation.navigate('StepsSummary')}
                  buttonStyle={() => styles.filledButton}
                  buttonTextStyle={() => ({color: RawColors.black})}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'button.determineSourceCodeOf',
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
    marginLeft: '16@s',
    marginVertical: '30@s',
  },

  logo: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'flex-end',
    width: '78.4%',
    top: '98@vs',
  },
});

export default SourceFlow;
