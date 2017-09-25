import { from } from 'seamless-immutable';
import { createAction, createReducer } from '../../../utils/actions';

export const OPEN_BETA = 'common/beta/OPEN_BETA';
export const CLOSE_BETA = 'common/beta/CLOSE_BETA';

export const openBeta = createAction(OPEN_BETA);
export const closeBeta = createAction(CLOSE_BETA);

const initialState = from({
  open: false
});

export default createReducer({
  [OPEN_BETA]: (state) => state.merge({ open: true }),
  [CLOSE_BETA]: (state) => state.merge({ open: false })
}, initialState);
