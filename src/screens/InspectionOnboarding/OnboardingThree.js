import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Fonts} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';
import {Container} from '@atoms';

const OnboardingThree = () => {
  const {formatMessage} = useIntl();

  return (
    <Container.ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.txt}>
        {formatMessage({id: 'screen.OnboardingThree.contentOne'})}
      </Text>
      <Text style={styles.txt}>
        {formatMessage({id: 'screen.OnboardingThree.contentTwo'})}
      </Text>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={Images.onboardingThree} />
      </View>
    </Container.ScrollView>
  );
};

const styles = ScaledSheet.create({
  txt: {
    textAlign: 'center',
    ...Fonts.Lato20R,
    marginTop: '16@vs',
  },
  content: {
    ...CommonStyles.flex1,
    justifyContent: 'space-evenly',
    paddingHorizontal: '16@s',
  },
  img: {
    resizeMode: 'contain',
    height: '305@vs',
    width: '317@s',
  },
  imgContainer: {
    marginTop: '10@vs',
  },
});

export default OnboardingThree;
