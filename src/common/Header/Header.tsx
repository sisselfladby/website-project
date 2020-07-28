import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './Header.scss';
import Logo from "./Logo";
import Container from "../Container/Container";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <Container className="header-content">
        <Logo/>
        <nav>
          <ul className="menu">
            <li className="menu-item"><MenuItem path="/home" text={t('title.home')} /></li>
            <li className="menu-item"><MenuItem path="/business" text={t('title.business')} /></li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

const MenuItem = (props: {path: string, text: string}) =>
  window.location.pathname === props.path ?
    <span>{props.text}</span> :
    <Link className="link" to={props.path}>{props.text}</Link>;

export default Header;
