import 'whatwg-fetch';
import { takeEvery, all, fork, call, put } from 'redux-saga/effects';
import { SUBSCRIBE_REQUEST } from '../../redux/modules/common/subscribe';
import { removeAllNotifications } from '../../redux/modules/common/notifications';

import { notify } from '../../utils/notifications';
import { EMAIL_REGEXP } from '../../utils/validators';
import { post } from '../../utils/fetch';
import i18next, { config } from '../../utils/i18next/client';

i18next.cloneInstance(config);

function* subscribeRequestIterator({ payload }) {
  const { email } = payload;
  // remove all notifications before validation
  // dont render 2 notifications at the one time
  // because react key can be equal
  yield put(removeAllNotifications());

  const body = {
    email,
    subject: 'ico',
    browserLanguage: navigator.language || navigator.userLanguage,
    landingLanguage: i18next.language
  };

  try {
    if (!email) {
      yield put(notify(i18next.t('notifications.emailEmpty'), 'error'));
    } else if (!EMAIL_REGEXP.test(email)) {
      yield put(notify(i18next.t('notifications.emailIncorrect'), 'error'));
    } else {
      yield call(post, 'http://139.162.132.212:8080/api/v1/mailingList/subscribev2', body);
      yield put(notify(i18next.t('notifications.success')));
    }
  } catch (e) {
    if (e.status === 422) {
      yield put(notify(i18next.t('notifications.emailTaken'), 'error'));
    } else {
      yield put(notify(i18next.t('notifications.failure')));
      yield call(console.error, e, body);
    }
  }
}

function* subscribeRequestSaga() {
  yield takeEvery(
    SUBSCRIBE_REQUEST,
    subscribeRequestIterator
  );
}

export default function* () {
  yield all([
    fork(subscribeRequestSaga)
  ]);
}
