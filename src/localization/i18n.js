import i18n from 'i18next';
import {reactI18nextModule} from 'react-i18next';

var store = require('./tr.json');

i18n.use(reactI18nextModule) // if not using I18nextProvider
    .init({
    lng: "tr", fallbackLng: 'tr', debug: false, resources: store,

    // allow keys to be phrases having `:`, `.`
    nsSeparator: false,
    keySeparator: false,

    interpolation: {
        escapeValue: false, // not needed for react!!
    }
});

export const tr = i18n.getFixedT('tr');
export const en = i18n.getFixedT('en');