import { takeEvery, all, fork, call, put } from 'redux-saga/effects';
import { CHANGE_LANGUAGE } from '../../redux/modules/app/i18next';
import i18next from '../../utils/i18next/client';
import { push } from 'react-router-redux';

/**
 * Overwrite URL and change language
 */

const supportedLanguages = ['en', 'ru', 'es', 'it', 'zh', 'hi', 'ja', 'pl', 'pt', 'ro', 'ko'];

function* changeLanguageIterator({ payload }) {
  const { lang, pathname } = payload;
  const pathnameArray = pathname.split('/');
  const currentLanguage = supportedLanguages.indexOf(pathnameArray[1]) === -1 ? '' : pathnameArray[1];

  if (currentLanguage) {
    const [em, clang, ...newLocationArray] = pathnameArray; // eslint-disable-line no-unused-vars
    yield put(push(`/${lang}/${newLocationArray.join('/')}`));
  } else {
    const [em, ...newLocationArray] = pathnameArray; // eslint-disable-line no-unused-vars
    yield put(push(`/${lang}/${newLocationArray.join('/')}`));
  }

  yield call([i18next, i18next.changeLanguage], lang);
}

function* changeLanguageSaga() {
  yield takeEvery(
    CHANGE_LANGUAGE,
    changeLanguageIterator
  );
}

export default function* () {
  yield all([
    fork(changeLanguageSaga)
  ]);
}
