import { combineReducers } from "redux";
import { localizeReducer } from "react-localize-redux";

import { mainReducer } from 'reducers';

export const rootReducer = combineReducers({
  localize: localizeReducer,
  main: mainReducer,
});