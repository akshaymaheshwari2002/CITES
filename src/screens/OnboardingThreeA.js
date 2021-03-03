import React, {useEffect} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';

const OnboardingThreeA = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TabNavigator', {
              screen: 'DetermineSourceCode',
              params: {showToolTip: true},
            })
          }>
          <Icon name="chevron-right" size={ms(26)} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Container.ScrollView style={CommonStyles.screenContainer}>
        <View style={styles.content}>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingThreeA.contentOne'})}
          </Text>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={Images.onboardingThreeA} />
          </View>
          <View style={styles.imgContainerTwo}>
            <Image style={styles.img} source={Images.onboardingThreeAPartTwo} />
          </View>
          <View style={styles.imgContainerThree}>
            <Image style={styles.img} source={Images.backgroundNavbarLower} />
          </View>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    ...Fonts.Lato20R,
    lineHeight: '30@s',
    marginVertical: '30@vs',
  },
  content: {
    alignSelf: 'center',
    paddingHorizontal: '15@vs',
    justifyContent: 'space-evenly',
  },
  img: {
    resizeMode: 'contain',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainerTwo: {
    marginLeft: '75@s',
  },
  imgContainerThree: {
    marginLeft: '50@s',
    paddingBottom: '40@s',
  },

  backImage: {
    resizeMode: 'contain',
  },
});

export default OnboardingThreeA;
