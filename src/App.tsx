import React, { Component } from 'react';
import './App.css';
import { withNamespaces, WithNamespaces } from 'react-i18next';

class App extends Component<WithNamespaces> {
  render() {
    console.log(this.props);
    return (
        <div>{this.props.t('Welcome to this app')}</div>
    );
  }
}

export default withNamespaces()(App);
