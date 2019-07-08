import { takeEvery, put, call, select, delay } from 'redux-saga/effects';

import { ACTIONS } from 'actionConstants';
import { saveJeckpots, saveOneJeckpot } from 'reducers';
import { Api } from 'servises/Api';

export function* mainWatcher() {
  yield takeEvery(ACTIONS.LOAD_JECKPOTS, loadJackpots);
  yield takeEvery(ACTIONS.UPDATE_JACKPOTS, updateJackpots);
}

function* loadJackpots() {
  try {
    const { data: { level } } = yield call(() => Api.getJackpots());

    for (let index = 0; index < 15; index++) {
      const newData = level.map((jp: any, i: number) => {
        return index === 14 ? jp : {...jp, value: (jp.value / 15 * ( index + 1 )).toFixed(2)};
      });

      yield delay(50);
      yield put(saveJeckpots(newData));
    }
    
  } catch (error) {
    console.log('error', error);
  }
}

function* updateJackpots() {
  try {
    const { data: { level } } = yield call(() => Api.getJackpots());
    const jackpotsValues = (state: any) => state.jackpotsValues;

    const values = yield select(jackpotsValues);
    console.log({values});

    // let isValuesEqual = false;

    // while(!isValuesEqual) {
      level.forEach((jp: any, index: number) => {
        if(jp.value < values[index].value) {
          // isValuesEqual = false;
          put(saveOneJeckpot({ value: values[index].value, index }));
        }
        // isValuesEqual = true;
      })
    // }
    
  } catch (error) {
    console.log('error', error);
  }
}
