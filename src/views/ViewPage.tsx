import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { HomeContent, AboutUsContent, CorriereContent, CasinosContent, CommonWrapper } from 'organisms';
import { IStore } from 'reducers';

interface IProps extends IStore {
  time: string;
  changeHeaderNav: (value: string) => void;
  saveNewTime: (time: string) => void;
}

export class ViewPage extends React.Component<IProps> {
  public onNavClick =(value: string) => {
    const { changeHeaderNav } = this.props;
    
    changeHeaderNav(value);
  }

  public componentDidMount() {
    const { saveNewTime } = this.props;

    setInterval(() => {
      const date = new Date();

      const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`
      const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
      const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`

      const newTime = `${hours}:${minutes}:${seconds}`;

      saveNewTime(newTime);
    }, 1000)
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
    const { navList, menuNavItemsList, isMobileMenuOpen, menuFullNavItemsList, time } = this.props;
    return (
      <Router>
        <CommonWrapper
          time={time}
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
<<<<<<< HEAD
          <Route exact={true} path='/casinos' component={CasinosContent}/>
=======
          <Route exact={true} path='/games' component={GameListContent}/>
>>>>>>> Hot fix
        </CommonWrapper>
      </Router>
    )
  }
}

