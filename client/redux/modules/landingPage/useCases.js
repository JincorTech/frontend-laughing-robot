import { from } from 'seamless-immutable';
import { createAction, createReducer } from '../../../utils/actions';

export const CHANGE_TAB = 'landingPage/CHANGE_TAB';

export const changeTab = createAction(CHANGE_TAB);

const initialState = from({
  activeTab: 1
});

export default createReducer({
  [CHANGE_TAB]: (state, { payload }) => state.merge({ activeTab: payload })
}, initialState);
