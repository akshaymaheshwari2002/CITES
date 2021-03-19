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
        style={[styles.img, {height: vs(200), marginRight: s(38)}]}
        source={Images.onboardingThreeAPartTwo}
      />
      <Image style={styles.img} source={Images.backgroundNavbarLower} />
    </Container.ScrollView>
  );
};

const styles = ScaledSheet.create({
  txt: {
    textAlign: 'center',
    ...Fonts.Lato20R,
    lineHeight: '26@ms',
    marginVertical: '30@vs',
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default OnboardingThreeA;
