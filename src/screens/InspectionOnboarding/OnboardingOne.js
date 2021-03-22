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
          <Text style={Fonts.Lato17B}>
            {formatMessage({id: 'screen.OnboardingOne.contentTwo'})}
          </Text>
          {formatMessage({id: 'screen.OnboardingOne.contentThree'})}
          <Text style={Fonts.Lato17B}>
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
    lineHeight: '28@ms',
    paddingHorizontal: '34@s',
    marginTop: '30@vs',
    ...Fonts.Lato17R,
  },
  img: {
    aspectRatio: 1.4,
    height: '400@vs',
  },
});

export default OnboardingOne;
