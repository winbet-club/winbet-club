import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TestComponent } from 'atoms';

export const Routing = () => (
      <Router>
        <React.Fragment>
            {/* <Route exact={true} path='/' component={TestComponent}/> */}
            <Switch> 
              <Route exact={true} path='/TestComponent' component={TestComponent}/>
            </Switch>
        </React.Fragment>
      </Router>
);

