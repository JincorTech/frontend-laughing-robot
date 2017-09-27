import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import TextInput from '../../common/TextInput';
import Button from '../../common/Button';

const JoinCommunity = (props) => {
  const { t } = props;

  return (
    <div className={s.community}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={require('../../../assets/images/logo.svg')}/>
        </div>
        <h2 className={s.title}>{t('community.title')}</h2>
        <h4 className={s.subtitle}>{t('community.subtitle')}</h4>

        <form className={s.form}>
          <div className={s.input}>
            <TextInput placeholder="e-mail"/>
          </div>
          <div className={s.button}>
            <Button type="button" style="primary">{t('community.button')}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(JoinCommunity);
export default TranslatedComponent;
