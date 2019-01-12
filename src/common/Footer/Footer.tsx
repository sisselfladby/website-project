import React from 'react';
import {withNamespaces, WithNamespaces} from "react-i18next";
import './Footer.scss';

const Footer = (props: WithNamespaces) => (
    <div className="footer">
        <h1>{props.t('title.footer')}</h1>
    </div>
);

export default withNamespaces()(Footer);
