import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms/';
import CommonStyles from '@styles/CommonStyles';

const OnboardingFour = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('GiveFeedback')}>
          <Icon name="chevron-right" size={scale(26)} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <View style={CommonStyles.screenContainer}>
        <Text style={styles.txt}>
          {formatMessage({id: 'screen.OnboardingFour.contentOne'})}

          <Text style={styles.word}>
            {formatMessage({id: 'screen.OnboardingFour.contentTwo'})}
          </Text>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingFour.contentThree'})}
          </Text>
        </Text>
      </View>
    </Container>
  );
};

const styles = ScaledSheet.create({
  txt: {
    textAlign: 'center',
    lineHeight: 23,
    ...Fonts.Lato15R,
    marginHorizontal: '14%',
    marginVertical: '15%',
  },
  word: {
    fontWeight: 'bold',
  },
});

export default OnboardingFour;
