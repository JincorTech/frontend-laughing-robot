import { combineReducers } from 'redux-seamless-immutable';

import i18next from './modules/app/i18next';

import beta from './modules/common/beta';
import subscribe from './modules/common/subscribe';
import mobileNavigation from './modules/common/mobileNavigation';
import useCases from './modules/landingPage/useCases';
import notifications from './modules/common/notifications';

export default combineReducers({
  app: combineReducers({
    i18next
  }),

  common: combineReducers({
    beta,
    subscribe,
    notifications,
    mobileNavigation
  }),

  landingPage: combineReducers({
    useCases
  })
});
