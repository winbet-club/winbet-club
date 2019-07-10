import { takeEvery, put, call, select, delay, } from 'redux-saga/effects';

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

const intervals = (interval: number) => {
  switch (true) {
    case interval < 5:
      return 0.1;
    case interval < 20:
      return (interval / 10).toFixed(2);
    case interval < 100:
      return (interval / 20).toFixed(2);
  
    default:
      return (interval / 30).toFixed(2);
  }
}

function* updateJackpots() {
  try {
    const { data: { level: newJackpotData } } = yield call(() => Api.getJackpots());
    const jackpotsValues = (state: any) => state.jackpotsValues;
    const values = yield select(jackpotsValues);
    // const JeckpotsDifference = newJackpotData.map(({value}: any, index: number) => value - values[index].value);
    console.log(newJackpotData, values);
    const currentData = [3, 10, 50, 100];
    const newValues = [5, 15, 70, 120];
    const longestArr = { index: 0, lengthArr: 0 };

    // add .value
    const lastDataWithNewStap = currentData.map((item, index) => ({ value: currentData[index], step: intervals(newValues[index] - item)}))
    console.log({lastDataWithNewStap});
    const intermediateData = lastDataWithNewStap.map((item, index) => { // Массивы промежуточных значений
      const tempArr = [];
      let currentValue = item.value;
      while(currentValue < newValues[index]) {
        tempArr.push(Number(currentValue.toFixed(2)));
        currentValue += Number(item.step);
      }
      if(tempArr.length > longestArr.lengthArr) {
        longestArr.index = index;
        longestArr.lengthArr = tempArr.length;
      }

      return tempArr;
    })
    console.log({intermediateData});
    const dataForSaving = intermediateData[longestArr.index].map((value, index) => {
      return intermediateData.reduce((accum, item, i) => {
        const current = item[index] ? item[index] : item[item.length - 1]
        return [...accum, current];
      }, [])
    })

    console.log({dataForSaving});

    for (const newArr of dataForSaving) {
      yield delay(50);
      yield put(saveOneJeckpot(newArr))
    }

  } catch (error) {
    console.log('error', error);
  }
}

