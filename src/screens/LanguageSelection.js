import React, {useCallback, useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';

import {Container, Picker} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {View} from 'react-native';

const LanguageSelection = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleChange = useCallback(
    ({value}) => {
      setSelectedLanguage(value);
      navigation.navigate('OnboardingOne');
    },
    [navigation],
  );

  return (
    <Container>
      <View style={[styles.container, CommonStyles.screenContainer]}>
        <Picker
          items={[
            {
              label: 'English',
              value: 'English',
            },
            {
              label: 'Français',
              value: 'Français',
            },
            {
              label: 'Español',
              value: 'Español',
            },
            {
              label: 'ລາວ',
              value: 'ລາວ',
            },
            {
              label: '官话',
              value: '官话',
            },
            {
              label: 'Bahasa Malayu',
              value: 'Bahasa Malayu',
            },
            {
              label: 'ភាសាខ្មែរ',
              value: 'ភាសាខ្មែរ',
            },
            {
              label: 'Tiếng Việt',
              value: 'Tiếng Việt',
            },
            {
              label: 'ภาษาไทย',
              value: 'ภาษาไทย',
            },
            {
              label: 'Bahasa Indonesian',
              value: 'Bahasa Indonesian',
            },
          ]}
          defaultValue={selectedLanguage}
          onChange={handleChange}
        />
      </View>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default LanguageSelection;
