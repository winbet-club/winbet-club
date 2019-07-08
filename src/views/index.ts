import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ViewPage as ViewPageComponent } from './ViewPage';
import { changeHeaderNav, IStore, saveNewTime, loadJackpots, updateJackpots } from 'reducers';

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
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  changeHeaderNav: (value: string) => dispatch(changeHeaderNav(value)),
  saveNewTime: (time: string) => dispatch(saveNewTime(time)),
  loadJackpots: () => dispatch(loadJackpots()),
  updateJackpots: () => dispatch(updateJackpots()),
});

export const ViewPage = connect(
  mapStateToProps,
  mapDispatchProps
)(ViewPageComponent);
