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

const getBetaData = () => fetch('https://companies-api.jincor.com/api/v1/company/totalCount', {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).then((res) => res.json().then((data) => data));

function* fetchIcoDataIterator() {
  try {
    const ico = yield call(getIcoData);
    const { data: beta } = yield call(getBetaData);
    const body = Object.assign({}, ico, beta);
    yield put(fetchIcoData.success(body));
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
