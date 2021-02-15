import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';

const HomePage = () => {
  const {formatMessage} = useIntl();
  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <ImageBackground style={styles.container} source={Images.backPatternTop}>
        <Container.ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={Images.logo} style={styles.logo} />
          <ImageBackground
            style={styles.backContainer}
            source={Images.backThree}
            imageStyle={styles.backImage}>
            <ImageBackground
              style={styles.backContainer}
              source={Images.backTwo}
              imageStyle={styles.backImage}>
              <ImageBackground
                style={styles.backContainer}
                source={Images.backOne}
                imageStyle={styles.backImage}>
                <View style={styles.contentContainer}>
                  <Text style={styles.header}>
                    {formatMessage({id: 'screen.HomePage.header'})}
                  </Text>
                  <Button
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonText={formatMessage({
                      id: 'screen.HomePage.buttonOne',
                    })}
                  />
                  <Button
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonText={formatMessage({
                      id: 'screen.HomePage.buttonTwo',
                    })}
                  />
                  <Button
                    buttonStyle={() => styles.outlinedButton}
                    buttonText={formatMessage({
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
    backgroundColor: RawColors.darkSalmon,
  },
  scrollContainer: {
    paddingTop: '146@vs',
    backgroundColor: RawColors.transparent,
  },
  backContainer: {
    flexGrow: 1,
    paddingTop: '36@vs',
  },
  backImage: {
    resizeMode: 'stretch',
  },
  logo: {
    position: 'absolute',
    top: '73@vs',
    height: '146@vs',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 1,
    width: '294@s',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '80@vs',
    paddingBottom: '36@vs',
  },
  header: {
    marginBottom: '24@vs',
    textAlign: 'center',
    color: RawColors.darkGreyBlue,
    ...Fonts.Lato34R,
    fontSize: '34@ms0.1',
  },
  filledButton: {
    backgroundColor: RawColors.darkSalmon,
    width: '294@s',
    height: '84@vs',
    borderWidth: 0,
    marginBottom: '24@vs',
  },
  outlinedButton: {
    width: '294@s',
  },
});

export default HomePage;
