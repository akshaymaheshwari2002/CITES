import {createIntl, createIntlCache} from 'react-intl';

import Config from '@config';
import {getMessages} from '@utils/CommonFunctions';
import {store} from '@store';

const cache = createIntlCache();

export default (locale) => {
  const currentLocale =
    locale || store.getState().persistedReducer.locale || Config.DEFAULT_LOCALE;
  const messages = getMessages()[currentLocale];

  return createIntl({locale: currentLocale, messages}, cache);
};
