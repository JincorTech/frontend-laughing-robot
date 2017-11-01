import React from 'react';
import s from './styles.scss';

const FormWindow = (props) => {
  const { title, children, open, close } = props;

  const renderWindow = () => (
    <div className={s.background}>
      <div className={s.window}>
        <div className={s.title}>
          {title}
        </div>
        <div className={s.body}>
          {children}
        </div>
      </div>

      <button className={s.close} type="button" onClick={() => close()}>
        <img src={require('../../../assets/images/common/closePopup.svg')}/>
      </button>
    </div>
  );

  return open ? renderWindow() : null;
};

export default FormWindow;
