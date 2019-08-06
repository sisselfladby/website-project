import React from 'react';
import Header from '../common/Header/Header';
import Footer from "../common/Footer/Footer";

const Page: React.FunctionComponent = (props) => (
    <>
        <Header/>
            {props.children}
        <Footer/>
    </>
);

export default Page;
