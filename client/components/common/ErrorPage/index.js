import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import SLink from '../SLink';

const ErrorPage = (props) => {
  const { t } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.error}>
        <div className={s.msg}>{t('404.error')}</div>
        <div className={s.link}>
          <SLink href="/">{t('404.action')}</SLink>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate('common')(ErrorPage);
export default TranslatedComponent;
