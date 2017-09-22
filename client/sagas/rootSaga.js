import { all, fork } from 'redux-saga/effects';

import i18nextSaga from './app/i18nextSaga';

export default function* () {
  yield all([
    fork(i18nextSaga)
  ]);
}
