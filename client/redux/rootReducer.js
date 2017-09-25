import { combineReducers } from 'redux-seamless-immutable';

import i18next from './modules/app/i18next';

import faq from './modules/common/faq';
import beta from './modules/common/beta';
import subscribe from './modules/common/subscribe';
import useCases from './modules/landingPage/useCases';

export default combineReducers({
  app: combineReducers({
    i18next
  }),

  common: combineReducers({
    faq,
    beta,
    subscribe
  }),

  landingPage: combineReducers({
    useCases
  })
});
