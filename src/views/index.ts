import { connect } from 'react-redux';
import { Dispatch } from 'redux';

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
  updateJackpots
} from 'reducers';

const mapStateToProps = ({
  activeCasino,
  casinosListNav,
  navList,
  menuNavItemsList,
  isMobileMenuOpen,
  menuFullNavItemsList,
  time,
  casinosInfo,
  jackpotsValues,
  isMobileMenuDescriptionCasinoOpen,
}: IStore) => ({
  activeCasino,
  casinosListNav,
  navList,
  menuNavItemsList,
  isMobileMenuOpen,
  menuFullNavItemsList,
  time,
  casinosInfo,
  jackpotsValues,
  isMobileMenuDescriptionCasinoOpen
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
});

export const ViewPage = connect(
  mapStateToProps,
  mapDispatchProps
)(ViewPageComponent);
