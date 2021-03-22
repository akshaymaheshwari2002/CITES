import React from 'react';
import {Text, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import {Fonts} from '@styles/Themes';
import {Images} from '@assets';
import {Container} from '@atoms';

const OnboardingFour = () => {
  const {formatMessage} = useIntl();

  return (
    <Container.ScrollView contentContainerStyle={styles.content}>
      <Text style={[styles.txt, styles.textWrapper]}>
        {formatMessage({id: 'screen.OnboardingFour.contentOne'})}
        <Text style={styles.word}>
          {formatMessage({id: 'screen.OnboardingFour.contentTwo'})}
        </Text>
        <Text style={styles.txt}>
          {formatMessage({id: 'screen.OnboardingFour.contentThree'})}
        </Text>
      </Text>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={Images.onboardingFour} />
      </View>
    </Container.ScrollView>
  );
};

const styles = ScaledSheet.create({
  textWrapper: {
    marginTop: '30@vs',
  },
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    ...Fonts.Lato20R,
  },
  word: {
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: '16@s',
    justifyContent: 'space-evenly',
  },
  img: {
    resizeMode: 'contain',
    height: '460@vs',
    width: '275@s',
  },
  imgContainer: {
    marginTop: '15@vs',
  },
});

export default OnboardingFour;
