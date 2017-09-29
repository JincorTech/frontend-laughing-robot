import { from } from 'seamless-immutable';
import { createAction, createReducer } from '../../../utils/actions';

/**
 * Нужно заморочиться и удалять по 1 нотификации по идентификатору,
 * но в нашем кейсе пользователь не может видеть более одной
 * поэтому чистим все
 */

export const ADD_NOTIFICATION = 'common/notifications/ADD_NOTIFICATION';
export const REMOVE_ALL_NOTIFICATIONS = 'common/notifications/REMOVE_ALL_NOTIFICATIONS';

export const addNotification = createAction(ADD_NOTIFICATION);
export const removeAllNotifications = createAction(REMOVE_ALL_NOTIFICATIONS);

const initialState = from({
  notifications: []
});

export default createReducer({
  [ADD_NOTIFICATION]: (state, { payload }) => state.merge({
    notifications: state.notifications.concat([payload])
  }),
  [REMOVE_ALL_NOTIFICATIONS]: (state) => state.merge({ notifications: [] })
}, initialState);
