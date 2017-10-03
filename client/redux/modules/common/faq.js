import { from } from 'seamless-immutable';
import { createAction, createReducer } from '../../../utils/actions';

export const OPEN_FAQ = 'faq/OPEN_FAQ';
export const CLOSE_FAQ = 'faq/CLOSE_FAQ';

export const openFaq = createAction(OPEN_FAQ);
export const closeFaq = createAction(CLOSE_FAQ);

const initialState = from({
  open: false
});

export default createReducer({
  [OPEN_FAQ]: (state) => state.merge({ open: true }),
  [CLOSE_FAQ]: (state) => state.merge({ open: false })
}, initialState);
