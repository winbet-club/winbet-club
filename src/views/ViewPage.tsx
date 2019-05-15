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

  public onMenuClick =(value: string) => {
    // const { changeHeaderNav } = this.props;
    
    // changeHeaderNav(value);
  }

  public onMobileMenuClick =() => {
    // const { changeHeaderNav } = this.props;
    
    // changeHeaderNav(value);
  }

  public render() {
    const { navList, menuNavItemsList, isMobileMenuOpen, menuFullNavItemsList } = this.props;
    return (
      <Router>
        <CommonWrapper
          navList={navList}
          menuNavItemsList={menuNavItemsList}
          onNavClick={this.onNavClick}
          onMenuClick={this.onMenuClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuClick={this.onMobileMenuClick}
          menuFullNavItemsList={menuFullNavItemsList}
        >
          <Route exact={true} path='/' component={HomeContent}/>
          <Route exact={true} path='/about' component={AboutUsContent}/>
          <Route exact={true} path='/corrier' component={CorriereContent}/>
        </CommonWrapper>
      </Router>
    )
  }
}

