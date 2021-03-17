import React, {useCallback, useEffect} from 'react';
import {Image, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {useIntl} from 'react-intl';

import {Container, Picker} from '@atoms';
import {setLocale} from '@store/slices/persistedSlice';
import {setAppReady} from '@store/slices/sessionSlice';
import {RawColors, Fonts} from '@styles/Themes';
import {Images} from '@assets';
import LocaleList from './LocaleList';

const LanguageSelection = ({navigation}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  //const locale = useSelector((state) => state.persistedReducer.locale);

  const handleChange = useCallback(
    (value) => {
      dispatch(setLocale(value));
      navigation.navigate('HomePage');
    },
    [dispatch, navigation],
  );
  useEffect(() => {
    dispatch(setAppReady(true));
  }, [dispatch]);

  return (
    <Container
      safeAreaViewProps={{style: {backgroundColor: RawColors.darkBlue}}}
      statusBarProps={{barStyle: 'light-content'}}>
      <Container.ScrollView contentContainerStyle={[styles.scrollContainer]}>
        <View style={[styles.logoContainer]}>
          <Image
            source={Images?.eye}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Image
          source={Images?.logo}
          style={[styles.eye]}
          resizeMode="contain"
        />

        <View style={styles.dropDownContainer}>
          <Picker
            items={LocaleList}
            style={styles.picker}
            placeholder={formatMessage({id: 'screen.screen2.selectAnItem'})}
            placeholderStyle={styles.selectedStyle}
            // defaultValue={locale}
            onChange={handleChange}
            selectedLabelStyle={styles.selectedStyle}
          />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: '16@vs',
  },
  picker: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 0,
    width: '100%',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  eye: {
    marginTop: '35@vs',
    height: '100@vs',
    width: '276@s',
  },
  logo: {
    marginTop: '35@vs',
    height: '146@vs',
    marginBottom: '10@vs',
  },
  selectedStyle: {
    ...Fonts.Lato17B,
    color: 'black',
  },
  dropDownContainer: {
    paddingHorizontal: '16@s',
    marginHorizontal: '16@s',
    paddingBottom: '16@vs',
  },
  animationImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default LanguageSelection;
