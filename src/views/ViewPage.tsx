import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { HomeContent, AboutUsContent, CorriereContent } from 'organisms';
import { CommonWrapper } from 'organisms';
import { IStore } from 'reducers';

interface IProps extends IStore {
  changeHeaderNav: (value: string) => void;
}

export class ViewPage extends React.Component<IProps> {
  public onNavClick =(value: string) => {
    const { changeHeaderNav } = this.props;
    
    changeHeaderNav(value);
  }

  public render() {
    const { navList } = this.props;

    return (
      <Router>
        <CommonWrapper navList={navList} onNavClick={this.onNavClick}>
            <Route exact={true} path='/' component={HomeContent}/>
            <Route exact={true} path='/about' component={AboutUsContent}/>
            <Route exact={true} path='/corrier' component={CorriereContent}/>
        </CommonWrapper>
      </Router>
    )
  }
}

