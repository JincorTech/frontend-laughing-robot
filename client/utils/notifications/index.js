import { addNotification } from '../../redux/modules/common/notifications';

const baseStyles = {
  textAlign: 'center',
  width: '270px',
  left: '50%',
  marginLeft: '-135px',
  font: '300 17px Roboto',
  color: '#fff',
  padding: '15px 0',
  bottom: '20px',
  zIndex: '999999'
};

const successStyles = Object.assign({}, baseStyles, { backgroundColor: '#09549E' });
const errorStyles = Object.assign({}, baseStyles, { backgroundColor: '#CF3737' });

export const notify = (message, type) => addNotification({
  message,
  key: message,
  dismissAfter: 5000,
  barStyle: type === 'error' ? errorStyles : successStyles
});
