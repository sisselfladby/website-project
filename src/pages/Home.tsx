import React from 'react';
import Page from "./Page";
import {useTranslation} from "react-i18next";
import illustration from "../design-illustration.gif";

const Home: React.FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <main>
                <section>
                <h2>{t('content1.title')}</h2>
                <p>{t('content1.homepage')}</p>
                <h2>{t('content2.title')}</h2>
                <p>{t('content2.homepage')}</p>
                <figure><img src={illustration} alt="Motor-Pump-Pump-Motor"/></figure>
                <h2>{t('content3.title')}</h2>
                <p>{t('content3.homepage')}</p>
                <a className="link" href="lala">Dette er en link</a>
                </section>
            </main>
        </Page>
    );
}

export default Home;
