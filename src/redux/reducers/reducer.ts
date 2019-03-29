import { createAction, handleActions, Action } from 'redux-actions';

import { ACTIONS } from 'actionConstants';

export const testAction = createAction(ACTIONS.TEST);

const defaultState = {
  testProperty: ''
};

export const mainReducer = handleActions<any, any> (
  {
    [ACTIONS.TEST]: (
      state: any,
      {payload}: Action<any>
    ): any => {
      if(payload) {
        return {
          ...state,
          testProperty: payload,
        }
      };
      return state;
    },
  },
  defaultState
);

