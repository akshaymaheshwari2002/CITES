import React, {useEffect, useMemo} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {RawIntlProvider} from 'react-intl';
import {useSelector} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AuthNavigator, AppNavigator} from '@navigators';
import Config from '@config';
import {ThemeProvider, Themes} from '@styles/Themes';
import createIntl from '@utils/Intl';

const defaultLocale = Config.DEFAULT_LOCALE;

const App = () => {
  const accessToken = useSelector(
    (state) => state.persistedReducer.userData.access_token,
  );
  const currentTheme = useSelector((state) => state.persistedReducer.theme);
  const theme = useMemo(() => Themes[currentTheme] || Themes.DEFAULT, [
    currentTheme,
  ]);
  const intl = useMemo(() => createIntl(defaultLocale), []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RawIntlProvider value={intl}>
        <SafeAreaProvider>
          {!accessToken ? <AuthNavigator /> : <AppNavigator />}
        </SafeAreaProvider>
      </RawIntlProvider>
    </ThemeProvider>
  );
};

export default App;
