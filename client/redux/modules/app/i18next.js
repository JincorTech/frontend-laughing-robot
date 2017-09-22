import { from } from 'seamless-immutable';
import { createAction, createReducer } from '../../../utils/actions';

export const CHANGE_LANGUAGE = 'app/i18next/CHANGE_LANGUAGE';

export const changeLanguage = createAction(CHANGE_LANGUAGE);

const initialState = from({
  language: 'en'
});

export default createReducer({

}, initialState);
