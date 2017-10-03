import { from } from 'seamless-immutable';
import { createAction, createReducer } from '../../../utils/actions';

export const OPEN_SUBSCRIBE = 'common/subscribe/OPEN_SUBSCRIBE';
export const CLOSE_SUBSCRIBE = 'common/subscribe/CLOSE_SUBSCRIBE';
export const SUBSCRIBE_REQUEST = 'common/subscribe/SUBSCRIBE_REQUEST';

export const openSubscribe = createAction(OPEN_SUBSCRIBE);
export const closeSubscribe = createAction(CLOSE_SUBSCRIBE);
export const subscribeRequest = createAction(SUBSCRIBE_REQUEST);

const initialState = from({
  open: false
});

export default createReducer({
  [OPEN_SUBSCRIBE]: (state) => state.merge({ open: true }),
  [CLOSE_SUBSCRIBE]: (state) => state.merge({ open: false })
}, initialState);
