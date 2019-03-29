import { all, call } from 'redux-saga/effects';

import { mainWatcher } from 'sagas';

export function* rootSaga() {
  try {
    yield all([
      call(mainWatcher),
    ]);
  } catch (e) {
    throw e;
  }
}

