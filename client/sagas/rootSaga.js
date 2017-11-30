import { all, fork } from 'redux-saga/effects';

import i18nextSaga from './app/i18nextSaga';
import subscribeSaga from './common/subscribeSaga';
import betaSaga from './common/betaSaga';
import icoData from './landingPage/icoData';

export default function* () {
  yield all([
    fork(i18nextSaga),
    fork(subscribeSaga),
    fork(betaSaga),
    fork(icoData)
  ]);
}
