import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { CorrierePage as CorrierePageComponent } from './CorrierePage';
import { changeHeaderNav, IStore } from 'reducers';

const mapStateToProps = ({
  navList,
}: IStore) => ({
  navList,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  changeHeaderNav: (value: string) => dispatch(changeHeaderNav(value)),
});

export const CorrierePage = connect(
  mapStateToProps,
  mapDispatchProps
)(CorrierePageComponent);
