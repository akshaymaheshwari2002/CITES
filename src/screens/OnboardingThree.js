import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';

const OnboardingThree = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('OnboardingFour')}>
          <Icon name="chevron-right" size={scale(26)} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Container.ScrollView style={CommonStyles.screenContainer}>
        <View style={styles.content}>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingThree.contentOne'})}
          </Text>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingThree.contentTwo'})}
          </Text>

          <View style={styles.imgContainer}>
            <Image style={styles.img} source={Images.onboardingThree} />
          </View>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  txt: {
    textAlign: 'center',
    flex: 1,
    lineHeight: '30@vs',
    letterSpacing: 0.48,
    ...Fonts.Lato20R,
    fontSize: '20@ms0.1',
    marginTop: '60@vs',
    marginHorizontal: '1@s',
  },
  content: {
    alignSelf: 'center',
  },
  img: {
    resizeMode: 'contain',
  },
  imgContainer: {
    alignSelf: 'center',
    marginTop: '26@s',
    marginBottom: '20@s',
  },
});

export default OnboardingThree;
