import React, {useCallback, useState} from 'react';
import {Image, View, Text, Alert} from 'react-native';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNetInfo} from '@react-native-community/netinfo';

import {Container, LanguageSelectionDropdown, Loader} from '@atoms';
import {setLocale} from '@store/slices/persistedSlice';
import {setAppReady} from '@store/slices/sessionSlice';
import {Fonts} from '@styles/Themes';
import {Images} from '@assets';
import LocaleList from './LocaleList';

const LanguageSelection = ({navigation}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const netInfo = useNetInfo();
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const handleChange = useCallback(
    (value) => {
      if (netInfo.isConnected) {
        setIsLoaderVisible(true);
        setTimeout(() => {
          dispatch(setLocale(value));
          setIsLoaderVisible(false);
          navigation.navigate('HomePage');
        }, 3000);
      } else {
        Alert.alert(
          formatMessage({
            id: 'screen.LanguaueSelection.alertTitle.network',
          }),
          formatMessage({
            id: 'screen.LanguaueSelection.alertMessage.network',
          }),
        );
      }
    },
    [dispatch, formatMessage, navigation, netInfo.isConnected],
  );

  setTimeout(() => {
    dispatch(setAppReady(true));
  }, 1000);

  return (
    <Container>
      <Container.ScrollView contentContainerStyle={[styles.scrollContainer]}>
        <View style={[styles.logoContainer]}>
          <Image source={Images?.eye} style={styles.eye} resizeMode="contain" />
        </View>
        <Image
          source={Images?.logo}
          style={[styles.logo]}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          {formatMessage({id: 'screen.languageSelection.contentOne'})}
        </Text>
        <LanguageSelectionDropdown
          items={LocaleList}
          placeholder={formatMessage({id: 'screen.screen2.selectAnItem'})}
          onChange={handleChange}
        />
        <View style={styles.container}></View>
        <Loader
          visible={isLoaderVisible}
          customIcon={<Icon name="sync" size={vs(20)} />}
          customText={
            <Text style={styles.loaderText}>
              {formatMessage({
                id: 'screen.LanguageSelection.loaderBottom.content',
              })}
            </Text>
          }
        />
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
    marginTop: '50@vs',
    alignItems: 'center',
  },
  logo: {
    marginTop: '15@vs',
    height: '97@vs',
  },
  eye: {
    height: '147@vs',
    width: '190@s',
  },
  content: {
    ...Fonts.Lato30R,
  },
  selectedStyle: {
    ...Fonts.Lato17B,
    color: 'black',
  },
  dropDownContainer: {
    paddingHorizontal: '16@s',
    marginHorizontal: '16@s',
    marginTop: '30@s',
    paddingBottom: '16@vs',
  },
  animationImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    marginTop: 'auto',
    //justifyContent: 'center',
  },
  loaderText: {
    ...Fonts.Lato15B,
  },
});

export default LanguageSelection;
