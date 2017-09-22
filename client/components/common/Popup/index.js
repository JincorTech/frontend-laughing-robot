import React from 'react';

import s from './styles.scss';

const Popup = (props) => {
  const { children, title, close } = props;

  return (
    <div className={s.popup}>
      <div className={s.head}>
        <div className={s.close} onClick={() => close()}/>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.body}>{children}</div>
    </div>
  );
};

export default Popup;
