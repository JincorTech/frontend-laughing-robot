import React from 'react';
import { translate } from 'react-i18next';

export const TokenAgreementLink = (props) => {
  const { t, i18n, i18nLoadedAt, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <a
      href="/token-sale-agreement"
      target="_blank"
      rel="nofollow"
      {...restProps}>
      {t('links.resourses.agreement.label')}
    </a>
  );
};

export default translate()(TokenAgreementLink);
