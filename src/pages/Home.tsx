import React from 'react';
import {withNamespaces, WithNamespaces} from 'react-i18next';
import Page from "./Page";

class Home extends React.PureComponent<WithNamespaces> {
    render() {
        return (
            <Page>
                <a className="link" href="lala">Dette er en link</a>
            </Page>
        );
    }
}

export default withNamespaces()(Home);
