import React, {useEffect} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, scale} from 'react-native-size-matters';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';

const OnboardingOne = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('OnboardingTwo')}>
          <Icon name="chevron-right" size={scale(26)} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Container.ScrollView contentContainerStyle={styles.container}>
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
    justifyContent: 'center',
  },
  txt: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 34,
    paddingHorizontal: '34@s',
    marginTop: '60@s',
    ...Fonts.Lato20R,
  },
  word: {
    fontWeight: 'bold',
  },
  content: {
    alignSelf: 'center',
  },
  img: {
    resizeMode: 'contain',
  },
  imgContainer: {
    alignSelf: 'center',
    marginTop: '48@s',
  },
});

export default OnboardingOne;
