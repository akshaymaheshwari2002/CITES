import React, {useEffect} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';

const OnboardingFour = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StepOne', {
              screen: 'StepOne',
              params: {showToolTip: true},
            })
          }>
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
  txt: {
    textAlign: 'center',
    flex: 1,
    lineHeight: '30@vs',
    letterSpacing: 0.48,
    ...Fonts.Lato20R,
    marginTop: '60@vs',
  },
  word: {
    fontWeight: 'bold',
  },
  content: {
    alignSelf: 'center',
    paddingBottom: '50@s',
  },
  img: {
    resizeMode: 'contain',
  },
  imgContainer: {
    alignSelf: 'center',
    marginTop: '40@vs',
  },
});

export default OnboardingFour;
