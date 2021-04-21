import React from 'react';
import {Text, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';
import CommonStyles from '@styles/CommonStyles';

import {Fonts} from '@styles/Themes';
import {Images} from '@assets';
import {Container} from '@atoms';

const OnboardingFour = () => {
  const {formatMessage} = useIntl();

  return (
    <Container.ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.text}>
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
  text: {
    textAlign: 'center',
    ...Fonts.Lato20R,
    marginTop: '26@vs',
  },
  content: {
    ...CommonStyles.flex1,
    justifyContent: 'center',
    paddingHorizontal: '20@s',
    paddingTop: '34@vs',
  },
  word: {
    fontWeight: 'bold',
  },
  img: {
    resizeMode: 'contain',
    height: '460@vs',
    width: '275@s',
  },
  imgContainer: {
    marginTop: '15@vs',
    paddingHorizontal: '20@s',
  },
});

export default OnboardingFour;
