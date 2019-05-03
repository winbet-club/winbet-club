import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AboutUsPage as AboutUsPageComponent } from './AboutUs';
import { changeHeaderNav, IStore } from 'reducers';

const mapStateToProps = ({
  navList,
}: IStore) => ({
  navList,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
  changeHeaderNav: (value: string) => dispatch(changeHeaderNav(value)),
});

export const AboutUsPage = connect(
  mapStateToProps,
  mapDispatchProps
)(AboutUsPageComponent);
