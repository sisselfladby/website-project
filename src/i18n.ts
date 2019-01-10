import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

const resources = {
    en: {
        translation: {
            'Welcome to this app' : 'Velkommen til denne appen'
        }
    }
};

i18n
    .use(reactI18nextModule)
    .init({
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
