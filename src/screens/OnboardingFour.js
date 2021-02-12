import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms/';

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
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingFour.contentOne'})}{' '}
            <Text style={styles.word}>
              {formatMessage({id: 'screen.OnboardingFour.contentTwo'})}
            </Text>
            {formatMessage({id: 'screen.OnboardingFour.contentThree'})}
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginVertical: '10%',
  },
  txt: {
    textAlign: 'center',
    lineHeight: 23,
    ...Fonts.Lato15R,
  },
  word: {
    fontWeight: 'bold',
  },
});

export default OnboardingFour;
