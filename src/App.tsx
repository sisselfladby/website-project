import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  const Homepage = React.lazy(() => import('./pages/Home'));
  const BusinessCase = React.lazy(() => import('./pages/BusinessCase'));

  return (
    <div id="app">
      <Router>
        <Suspense fallback={"...loading"}>
          <Switch>
              <Route path='/business' component={() => <BusinessCase/>}/>
              <Route path='/' component={() => <Homepage/>}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
