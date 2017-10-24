import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const Media = (props) => {
  const { t } = props;
  
  return (
    <div className={s.media}>
      <div className={s.container}>
        <div className={s.text}>
          {t('media.text')}
        </div>

        <div className={s.logos}>
          <div className={s.logo}></div>
          <div className={s.logo}></div>
          <div className={s.logo}></div>
          <div className={s.logo}></div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Media);
export default TranslatedComponent;
