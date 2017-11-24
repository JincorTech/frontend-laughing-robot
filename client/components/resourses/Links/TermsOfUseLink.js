import React from 'react';
import { translate } from 'react-i18next';

export const TermsOfUseLink = (props) => {
  const { t, i18n, i18nLoadedAt, propLabel, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <a
      href="/agreement"
      target="_blank"
      rel="nofollow"
      {...restProps}>
      {propLabel ? propLabel : t('links.resourses.tou.label')}
    </a>
  );
};

export default translate()(TermsOfUseLink);
