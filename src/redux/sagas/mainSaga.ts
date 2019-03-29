import { takeEvery, put } from 'redux-saga/effects';

import { ACTIONS } from 'actionConstants';
import { testAction } from 'reducers';

export function* mainWatcher() {
  yield takeEvery(ACTIONS.TEST, testGenerator);
}

function* testGenerator() {
  try {
    yield put(testAction());
  } catch (error) {
    console.log('error', error);
  }
}

