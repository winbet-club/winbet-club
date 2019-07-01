import { takeEvery, put, call, select } from 'redux-saga/effects';

import { ACTIONS } from 'actionConstants';
import { saveJeckpots } from 'reducers';
import { Api } from 'servises/Api';

export function* mainWatcher() {
  yield takeEvery(ACTIONS.LOAD_JECKPOTS, loadJackpots);
}

function* loadJackpots() {
  try {
    const { data: { level } } = yield call(() => Api.getJackpots());
    const jackpotsValues = (state: any) => state.jackpotsValues;

    const values = yield select(jackpotsValues);
    const arr = [...Array(10).keys()];
    const intermidiateData = arr.reduce(accum, (value, i) => {
      return 
    }, 0)
    
    // if(jackpotsValues.length) {

    // }
    
    yield put(saveJeckpots(level));
  } catch (error) {
    console.log('error', error);
  }
}

