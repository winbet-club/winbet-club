import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { HomePage } from 'views';

export const Routing = () => (
      <Router>
        <React.Fragment>
            <Route exact={true} path='/' component={HomePage}/>
            {/* <Switch> 
            </Switch> */}
        </React.Fragment>
      </Router>
);

