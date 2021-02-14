import React, {useCallback} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
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
      <Container.ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          CommonStyles.screenContainer,
        ]}>
        <Picker
          items={LocaleList}
          defaultValue={locale}
          onChange={handleChange}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  scrollContainer: {
    justifyContent: 'center',
  },
});

export default LanguageSelection;
