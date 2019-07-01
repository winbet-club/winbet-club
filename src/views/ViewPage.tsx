import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { HomeContent, AboutUsContent, CorriereContent, CasinosContent, CommonWrapper,
  CasonoDescriptionGeneral, CasinoDescriptionPromo, CasinoDescriptionEvents, CasinoDescriptionGallary,
  GameListContent, ContactsContent } from 'organisms';
import { IStore } from 'reducers';
import { eventsList } from 'context';

interface IProps extends IStore {
  time: string;
  jackpotsValues: any[];
  changeHeaderNav: (value: string) => void;
  saveNewTime: (time: string) => void;
  loadJackpots: () => void;
}

export class ViewPage extends React.Component<IProps> {
  public onNavClick = (value: string) => {
    const { changeHeaderNav } = this.props;
    
    changeHeaderNav(value);
  }

  public componentDidMount() {
    this.props.loadJackpots();
    setTimeout(() => {
      this.props.loadJackpots();
    }, 10000);
    // const { saveNewTime } = this.props;

    // setInterval(() => {
    //   const date = new Date();

    //   const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`
    //   const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
    //   const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`

    //   const newTime = `${hours}:${minutes}:${seconds}`;

    //   saveNewTime(newTime);
    // }, 1000)
  }

  public onMenuClick =(value: string) => {
    // const { changeHeaderNav } = this.props;
    
    // changeHeaderNav(value);
  }

  public onMobileMenuClick =() => {
    // const { changeHeaderNav } = this.props;
    
    // changeHeaderNav(value);
  }

  public onCasinoDescriptionClick = (value: string) => {
    // console.log('@@@@@@@@');

    return;
  }
  
  public renderCasonoDescriptionGeneral = () => {
    const { casinosListNav, activeCasino, jackpotsValues } = this.props;

    return <CasonoDescriptionGeneral
      casinosListNav={casinosListNav}
      onClick={this.onCasinoDescriptionClick}
      activeCasino={activeCasino}
      jackpotsValues={jackpotsValues}
      />
  }

  public renderCasinoDescriptionPromo = () => {
    const { casinosListNav, activeCasino } = this.props;
    return <CasinoDescriptionPromo
      casinosListNav={casinosListNav}
      onClick={this.onCasinoDescriptionClick}
      activeCasino={activeCasino}
      />
  }

  public renderCasinoDescriptionEvents = () => {
    const { casinosListNav, activeCasino } = this.props;
    return <CasinoDescriptionEvents
      promoList={eventsList}
      casinosListNav={casinosListNav}
      onClick={this.onCasinoDescriptionClick}
      activeCasino={activeCasino}
      />
  }

  public renderCasinoDescriptionGallary = () => {
    const { casinosListNav, activeCasino } = this.props;
    return <CasinoDescriptionGallary
      promoList='' // TODO Check
      casinosListNav={casinosListNav}
      onClick={this.onCasinoDescriptionClick}
      activeCasino={activeCasino}
      />
  }

  public render() {
    const { navList, menuNavItemsList, isMobileMenuOpen, menuFullNavItemsList, casinosInfo, time, activeCasino } = this.props;

    const getContactsContent = () => <ContactsContent casinosInfo={casinosInfo}  />
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
          <Route exact={true} path='/casinos' component={CasinosContent}/>
          <Route exact={true} path='/games' component={GameListContent}/>
          <Route exact={true} path={`/casinos/${activeCasino}`} render={this.renderCasonoDescriptionGeneral}/>
          <Route exact={true} path={`/casinos/${activeCasino}/main`} render={this.renderCasonoDescriptionGeneral}/>
          <Route exact={true} path={`/casinos/${activeCasino}/promo`} render={this.renderCasinoDescriptionPromo}/>
          <Route exact={true} path={`/casinos/${activeCasino}/events`} render={this.renderCasinoDescriptionEvents}/>
          <Route exact={true} path={`/casinos/${activeCasino}/gallary`} render={this.renderCasinoDescriptionGallary}/>
          <Route exact={true} path='/contacts' render={getContactsContent}/>
        </CommonWrapper>
      </Router>
    )
  }
}

