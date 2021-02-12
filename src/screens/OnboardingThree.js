import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
import {Container} from '@atoms/';

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
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingThree.content'})}
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
});

export default OnboardingThree;
