import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ViewPage as ViewPageComponent } from './ViewPage';
import { changeHeaderNav, IStore, saveNewTime } from 'reducers';

const mapStateToProps = ({
  navList,
  menuNavItemsList,
  isMobileMenuOpen,
  menuFullNavItemsList,
  time,
}: IStore) => ({
  navList,
  menuNavItemsList,
  isMobileMenuOpen,
  menuFullNavItemsList,
  time,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  changeHeaderNav: (value: string) => dispatch(changeHeaderNav(value)),
  saveNewTime: (time: string) => dispatch(saveNewTime(time)),
});

export const ViewPage = connect(
  mapStateToProps,
  mapDispatchProps
)(ViewPageComponent);
