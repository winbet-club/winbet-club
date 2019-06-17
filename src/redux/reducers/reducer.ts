import { createAction, handleActions, Action } from 'redux-actions';

import { ACTIONS } from 'actionConstants';
import { headerNavList, menuItemsList, menuFullNavItemsList, casinosListNav } from 'context';
import { INavItem } from 'atoms';

export const testAction = createAction(ACTIONS.TEST);
export const changeHeaderNav = createAction(ACTIONS.CHANGE_HEADER_NAV);
export const saveNewTime = createAction(ACTIONS.SAVE_NEW_TIME);


export interface ICasinosListNav {
  value: string;
  isActive: boolean;
}

export interface IStore {
  activeCasino: string;
  casinosListNav: ICasinosListNav[];
  navList: INavItem[],
  menuNavItemsList: INavItem[];
  menuFullNavItemsList: any;
  isMobileMenuOpen: boolean;
  time?: string; // TODO Check necessarily
}

const defaultState: IStore = {
  activeCasino: 'url_1',
  casinosListNav: [...casinosListNav],
  navList: [...headerNavList],
  menuNavItemsList: [...menuItemsList],
  menuFullNavItemsList: [...menuFullNavItemsList],
  isMobileMenuOpen: true,
  time: '',
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
    [ACTIONS.SAVE_NEW_TIME]: (
      state: IStore,
      {payload}: Action<string>
    ): IStore => (
      {
        ...state,
        time: payload,
      }
    )
  },
  defaultState
);

