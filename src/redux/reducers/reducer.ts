import { createAction, handleActions, Action } from 'redux-actions';

import { ACTIONS } from 'actionConstants';
import { headerNavList, menuItemsList, menuFullNavItemsList, casinosInfo, casinosListNav } from 'context';
import { INavItem, ICasinoAddress } from 'atoms';

export const testAction = createAction(ACTIONS.TEST);
export const changeHeaderNav = createAction(ACTIONS.CHANGE_HEADER_NAV);
export const saveNewTime = createAction(ACTIONS.SAVE_NEW_TIME);
export const loadJackpots = createAction(ACTIONS.LOAD_JECKPOTS);
export const saveJeckpots = createAction(ACTIONS.SAVE_JACKPOTS);
export const saveOneJeckpot = createAction(ACTIONS.SAVE_ONE_JACKPOT);
export const updateJackpots = createAction(ACTIONS.UPDATE_JACKPOTS);


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
  casinosInfo: ICasinoAddress[];
  jackpotsValues?: any;
}

const defaultState: IStore = {
  activeCasino: 'url_1',
  casinosListNav: [...casinosListNav],
  navList: [...headerNavList],
  menuNavItemsList: [...menuItemsList],
  menuFullNavItemsList: [...menuFullNavItemsList],
  isMobileMenuOpen: true,
  time: '',
  casinosInfo: [...casinosInfo],
  jackpotsValues: [],
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
      { payload }: Action<string>
    ): IStore => (
      {
        ...state,
        time: payload,
      }
    ),

    [ACTIONS.SAVE_JACKPOTS]: (
      state: IStore,
      { payload }: Action<any>
    ): IStore => (
      {
        ...state,
        jackpotsValues: payload,
      }
    ),

    [ACTIONS.SAVE_ONE_JACKPOT]: (
      state: IStore,
      { payload }: Action<any>
    ): IStore => (
      {
        ...state,
        jackpotsValues: [
          ...state.jackpotsValues,
          [payload.index] = payload.value,
        ],
      }
    )
  },
  defaultState
);

