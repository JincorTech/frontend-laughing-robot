import React from 'react';
import { translate } from 'react-i18next';

export const BusinessProfileLink = (props) => {
  const { t, i18n, i18nLoadedAt, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <a
      href="/business-profile"
      target="_blank"
      rel="nofollow"
      {...restProps}>
      {t('links.resourses.bProfile.label')}
    </a>
  );
};

export default translate()(BusinessProfileLink);
