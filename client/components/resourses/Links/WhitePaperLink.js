import React from 'react';
import { translate } from 'react-i18next';

export const WhitePaperLink = (props) => {
  const { t, i18n, i18nLoadedAt, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <a
      href={t('links.resourses.whitepaper.href')}
      target="_blank"
      rel="nofollow"
      {...restProps}>
      {t('links.resourses.whitepaper.label')}
    </a>
  );
};

export default translate()(WhitePaperLink);
