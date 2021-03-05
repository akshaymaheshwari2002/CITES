import React, {useEffect, useMemo} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {RawIntlProvider} from 'react-intl';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppNavigator} from '@navigators';
import {ThemeProvider, Themes} from '@styles/Themes';
import createIntl from '@utils/Intl';
import {OverlayModal} from '@molecules';
import {setHelpText, setActiveInspection} from '@store/slices/sessionSlice';
import {setPersistedInspectionId} from '@store/slices/persistedSlice';
import {get} from '@utils/RealmHelper';

const App = () => {
  const currentTheme = useSelector((state) => state.persistedReducer.theme);
  const locale = useSelector((state) => state.persistedReducer.locale);
  const helpText = useSelector((state) => state.sessionReducer.helpText);
  const persistedInspectionId = useSelector(
    (state) => state.persistedReducer.persistedInspectionId,
  );
  const activeInspectionId = useSelector(
    (state) => state.sessionReducer.activeInspection._id,
  );
  const theme = useMemo(() => Themes[currentTheme] || Themes.DEFAULT, [
    currentTheme,
  ]);
  const dispatch = useDispatch();
  const intl = useMemo(() => createIntl(locale), [locale]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    if (persistedInspectionId) {
      get('Inspection', persistedInspectionId).then((activeInspection) => {
        if (activeInspection) {
          dispatch(setActiveInspection(activeInspection));
        }
      });
    }
  }, [persistedInspectionId, dispatch]);

  useEffect(() => {
    if (activeInspectionId) {
      dispatch(setPersistedInspectionId(activeInspectionId));
    }
  }, [activeInspectionId, dispatch]);

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
