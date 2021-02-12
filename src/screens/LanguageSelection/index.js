import React, {useCallback} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Container, Picker} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {setLocale} from '@store/slices/persistedSlice';
import LocaleList from './LocaleList';

const LanguageSelection = ({navigation}) => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.persistedReducer.locale);

  const handleChange = useCallback(
    ({value}) => {
      dispatch(setLocale(value));
      navigation.navigate('OnboardingOne');
    },
    [dispatch, navigation],
  );

  return (
    <Container>
      <View style={[styles.container, CommonStyles.screenContainer]}>
        <Picker
          items={LocaleList}
          defaultValue={locale}
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
