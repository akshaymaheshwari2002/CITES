import React, {useEffect} from 'react';
import {Text, TouchableOpacity, Image, View, Dimensions} from 'react-native';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, ms} from 'react-native-size-matters';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms';
import {Images} from '@assets';

const windowWidth = Dimensions.get('window').width;

const OnboardingOne = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('OnboardingTwo')}>
          <Icon name="chevron-right" size={ms(26)} />
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
    width: windowWidth,
    height: windowWidth * 0.6318,
  },
  imgContainer: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 'auto',
  },
});

export default OnboardingOne;
