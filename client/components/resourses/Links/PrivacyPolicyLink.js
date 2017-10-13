import React from 'react';
import { translate } from 'react-i18next';
import SLink from '../../common/SLink';
import { UserAgent } from '@quentin-sommer/react-useragent';

export const PrivacyPolicyLink = (props) => {
  const { t, i18n, i18nLoadedAt, propLabel, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <span>
      <UserAgent computer><SLink href="/privacy-policy" {...restProps}>{propLabel ? propLabel : t('links.resourses.privacy.label')}</SLink></UserAgent>
      <UserAgent mobile><a href={t('links.resourses.privacy.href')} target="_blank" rel="nofollow" {...restProps}>{t('links.resourses.privacy.label')}</a></UserAgent>
    </span>
  );
};

export default translate()(PrivacyPolicyLink);
