import React from 'react';
import {Link} from "react-router-dom";
import './Logo.scss';

const Logo = () => (
    <Link to='/' className="no-outline"><h1 className="title">FlaPump</h1></Link>
);

export default Logo;
