import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ViewPage as ViewPageComponent } from './ViewPage';
import { changeHeaderNav, IStore, saveNewTime, loadJackpots } from 'reducers';

const mapStateToProps = ({
  activeCasino,
  casinosListNav,
  navList,
  menuNavItemsList,
  isMobileMenuOpen,
  menuFullNavItemsList,
  time,
}: IStore) => ({
  activeCasino,
  casinosListNav,
  navList,
  menuNavItemsList,
  isMobileMenuOpen,
  menuFullNavItemsList,
  time,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  changeHeaderNav: (value: string) => dispatch(changeHeaderNav(value)),
  saveNewTime: (time: string) => dispatch(saveNewTime(time)),
  loadJackpots: () => dispatch(loadJackpots()),
});

export const ViewPage = connect(
  mapStateToProps,
  mapDispatchProps
)(ViewPageComponent);
