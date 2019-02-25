import {
  call,
  put,
  select,
  take,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { LOAD_ALL_ESTATES, FILTER_ESTATES } from './constants';
import { estatesLoaded, estatesLoadingError, setFilterSucess } from './actions';

import request from 'utils/request';

export function* loadEstates() {
  const requestURL = `http://localhost:3000/getEstates`;
  try {
    const state = yield select();
    const filter = state.get('estates').get('filter');
    const estetes = yield call(request, requestURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter),
    });
    yield put(estatesLoaded(estetes));
  } catch (err) {
    debugger;
    yield put(estatesLoadingError(err));
  }
}

export function* filterEstates({ filter }) {
  try {
    yield put(setFilterSucess(filter));
    yield call(loadEstates);
  } catch (err) {
    yield put(estatesLoadingError(err));
  }
}

export default function* estateData() {
  yield takeEvery(FILTER_ESTATES, filterEstates);
}
