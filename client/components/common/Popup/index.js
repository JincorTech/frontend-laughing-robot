import React from 'react';

import s from './styles.scss';

const Popup = (props) => {
  const { children, title, open, close } = props;

  const renderPopup = () => (
    <div className={s.popup}>
      <div className={s.head}>
        <div className={s.close} onClick={() => close()}/>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.body}>{children}</div>
    </div>
  );

  return open ? renderPopup() : null;
};

export default Popup;
