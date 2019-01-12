import React from 'react';
import {withNamespaces, WithNamespaces} from "react-i18next";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

class BusinessCase extends React.PureComponent<WithNamespaces> {
    render() {
        return(
            <>
                <Header/>
                <Footer/>
            </>
        );
    }
}

export default withNamespaces()(BusinessCase);
