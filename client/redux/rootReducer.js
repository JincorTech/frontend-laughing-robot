import { combineReducers } from 'redux-seamless-immutable';

import i18next from './modules/app/i18next';

export default combineReducers({
  app: combineReducers({
    i18next
  })
});
