import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withLocalize } from 'react-localize-redux';

import { ViewPage as ViewPageComponent } from './ViewPage';
import {
  changeHeaderNav,
  IStore,
  saveNewTime,
  toggleMobileMenu,
  toggleMobileMenuDescriptionCasinoOpen,
  changeCasinoDescriptionNav,
  changeMenuFullNavItemsList,
  loadJackpots,
  updateJackpots,
  changeMenuNav,
  nullNavs,
  changeActiveCasino,
} from 'reducers';

interface ICurrentState {
  main: IStore;
}

const mapStateToProps = ({
  main
}: ICurrentState) => ({
  activeCasino: main.activeCasino,
  casinosListNav: main.casinosListNav,
  navList: main.navList,
  menuNavItemsList: main.menuNavItemsList,
  isMobileMenuOpen: main.isMobileMenuOpen,
  menuFullNavItemsList: main.menuFullNavItemsList,
  time: main.time,
  casinosInfo: main.casinosInfo,
  jackpotsValues: main.jackpotsValues,
  isMobileMenuDescriptionCasinoOpen: main.isMobileMenuDescriptionCasinoOpen
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  changeHeaderNav: (value: string) => dispatch(changeHeaderNav(value)),
  saveNewTime: (time: string) => dispatch(saveNewTime(time)),
  loadJackpots: () => dispatch(loadJackpots()),
  updateJackpots: () => dispatch(updateJackpots()),
  toggleMobileMenu: () => dispatch(toggleMobileMenu()),
  toggleMobileMenuDescriptionCasinoOpen: () => dispatch(toggleMobileMenuDescriptionCasinoOpen()),
  changeCasinoDescriptionNav: (value: string) => dispatch(changeCasinoDescriptionNav(value)),
  changeMenuFullNavItemsList: (value: string) => dispatch(changeMenuFullNavItemsList(value)),
  changeMenuNav: (value: string) => dispatch(changeMenuNav(value)),
  changeActiveCasino: (value: string) => dispatch(changeActiveCasino(value)),
  nullNavs: () => dispatch(nullNavs()),
});

export const ViewPage = withLocalize(connect(
  mapStateToProps,
  mapDispatchProps
)(ViewPageComponent) as any);
