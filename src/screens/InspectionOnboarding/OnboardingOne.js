import React from 'react';
import {Text, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, ms} from 'react-native-size-matters';

import {Fonts} from '@styles/Themes';
import {Container, Header} from '@atoms';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const OnboardingOne = ({onBackPress = () => {}, onForwardPress = () => {}}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={onBackPress} />
        }
        rightContent={
          <Icon name="chevron-right" size={ms(26)} onPress={onForwardPress} />
        }
      />
      <Container.ScrollView
        style={CommonStyles.flex1}
        contentContainerStyle={styles.container}>
        <Text style={styles.txt}>
          {formatMessage({id: 'screen.OnboardingOne.contentOne'})}
          <Text style={styles.word}>
            {formatMessage({id: 'screen.OnboardingOne.contentTwo'})}
          </Text>
          {formatMessage({id: 'screen.OnboardingOne.contentThree'})}
          <Text style={styles.word}>
            {formatMessage({id: 'screen.OnboardingOne.contentFour'})}
          </Text>
          {formatMessage({id: 'screen.OnboardingOne.contentFive'})}
        </Text>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={Images.onboardingOne} />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  txt: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '34@ms',
    paddingHorizontal: '34@s',
    marginTop: '30@s',
    ...Fonts.Lato20R,
  },
  word: {
    fontWeight: 'bold',
  },
  img: {
    resizeMode: 'contain',
    aspectRatio: 1.2,
  },
  imgContainer: {
    alignItems: 'flex-start',
    alignContent: 'center',
    marginTop: 'auto',
    aspectRatio: 1.2,
  },
});

export default OnboardingOne;
