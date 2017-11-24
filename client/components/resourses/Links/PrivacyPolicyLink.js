import React from 'react';
import { translate } from 'react-i18next';

export const PrivacyPolicyLink = (props) => {
  const { t, i18n, i18nLoadedAt, propLabel, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <a
      href="/privacy-policy"
      target="_blank"
      rel="nofollow"
      {...restProps}>
      {propLabel ? propLabel : t('links.resourses.privacy.label')}
    </a>
  );
};

export default translate()(PrivacyPolicyLink);
