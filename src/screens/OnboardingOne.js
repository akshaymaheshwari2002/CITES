import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, scale} from 'react-native-size-matters';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms';

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
      <View style={styles.container}>
        <Text style={styles.txt}>
          {formatMessage({id: 'screen.OnboardingOne.contentOne'})}
          <Text style={styles.word}>
            {formatMessage({id: 'screen.OnboardingOne.contentTwo'})}
          </Text>{' '}
          {formatMessage({id: 'screen.OnboardingOne.contentThree'})}
          <Text style={styles.word}>
            {formatMessage({id: 'screen.OnboardingOne.contentFour'})}
          </Text>
          {formatMessage({id: 'screen.OnboardingOne.contentFive'})}
        </Text>
      </View>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginVertical: '20%',
    alignSelf: 'center',
    marginHorizontal: '15%',
  },
  txt: {
    textAlign: 'center',
    lineHeight: 32,
    ...Fonts.Lato15R,
  },
  word: {
    fontWeight: 'bold',
  },
});

export default OnboardingOne;
