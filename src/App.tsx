import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './pages/Home';
import BusinessCase from './pages/BusinessCase';

const App = () => {
  return (
    <div id="app">
      <Router>
        <Switch>
            <Route path='/business' component={() => <BusinessCase/>}/>
            <Route path='/' component={() => <Homepage/>}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
