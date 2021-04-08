import React, {useEffect, useMemo} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {RawIntlProvider} from 'react-intl';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {ms} from 'react-native-size-matters';

import {AppNavigator} from '@navigators';
import {RawColors, ThemeProvider, Themes} from '@styles/Themes';
import {createIntl} from '@utils/Intl';
import {OverlayModal} from '@molecules';
import {setHelpText, setIsShowSideMenu} from '@store/slices/sessionSlice';
import {Images} from '@assets';

const App = () => {
  const currentTheme = useSelector((state) => state.persistedReducer.theme);
  const locale = useSelector((state) => state.persistedReducer.locale);
  const helpText = useSelector((state) => state.sessionReducer.helpText);
  const isShowSideMenu = useSelector(
    (state) => state.sessionReducer.isShowSideMenu,
  );
  const appReady = useSelector((state) => state.sessionReducer.appReady);
  const theme = useMemo(() => Themes[currentTheme] || Themes.DEFAULT, [
    currentTheme,
  ]);
  const dispatch = useDispatch();
  const intl = useMemo(() => createIntl(locale), [locale]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RawIntlProvider value={intl}>
        <AnimatedSplash
          translucent={true}
          isLoaded={appReady}
          logoImage={Images.logo}
          backgroundColor={RawColors.darkSalmon}
          logoHeight={ms(150)}
          logoWidth={ms(150)}>
          <SafeAreaProvider>
            <OverlayModal
              isModalVisible={helpText || isShowSideMenu ? true : false}
              helpText={helpText}
              isShowSideMenu={isShowSideMenu}
              hideModal={() => {
                dispatch(setHelpText(null));
                dispatch(setIsShowSideMenu(false));
              }}
            />
            <AppNavigator />
          </SafeAreaProvider>
        </AnimatedSplash>
      </RawIntlProvider>
    </ThemeProvider>
  );
};

export default App;
