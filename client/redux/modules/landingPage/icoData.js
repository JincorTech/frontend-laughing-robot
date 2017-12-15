import { from } from 'seamless-immutable';
import { createAsyncAction, createReducer } from '../../../utils/actions';

export const FETCH_ICO_DATA = 'landingPage/icoData/FETCH_ICO_DATA';

export const fetchIcoData = createAsyncAction(FETCH_ICO_DATA);

const initialState = from({
  jcrTokensSold: '',
  ethCollected: '',
  contributionsCount: 0,
  countryCount: 0,
  companyCount: 0,
  daysLeft: 0
});

export default createReducer({
  [fetchIcoData.SUCCESS]: (state, { payload }) => (
    state.merge({ ...payload })
  )
}, initialState);
