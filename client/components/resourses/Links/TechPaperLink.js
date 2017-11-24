import React from 'react';
import { translate } from 'react-i18next';

export const TechPaperLink = (props) => {
  const {
    t,
    i18n, i18nLoadedAt, // eslint-disable-line no-unused-vars
    ...restProps
  } = props;

  return (
    <a
      href="/technical-paper"
      target="_blank"
      rel="nofollow"
      {...restProps}>
      {t('links.resourses.techpaper.label')}
    </a>
  );
};

export default translate()(TechPaperLink);
