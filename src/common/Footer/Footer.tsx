import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <h1>{t('title.footer')}</h1>
        </div>
    );
};

export default Footer;
