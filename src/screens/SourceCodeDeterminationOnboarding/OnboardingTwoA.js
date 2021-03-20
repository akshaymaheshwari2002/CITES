import React from 'react';
import {Text, ImageBackground} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const OnboardingTwoA = () => {
  const {formatMessage} = useIntl();

  return (
    <ImageBackground
      source={Images.onboardingTwo}
      style={CommonStyles.flex1}
      imageStyle={styles.backgroundImage}>
      <Container.ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.OnboardingTwoA.title'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.OnboardingTwoA.contentOne'})}
        </Text>
      </Container.ScrollView>
    </ImageBackground>
  );
};

const styles = ScaledSheet.create({
  contentContainer: {
    paddingHorizontal: '34@s',
    paddingVertical: '30@vs',
    backgroundColor: RawColors.transparent,
  },
  content: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '34@ms',
    marginTop: '16@vs',
    paddingBottom: '16@vs',
    ...Fonts.Lato20R,
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '34@ms',
    marginTop: '16@vs',
    ...Fonts.Lato30R,
  },
  backgroundImage: {
    resizeMode: 'center',
    position: 'absolute',
    paddingLeft: '600@s',
    paddingTop: '600@s',
  },
});

export default OnboardingTwoA;
