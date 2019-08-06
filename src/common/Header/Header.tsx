import React from 'react';
import {Link} from "react-router-dom";
import {withNamespaces, WithNamespaces} from "react-i18next";
import './Header.scss';
import Logo from "./Logo";
import Container from "../Container/Container";

const Header = (props: WithNamespaces) => (
    <div className="header">
        <Container className="header-content">
            <Logo/>
            <nav>
                <ul className="menu">
                    <li className="menu-item"><Link className="link" to='/home'>{props.t('title.home')}</Link></li>
                    <li className="menu-item"><Link className="link" to='/business'>{props.t('title.business')}</Link></li>
                </ul>
            </nav>
        </Container>
    </div>
);

export default withNamespaces()(Header);
