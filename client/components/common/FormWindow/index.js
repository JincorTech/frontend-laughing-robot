import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const FormWindow = (props) => {
  const { children, open, close, t } = props;

  const renderWindow = () => (
    <div className={s.background}>
      <div className={s.window}>
        <div className={s.body}>
          {children}
        </div>
        <div className={s.footer}>
          <button className={s.close} type="button" onClick={() => close()}>
            <img src={require('./svg/close.svg')}/>
            <span>{t('window.cancel')}</span>
          </button>
        </div>
      </div>
    </div>
  );

  return open ? renderWindow() : null;
};

const TranslatedComponent = translate()(FormWindow);
export default TranslatedComponent;
