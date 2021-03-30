import React from 'react';
import {Text, Image} from 'react-native';
import {useIntl} from 'react-intl';
import {s, ScaledSheet, vs} from 'react-native-size-matters';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';

const OnboardingThreeA = () => {
  const {formatMessage} = useIntl();

  return (
    <Container.ScrollView style={CommonStyles.screenContainer}>
      <Text style={styles.txt}>
        {formatMessage({id: 'screen.OnboardingThreeA.contentOne'})}
      </Text>
      <Image
        style={[styles.img, {height: vs(180)}]}
        source={Images.onboardingThreeA}
      />
      <Image
        style={[
          styles.img,
          {height: vs(250), marginRight: s(38), marginTop: s(-40)},
        ]}
        source={Images.onboardingThreeAPartTwo}
      />
      <Image
        style={[styles.img, styles.abImg]}
        source={Images.backgroundNavbarLower}
      />
    </Container.ScrollView>
  );
};

const styles = ScaledSheet.create({
  txt: {
    textAlign: 'center',
    ...Fonts.Lato20R,
    lineHeight: '26@ms',
    marginTop: '45@vs',
    marginBottom: '30@vs',
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  abImg: {
    marginTop: '-50@ms',
  },
});

export default OnboardingThreeA;
