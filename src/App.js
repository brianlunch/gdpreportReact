import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import history from './Utils/History';
import Home from './Pages/Home'
import Report from './Pages/Report'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Reported from './Pages/Reported';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <Switch>
          <Route exact path="/" component={Report} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/reported" component={Reported}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;