import React, {useCallback} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';

const HomePage = ({navigation}) => {
  const {formatMessage} = useIntl();

  const handlePress = useCallback(() => {
    navigation.navigate('InspectionFlow');
  }, [navigation]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <ImageBackground
        style={styles.container}
        source={Images.backgroundPatternTop}
        imageStyle={styles.resizeModeRepeat}>
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
                  <Button
                    onPress={handlePress}
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonContent={formatMessage({
                      id: 'button.inspectFacility',
                    })}
                  />
                  <Button
                    onPress={() => navigation.navigate('SourceFlow')}
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonContent={formatMessage({
                      id: 'button.determineSourceCode',
                    })}
                  />
                  <Button
                    onPress={() => {}}
                    buttonContent={formatMessage({
                      id: 'button.giveFeedback',
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
  resizeModeRepeat: {
    resizeMode: 'repeat',
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
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: '84@vs',
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
