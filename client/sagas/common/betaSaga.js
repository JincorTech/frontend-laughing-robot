import { takeEvery, all, fork, call, put } from 'redux-saga/effects';
import { BETA_REQUEST } from '../../redux/modules/common/beta';
import { removeAllNotifications } from '../../redux/modules/common/notifications';

import { notify } from '../../utils/notifications';
import { EMAIL_REGEXP } from '../../utils/validators';
import { post } from '../../utils/fetch';
import i18next, { config } from '../../utils/i18next/client';

const { API_HOST, API_PREFIX } = process.env;

i18next.cloneInstance(config);

function* betaRequestIterator({ payload }) {
  const { email, name, company, position } = payload;
  // remove all notifications before validation
  // dont render 2 notifications at the one time
  // because react key can be equal
  yield put(removeAllNotifications());

  const body = {
    email,
    name,
    company,
    position,
    subject: 'beta',
    browserLanguage: navigator.language || navigator.userLanguage,
    landingLanguage: i18next.language
  };

  try {
    if (!email) {
      yield put(notify(i18next.t('notifications.emailEmpty'), 'error'));
    } else if (!EMAIL_REGEXP.test(email)) {
      yield put(notify(i18next.t('notifications.emailIncorrect'), 'error'));
    } else if (!name) {
      yield put(notify(i18next.t('notifications.nameEmpty'), 'error'));
    } else if (!company) {
      yield put(notify(i18next.t('notifications.companyEmpty'), 'error'));
    } else if (!position) {
      yield put(notify(i18next.t('notifications.positionEmpty'), 'error'));
    } else {
      yield call(post, `${API_HOST}${API_PREFIX}/mailingList/subscribev2`, body);
      yield put(notify(i18next.t('notifications.success')));
    }
  } catch (e) {
    if (e.status === 422) {
      yield put(notify(i18next.t('notifications.emailTaken'), 'error'));
    } else {
      yield put(notify(i18next.t('notifications.failure'), 'error'));
      yield call(console.error, e);
    }
  }
}

function* betaRequestSaga() {
  yield takeEvery(
    BETA_REQUEST,
    betaRequestIterator
  );
}

export default function* () {
  yield all([
    fork(betaRequestSaga)
  ]);
}
