import { takeEvery, put, call } from 'redux-saga/effects';

import { ACTIONS } from 'actionConstants';
import { saveJeckpots } from 'reducers';
import { Api } from 'servises/Api';

export function* mainWatcher() {
  yield takeEvery(ACTIONS.LOAD_JECKPOTS, loadJackpots);
}

function* loadJackpots() {
  try {
    const { data: { level } } = yield call(() => Api.getJackpots());
    
    yield put(saveJeckpots(level));
  } catch (error) {
    console.log('error', error);
  }
}

