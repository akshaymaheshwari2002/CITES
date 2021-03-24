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
      <View style={[CommonStyles.flex1, styles.contentContainer]}>
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
  contentContainer: {
    paddingTop: '45@vs',
    paddingBottom: '7@vs',
  },
  txt: {
    textAlign: 'center',
    lineHeight: '28@ms',
    paddingHorizontal: '39@s',
    ...Fonts.Lato20R,
  },
  img: {
    aspectRatio: 1.4,
    height: '400@vs',
  },
});

export default OnboardingOne;
