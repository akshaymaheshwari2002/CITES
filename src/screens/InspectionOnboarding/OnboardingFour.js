import React from 'react';
import {Text, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
import {Container, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';

const OnboardingFour = ({
  onBackPress = () => {},
  onForwardPress = () => {},
}) => {
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
      <Container.ScrollView style={CommonStyles.screenContainer}>
        <View style={styles.content}>
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
        </View>
      </Container.ScrollView>
    </Container>
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
    paddingHorizontal: '15@vs',
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
