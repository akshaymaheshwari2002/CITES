import React, {useCallback} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';
import {useSelector} from 'react-redux';

const HomePage = ({navigation}) => {
  const {formatMessage} = useIntl();
  const activeStepOneId = useSelector(
    (state) => state.persistedReducer.activeInspection.activeStepOneId,
  );
  const activeStepTwoId = useSelector(
    (state) => state.persistedReducer.activeInspection.activeStepTwoId,
  );
  const activeStepThreeId = useSelector(
    (state) => state.persistedReducer.activeInspection.activeStepThreeId,
  );

  const renderButtonContent = useCallback(() => {
    let continueText;

    if (activeStepOneId) {
      continueText = formatMessage({id: 'button.continueToStep1'});
    } else if (activeStepTwoId) {
      continueText = formatMessage({id: 'button.continueToStep2'});
    } else if (activeStepThreeId) {
      continueText = formatMessage({id: 'button.continueToStep3'});
    } else {
      continueText = null;
    }

    const buttonContent = (
      <View>
        <Text style={styles.buttonText}>
          {formatMessage({
            id: 'screen.HomePage.buttonOne',
          })}
        </Text>
        {continueText ? (
          <Text style={styles.buttonText}>{continueText}</Text>
        ) : null}
      </View>
    );

    return buttonContent;
  }, [activeStepOneId, activeStepThreeId, activeStepTwoId, formatMessage]);

  const handlePress = useCallback(() => {
    if (activeStepOneId) {
      navigation.navigate('TabNavigator', {screen: 'StepOne'});
    } else if (activeStepTwoId) {
      navigation.navigate('StepTwo');
    } else if (activeStepThreeId) {
      navigation.navigate('StepThree');
    } else {
      navigation.navigate('InspectionFlow');
    }
  }, [activeStepOneId, activeStepThreeId, activeStepTwoId, navigation]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <ImageBackground
        style={styles.container}
        source={Images.backgroundPatternTop}>
        <Container.ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={Images.logo} style={styles.logo} />
          <ImageBackground
            style={styles.backgroundContainer}
            source={Images.backgroundThree}
            imageStyle={styles.backgroundImage}>
            <ImageBackground
              style={styles.backgroundContainer}
              source={Images.backgroundTwo}
              imageStyle={styles.backgroundImage}>
              <ImageBackground
                style={styles.backgroundContainer}
                source={Images.backgroundOne}
                imageStyle={styles.backgroundImage}>
                <View style={styles.contentContainer}>
                  <Text style={styles.header}>
                    {formatMessage({id: 'screen.HomePage.header'})}
                  </Text>
                  <Button
                    onPress={handlePress}
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonContent={renderButtonContent()}
                  />
                  <Button
                    onPress={() => navigation.navigate('SourceFlow')}
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonContent={formatMessage({
                      id: 'screen.HomePage.buttonTwo',
                    })}
                  />
                  <Button
                    onPress={() => {}}
                    buttonContent={formatMessage({
                      id: 'screen.HomePage.buttonThree',
                    })}
                  />
                </View>
              </ImageBackground>
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
    backgroundColor: RawColors.darkSalmon,
  },
  scrollContainer: {
    paddingTop: '120@vs',
    backgroundColor: RawColors.transparent,
  },
  backgroundContainer: {
    flexGrow: 1,
    paddingTop: '28@vs',
  },
  backgroundImage: {
    resizeMode: 'stretch',
  },
  logo: {
    position: 'absolute',
    top: '80@vs',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '146@vs',
    width: '250@s',
  },
  contentContainer: {
    flex: 1,
    width: '78.4%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '64@vs',
    paddingBottom: '16@vs',
  },
  header: {
    marginBottom: '16@vs',
    textAlign: 'center',
    color: RawColors.darkGreyBlue,
    ...Fonts.Lato34R,
    fontSize: '34@ms0.1',
  },
  filledButton: {
    backgroundColor: RawColors.darkSalmon,
    minHeight: '66@vs',
    borderWidth: 0,
    marginBottom: '16@vs',
  },
  buttonText: {
    color: RawColors.white,
    textAlign: 'center',
    lineHeight: '22@ms',
    ...Fonts.Lato15R,
  },
});

export default HomePage;
