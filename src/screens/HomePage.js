import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';

const HomePage = ({navigation}) => {
  const {formatMessage} = useIntl();
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
                    onPress={() => navigation.navigate('InspectionFlow')}
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonContent={formatMessage({
                      id: 'screen.HomePage.buttonOne',
                    })}
                  />
                  <Button
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonContent={formatMessage({
                      id: 'screen.HomePage.buttonTwo',
                    })}
                  />
                  <Button
                    onPress={() => navigation.navigate('SubmitFeedback')}
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
    top: '60@vs',
    resizeMode: 'contain',
    alignSelf: 'center',
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
});

export default HomePage;
