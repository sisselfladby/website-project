import React from 'react';
import Header from '../common/Header/Header';
import Footer from "../common/Footer/Footer";
import Container from "../common/Container/Container";
import './Page.scss';

const Page: React.FunctionComponent = (props) => (
    <>
        <Header/>
        <Container>
            <div className="page-content">{props.children}</div>
        </Container>
        <Footer/>
    </>
);

export default Page;
