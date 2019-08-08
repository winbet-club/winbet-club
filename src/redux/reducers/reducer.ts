import { createAction, handleActions, Action } from 'redux-actions';

import { ACTIONS } from 'actionConstants';
import { headerNavList, menuItemsList, menuFullNavItemsList, casinosInfo, casinosListNav } from 'context';
import { INavItem, ICasinoAddress } from 'atoms';

export const testAction = createAction(ACTIONS.TEST);
export const changeHeaderNav = createAction(ACTIONS.CHANGE_HEADER_NAV);
export const saveNewTime = createAction(ACTIONS.SAVE_NEW_TIME);
export const loadJackpots = createAction(ACTIONS.LOAD_JECKPOTS);
export const loadAdditionalJackpots = createAction(ACTIONS.LOAD_ADDITIONAL_JACKPOTS);
export const saveJeckpots = createAction(ACTIONS.SAVE_JACKPOTS);
export const saveOneJeckpot = createAction(ACTIONS.SAVE_ONE_JACKPOT);
export const updateJackpots = createAction(ACTIONS.UPDATE_JACKPOTS);
export const toggleMobileMenu = createAction(ACTIONS.TOGGLE_MOBILE_MENU);
export const toggleMobileMenuDescriptionCasinoOpen = createAction(ACTIONS.TOGGLE_MOBILE_MENU_DESCRIPTION_OPEN);
export const changeCasinoDescriptionNav = createAction(ACTIONS.CHANGE_CASINO_DESCRIPTION_NAV);
export const changeMenuFullNavItemsList = createAction(ACTIONS.CHANGE_MENU_FULL_NAV_ITEMS_LIST);
export const changeMenuNav = createAction(ACTIONS.CHANGE_MENU_NAV);
export const nullNavs = createAction(ACTIONS.NULL_NAVS);
export const changeActiveCasino = createAction(ACTIONS.CHANGE_ACTIVE_CASINO);

export interface ICasinosListNav {
  value: string;
  isActive: boolean;
}

export interface IStore {
  activeCasino: string;
  casinosListNav: ICasinosListNav[];
  navList: INavItem[],
  menuNavItemsList: INavItem[];
  menuFullNavItemsList: ICasinosListNav[];
  isMobileMenuOpen: boolean;
  time?: string; // TODO Check necessarily
  casinosInfo: ICasinoAddress[];
  jackpotsValues?: any;
  isMobileMenuDescriptionCasinoOpen?: boolean;
}

const defaultState: IStore = {
  activeCasino: 'russiyanova',
  casinosListNav: [...casinosListNav],
  navList: [...headerNavList],
  menuNavItemsList: [...menuItemsList],
  menuFullNavItemsList: [...menuFullNavItemsList],
  isMobileMenuOpen: true,
  time: '',
  casinosInfo: [...casinosInfo],
  jackpotsValues: [],
  isMobileMenuDescriptionCasinoOpen: true,
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
          menuNavItemsList: state.menuNavItemsList.map(item => ({
            ...item,
            isActive: false,
          })),
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
        jackpotsValues: state.jackpotsValues.map((jackpot: any, index: number) => ({
          ...jackpot,
          value: payload[index],
        })),
      }
    ),
    [ACTIONS.TOGGLE_MOBILE_MENU]: (
      state: IStore,
    ): IStore => (
      {
        ...state,
        isMobileMenuOpen: !state.isMobileMenuOpen,
      }
    ),
    [ACTIONS.TOGGLE_MOBILE_MENU_DESCRIPTION_OPEN]: (
      state: IStore,
    ): IStore => (
      {
        ...state,
        isMobileMenuDescriptionCasinoOpen: !state.isMobileMenuDescriptionCasinoOpen,
      }
    ),
    [ACTIONS.CHANGE_CASINO_DESCRIPTION_NAV]: (
      state: IStore,
      { payload }: Action<string>
    ): IStore => (
      {
        ...state,
        casinosListNav: state.casinosListNav.map(item => ({
          ...item,
          isActive: item.value === payload,
        })),
      }
    ),
    [ACTIONS.CHANGE_MENU_FULL_NAV_ITEMS_LIST]: (
      state: IStore,
      { payload }: Action<string>
    ): IStore => (
      {
        ...state,
        menuFullNavItemsList: state.menuFullNavItemsList.map(item => ({
          ...item,
          isActive: item.value === payload,
        })),
      }
    ),
    [ACTIONS.CHANGE_ACTIVE_CASINO]: (
      state: IStore,
      { payload }: Action<string>
    ): IStore => (
      {
        ...state,
        activeCasino: payload,
      }
    ),
    [ACTIONS.CHANGE_MENU_NAV]: (
      state: IStore,
      { payload }: Action<string>
    ): IStore => (
      {
        ...state,
        menuNavItemsList: state.menuNavItemsList.map(item => ({
          ...item,
          isActive: item.value === payload,
        })),
        navList: state.navList.map((item) => ({
          ...item,
          isActive: false,
        }))
      }
    ),
    [ACTIONS.NULL_NAVS]: (
      state: IStore,
    ): IStore => (
      {
        ...state,
        menuNavItemsList: state.menuNavItemsList.map(item => ({
          ...item,
          isActive: false,
        })),
        navList: state.navList.map((item) => ({
          ...item,
          isActive: false,
        })),
        menuFullNavItemsList: state.menuFullNavItemsList.map((item) => ({
          ...item,
          isActive: false,
        }))
      }
    ),
  },
  defaultState
);

