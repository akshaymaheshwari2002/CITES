import React from 'react';
import {Text, ImageBackground} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const OnboardingOneA = () => {
  const {formatMessage} = useIntl();

  return (
    <ImageBackground
      source={Images.backOnboardingOneA}
      style={CommonStyles.flex1}
      imageStyle={styles.backgroundImage}>
      <Container.ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.OnboardingOneA.title'})}
        </Text>
        <Text style={[styles.content, styles.gap]}>
          {formatMessage({id: 'screen.OnboardingOneA.contentOne'})}
        </Text>
        <Text style={[styles.content, styles.gapLess]}>
          {formatMessage({id: 'screen.OnboardingOneA.contentOnePart'})}
        </Text>
        <Text style={[styles.content, styles.gap]}>
          {formatMessage({id: 'screen.OnboardingOneA.contentTwo'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.OnboardingOneA.contentThree'})}
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
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '34@ms',
    marginHorizontal: '20@s',
    marginTop: '15@s',
    ...Fonts.Lato30R,
  },
  gapLess: {marginTop: '10@vs'},
  gap: {marginTop: '30@vs'},
  content: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '30@ms',
    ...Fonts.Lato17R,
  },
  backgroundImage: {
    resizeMode: 'contain',
    position: 'absolute',
    opacity: 1,
  },
});

export default OnboardingOneA;
