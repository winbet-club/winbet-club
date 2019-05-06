import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ViewPage as ViewPageComponent } from './ViewPage';
import { changeHeaderNav, IStore } from 'reducers';

const mapStateToProps = ({
  navList,
}: IStore) => ({
  navList,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  changeHeaderNav: (value: string) => dispatch(changeHeaderNav(value)),
});

export const ViewPage = connect(
  mapStateToProps,
  mapDispatchProps
)(ViewPageComponent);
