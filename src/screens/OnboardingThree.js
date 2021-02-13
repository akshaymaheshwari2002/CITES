import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms/';
import CommonStyles from '@styles/CommonStyles';

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
      <View style={CommonStyles.screenContainer}>
        <Text style={styles.txt}>
          {formatMessage({id: 'screen.OnboardingThree.contentOne'})}
        </Text>
        <View style={styles.gap}>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingThree.contentTwo'})}
          </Text>
        </View>
      </View>
    </Container>
  );
};

const styles = ScaledSheet.create({
  txt: {
    textAlign: 'center',
    lineHeight: 23,
    ...Fonts.Lato15R,
    marginHorizontal: '13%',
    marginTop: '15%',
  },
  gap: {
    //marginTop: '2%',
  },
});

export default OnboardingThree;
