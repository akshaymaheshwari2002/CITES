import React, {useEffect, useMemo} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {RawIntlProvider} from 'react-intl';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppNavigator} from '@navigators';
import {ThemeProvider, Themes} from '@styles/Themes';
import createIntl from '@utils/Intl';
import {OverlayModal} from '@molecules';
import {setHelpText} from '@store/slices/sessionSlice';

const App = () => {
  const currentTheme = useSelector((state) => state.persistedReducer.theme);
  const locale = useSelector((state) => state.persistedReducer.locale);
  const helpText = useSelector((state) => state.sessionReducer.helpText);
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
        <SafeAreaProvider>
          <OverlayModal
            isModalVisible={helpText ? true : false}
            helpText={helpText}
            hideModal={() => {
              dispatch(setHelpText(null));
            }}
          />
          <AppNavigator />
        </SafeAreaProvider>
      </RawIntlProvider>
    </ThemeProvider>
  );
};

export default App;
