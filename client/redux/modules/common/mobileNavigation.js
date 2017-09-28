import { from } from 'seamless-immutable';
import { createAction, createReducer } from '../../../utils/actions';

export const OPEN_NAVIGATION = 'common/mobileNavigation/OPEN_NAVIGATION';
export const CLOSE_NAVIGATION = 'common/mobileNavigation/CLOSE_NAVIGATION';
export const CHANGE_VIEW = 'common/mobileNavigation/CHANGE_WINDOW';

export const openNavigation = createAction(OPEN_NAVIGATION);
export const closeNavigation = createAction(CLOSE_NAVIGATION);
export const changeView = createAction(CHANGE_VIEW);

const initialState = from({
  open: true,
  view: 'nav'
});

export default createReducer({
  [OPEN_NAVIGATION]: (state) => state.merge({ open: true }),
  [CLOSE_NAVIGATION]: (state) => state.merge({ open: false, view: 'nav' }),
  [CHANGE_VIEW]: (state, { payload }) => state.merge({ view: payload })
}, initialState);
