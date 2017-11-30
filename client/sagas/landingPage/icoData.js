import 'whatwg-fetch';
import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { fetchIcoData } from '../../redux/modules/landingPage/icoData';

/**
 * Fetch Dashboard
 */

const getIcoData = () => fetch('https://ico-back.jincor.com/dashboard/public', {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).then((res) => res.json().then((data) => data));

function* fetchIcoDataIterator() {
  try {
    const data = yield call(getIcoData);
    yield put(fetchIcoData.success(data));
  } catch (e) {
    yield put(fetchIcoData.failure(e));
  }
}

function* fetchIcoDataSaga() {
  yield takeLatest(
    fetchIcoData.REQUEST,
    fetchIcoDataIterator
  );
}

/**
 * Export
 */

export default function* () {
  yield all([
    fork(fetchIcoDataSaga)
  ]);
}
