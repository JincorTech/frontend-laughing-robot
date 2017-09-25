import React from 'react';
import s from './styles.scss';

const FormWindow = (props) => {
  const { children, open, close } = props;

  const renderWindow = () => (
    <div className={s.background}>
      <div className={s.window}>
        <div className={s.body}>
          {children}
        </div>
        <div className={s.footer}>
          <button className={s.close} type="button" onClick={() => close()}>
            <img src={require('./svg/close.svg')}/>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );

  return open ? renderWindow() : null;
};

export default FormWindow;
