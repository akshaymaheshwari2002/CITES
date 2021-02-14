import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container} from '@atoms';
import {Fonts} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const points = [
  {
    icon: Images.tick,
    labelId: 'screen.OnboardingTwo.contentOne',
  },
  {
    icon: Images.tick,
    labelId: 'screen.OnboardingTwo.contentTwo',
  },
  {
    icon: Images.tick,
    labelId: 'screen.OnboardingTwo.contentThree',
  },
  {
    icon: Images.tick,
    labelId: 'screen.OnboardingTwo.contentFour',
  },
];

const OnboardingTwo = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('OnboardingThree')}>
          <Icon name="chevron-right" size={scale(26)} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Container.ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={[Fonts.Lato20R]}>
            {formatMessage({id: 'screen.OnboardingTwo.title'})}
          </Text>
          {points.map(({icon, labelId}, index) => (
            <View key={index} style={styles.item}>
              <Image source={icon} style={styles.itemIcon} />
              <Text style={[CommonStyles.flex1, Fonts.Lato20R]}>
                {formatMessage({id: labelId})}
              </Text>
            </View>
          ))}
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  contentContainer: {
    paddingVertical: 60,
  },
  content: {
    alignSelf: 'center',
  },
  icon: {
    height: '30@vs',
    width: '30@s',
  },
  item: {
    flexDirection: 'row',
    marginLeft: 8,
    marginVertical: '36@vs',
    alignItems: 'center',
  },
  itemIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 16,
  },
});

export default OnboardingTwo;
