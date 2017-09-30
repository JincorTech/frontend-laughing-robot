import React from 'react';
import { translate } from 'react-i18next';
import SLink from '../../common/SLink';
import { UserAgent } from '@quentin-sommer/react-useragent';

export const DisclaimerLink = (props) => {
  const { t, i18n, i18nLoadedAt, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <span>
      <UserAgent computer><SLink href="/disclaimer" {...restProps}>{t('links.resourses.disclaimer.label')}</SLink></UserAgent>
      <UserAgent mobile><a href={t('links.resourses.disclaimer.href')} target="_blank" rel="nofollow" {...restProps}>{t('links.resourses.disclaimer.label')}</a></UserAgent>
    </span>
  );
};

export default translate()(DisclaimerLink);

