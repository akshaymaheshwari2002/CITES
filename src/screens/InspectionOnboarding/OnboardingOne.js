import React from 'react';
import {Text, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import {Fonts} from '@styles/Themes';
import {Images} from '@assets';
import {Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const OnboardingOne = () => {
  const {formatMessage} = useIntl();

  return (
    <Container.ScrollView>
      <View style={CommonStyles.flex1}>
        <Text style={styles.txt}>
          {formatMessage({id: 'screen.OnboardingOne.contentOne'})}
          <Text style={Fonts.Lato20B}>
            {formatMessage({id: 'screen.OnboardingOne.contentTwo'})}
          </Text>
          {formatMessage({id: 'screen.OnboardingOne.contentThree'})}
          <Text style={Fonts.Lato20B}>
            {formatMessage({id: 'screen.OnboardingOne.contentFour'})}
          </Text>
          {formatMessage({id: 'screen.OnboardingOne.contentFive'})}
        </Text>
      </View>
      <Image style={styles.img} source={Images.onboardingOne} />
    </Container.ScrollView>
  );
};

const styles = ScaledSheet.create({
  txt: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '34@ms',
    paddingHorizontal: '34@s',
    marginTop: '30@vs',
    ...Fonts.Lato20R,
  },
  img: {
    resizeMode: 'cover',
    aspectRatio: 1.3,
  },
});

export default OnboardingOne;
