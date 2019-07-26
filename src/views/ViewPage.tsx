import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { HomeContent, AboutUsContent, CorriereContent, CasinosContent, CommonWrapper,
  CasonoDescriptionGeneral, CasinoDescriptionPromo, CasinoDescriptionEvents, CasinoDescriptionGallary,
  GameListContent, ContactsContent } from 'organisms';
import { Promo } from 'molecules';
import { IStore } from 'reducers';
import { eventsList } from 'context';

interface IProps extends IStore {
  time: string;
  jackpotsValues: any[];
  isMobileMenuDescriptionCasinoOpen: boolean;
  changeHeaderNav: (value: string) => void;
  saveNewTime: (time: string) => void;
  loadJackpots: () => void;
  updateJackpots: () => void;
  toggleMobileMenu: () => void;
  toggleMobileMenuDescriptionCasinoOpen: () => void;
  changeCasinoDescriptionNav: (value: string) => void;
  changeMenuFullNavItemsList: (value: string) => void;
  changeMenuNav: (value: string) => void;
  changeActiveCasino: (value: string) => void;
  nullNavs: () => void;
}

export class ViewPage extends React.Component<IProps> {
  public onNavClick = (value: string) => {
    const { changeHeaderNav } = this.props;
    
    changeHeaderNav(value);
  }

  // public componentDidMount() {
  //   const { loadJackpots, updateJackpots } = this.props;

  //   loadJackpots();
  //   setInterval(() => {
  //     updateJackpots();
  //   }, 7000);
  //   const { saveNewTime } = this.props;

  //   setInterval(() => {
  //     const date = new Date();

  //     const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`
  //     const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
  //     const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`

  //     const newTime = `${hours}:${minutes}:${seconds}`;

  //     saveNewTime(newTime);
  //   }, 1000)
  // }

  public onMenuClick =(value: string) => {
    const { changeMenuNav } = this.props;
    
    changeMenuNav(value);
  }

  public onMobileMenuClick =() => {
    const { toggleMobileMenu } = this.props;
    
    toggleMobileMenu();
  }

  public onCasinoDescriptionClick = (value: string) => {
    const { changeCasinoDescriptionNav } = this.props;

    changeCasinoDescriptionNav(value)
  }

  public onDescripionMenuClick = () => {
    const { toggleMobileMenuDescriptionCasinoOpen } = this.props;
    
    toggleMobileMenuDescriptionCasinoOpen();
  }

  public onMenuFullNavItemsListClick = (value: string) => {
    const { changeMenuFullNavItemsList } = this.props;

    changeMenuFullNavItemsList(value);
  }
  
  public renderCasonoDescriptionGeneral = () => {
    const { casinosListNav, activeCasino, isMobileMenuDescriptionCasinoOpen, jackpotsValues } = this.props;

    return <CasonoDescriptionGeneral
      casinosListNav={casinosListNav}
      onClick={this.onCasinoDescriptionClick}
      activeCasino={activeCasino}
      jackpotsValues={jackpotsValues}
      onDescripionMenuClick={this.onDescripionMenuClick}
      isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
      casinoClick={this.casinoClick}
      />
  }

  public renderCasinoDescriptionPromo = () => {
    const { casinosListNav, activeCasino, isMobileMenuDescriptionCasinoOpen, jackpotsValues } = this.props;

    return <CasinoDescriptionPromo
      casinosListNav={casinosListNav}
      onClick={this.onCasinoDescriptionClick}
      activeCasino={activeCasino}
      jackpotsValues={jackpotsValues}
      onDescripionMenuClick={this.onDescripionMenuClick}
      isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
      casinoClick={this.casinoClick}
      />
  }

  public renderCasinoDescriptionEvents = () => {
    const { casinosListNav, activeCasino, isMobileMenuDescriptionCasinoOpen, jackpotsValues } = this.props;
    return <CasinoDescriptionEvents
      promoList={eventsList}
      casinosListNav={casinosListNav}
      onClick={this.onCasinoDescriptionClick}
      activeCasino={activeCasino}
      jackpotsValues={jackpotsValues}
      onDescripionMenuClick={this.onDescripionMenuClick}
      isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
      casinoClick={this.casinoClick}
      />
  }

  public renderCasinoDescriptionGallary = () => {
    const { casinosListNav, activeCasino, isMobileMenuDescriptionCasinoOpen, jackpotsValues } = this.props;
    return <CasinoDescriptionGallary
      promoList='' // TODO Check
      casinosListNav={casinosListNav}
      onClick={this.onCasinoDescriptionClick}
      activeCasino={activeCasino}
      jackpotsValues={jackpotsValues}
      onDescripionMenuClick={this.onDescripionMenuClick}
      isMobileMenuDescriptionCasinoOpen={isMobileMenuDescriptionCasinoOpen}
      casinoClick={this.casinoClick}
      />
  }

  public renderHomeContent = () => {
    const { jackpotsValues } = this.props;

    return <HomeContent jackpotsValues={jackpotsValues} />
  }

  public casinoClick = (value: string) => {
    const { changeActiveCasino } = this.props;

    changeActiveCasino(value);
  }

  public renderCasinosContent = () => {
    const { jackpotsValues } = this.props;

    return <CasinosContent jackpotsValues={jackpotsValues} casinoClick={this.casinoClick}/>
  }

  public onMainLogoClick = () => {
    const { nullNavs } = this.props;

    nullNavs();
  }

  public render() {
    const {
      navList,
      menuNavItemsList,
      isMobileMenuOpen,
      menuFullNavItemsList,
      casinosInfo,
      time,
      activeCasino,
    } = this.props;

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
          onMenuFullNavItemsListClick={this.onMenuFullNavItemsListClick}
          menuFullNavItemsList={menuFullNavItemsList}
          onMainLogoClick={this.onMainLogoClick}
        >
          <Route exact={true} path='/' render={this.renderHomeContent} />
          <Route exact={true} path='/about' component={AboutUsContent}/>
          <Route exact={true} path='/corrier' component={CorriereContent}/>
          <Route exact={true} path='/casinos' render={this.renderCasinosContent}/>
          <Route exact={true} path='/games' component={GameListContent}/>
          <Route exact={true} path='/promo' component={Promo}/>
          <Route exact={true} path={`/casinos/${activeCasino}`} render={this.renderCasonoDescriptionGeneral}/>
          <Route exact={true} path={`/casinos/${activeCasino}-main`} render={this.renderCasonoDescriptionGeneral}/>
          <Route exact={true} path={`/casinos/${activeCasino}-promo`} render={this.renderCasinoDescriptionPromo}/>
          <Route exact={true} path={`/casinos/${activeCasino}-events`} render={this.renderCasinoDescriptionEvents}/>
          <Route exact={true} path={`/casinos/${activeCasino}-gallary`} render={this.renderCasinoDescriptionGallary}/>
          <Route exact={true} path='/contacts' render={getContactsContent}/>
        </CommonWrapper>
      </Router>
    )
  }
}
