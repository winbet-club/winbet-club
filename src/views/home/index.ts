import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { HomePage as HomePageComponent } from './HomePage';
import { changeHeaderNav, IStore } from 'reducers';

const mapStateToProps = ({
  testProperty,
  navList,
}: IStore) => ({
  testProperty,
  navList,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  changeHeaderNav: (value: string) => dispatch(changeHeaderNav(value)),
});

export const HomePage = connect(
  mapStateToProps,
  mapDispatchProps
)(HomePageComponent);
