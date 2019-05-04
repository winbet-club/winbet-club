import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { HomePage, AboutUsPage, CorrierePage } from 'views';

export const Routing = () => (
      <Router>
        <React.Fragment>
            <Route exact={true} path='/' component={HomePage}/>
            <Route exact={true} path='/about' component={AboutUsPage}/>
            <Route exact={true} path='/corrier' component={CorrierePage}/>
        </React.Fragment>
      </Router>
);

