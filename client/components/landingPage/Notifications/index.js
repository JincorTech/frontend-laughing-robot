import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { NotificationStack } from 'react-notification';

import { removeAllNotifications } from '../../../redux/modules/common/notifications';

const Notifications = (props) => {
  const { notifications, removeAllNotifications } = props;

  return (
    <div>
      <NotificationStack
        notifications={notifications}
        onDismiss={() => removeAllNotifications()}/>
    </div>
  );
};

const TranslatedComponent = translate()(Notifications);
export default connect(
  (state) => ({
    notifications: state.common.notifications.notifications
  }),
  {
    removeAllNotifications
  }
)(TranslatedComponent);
