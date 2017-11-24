import React from 'react';
import { translate } from 'react-i18next';

export const BrandResourcesLink = (props) => {
  const { t, i18n, i18nLoadedAt, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <a
      href="/brand-resources"
      target="_blank"
      rel="nofollow"
      {...restProps}>
      {t('links.resourses.guidelines.label')}
    </a>
  );
};

export default translate()(BrandResourcesLink);
