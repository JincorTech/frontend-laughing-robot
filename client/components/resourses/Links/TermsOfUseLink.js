import React from 'react';
import { translate } from 'react-i18next';
import SLink from '../../common/SLink';
import { UserAgent } from '@quentin-sommer/react-useragent';

export const TermsOfUseLink = (props) => {
  const { t, i18n, i18nLoadedAt, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <span>
      <UserAgent computer><SLink href="/agreement" {...restProps}>{t('links.resourses.tou.label')}</SLink></UserAgent>
      <UserAgent mobile><a href={t('links.resourses.tou.href')} target="_blank" rel="nofollow" {...restProps}>{t('links.resourses.tou.label')}</a></UserAgent>
    </span>
  );
};

export default translate()(TermsOfUseLink);
