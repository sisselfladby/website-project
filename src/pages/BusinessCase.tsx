import React from 'react';
import {withNamespaces, WithNamespaces} from "react-i18next";
import Page from "./Page";

class BusinessCase extends React.PureComponent<WithNamespaces> {
    render() {
        return(
            <Page>
                Business
            </Page>
        );
    }
}

export default withNamespaces()(BusinessCase);
