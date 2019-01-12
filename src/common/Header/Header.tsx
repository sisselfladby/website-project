import React from 'react';
import {Link} from "react-router-dom";
import {withNamespaces, WithNamespaces} from "react-i18next";
import './Header.scss';
import Logo from "./Logo";
import Container from "../Container/Container";

const Header = (props: WithNamespaces) => (
    <div className="header">
        <Container className="flex-row">
            <Logo/>
            <nav>
                <ul>
                    <li><Link to='/home'>{props.t('title.home')}</Link></li>
                    <li><Link to='/business'>{props.t('title.business')}</Link></li>
                </ul>
            </nav>
        </Container>
    </div>
);

export default withNamespaces()(Header);
