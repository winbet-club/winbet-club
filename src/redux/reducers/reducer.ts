import { createAction, handleActions, Action } from 'redux-actions';

import { ACTIONS } from 'actionConstants';
import { headerNavList } from 'context';
import { INavItem } from 'atoms';

export const testAction = createAction(ACTIONS.TEST);
export const changeHeaderNav = createAction(ACTIONS.CHANGE_HEADER_NAV);

export interface IStore {
  navList: INavItem[],
  // time: string;
}

const defaultState = {
  navList: [...headerNavList],
  // time: '12:00:00'
};

export const mainReducer = handleActions<IStore, any> (
  {
    [ACTIONS.CHANGE_HEADER_NAV]: (
      state: IStore,
      {payload}: Action<string>
    ): IStore => {
      if(payload) {
        return {
          ...state,
          navList: state.navList.map((item) => (
            {
              ...item,
              isActive: item.value === payload,
            }
          )),
        }
      };
      return state;
    },
  },
  defaultState
);

