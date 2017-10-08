import React from 'react';
import { translate } from 'react-i18next';
import SLink from '../../common/SLink';
import { UserAgent } from '@quentin-sommer/react-useragent';

export const TechPaperLink = (props) => {
  const {
    t,
    i18n, i18nLoadedAt, // eslint-disable-line no-unused-vars
    ...restProps
  } = props;

  return (
    <span>
      <UserAgent computer>
        <SLink
          href="/technical-paper"
          {...restProps}>
          {t('links.resourses.techpaper.label')}
        </SLink>
      </UserAgent>
      <UserAgent mobile>
        <a
          href={t('links.resourses.techpaper.href')}
          target="_blank"
          rel="nofollow"
          {...restProps}>
          {t('links.resourses.techpaper.label')}
        </a>
      </UserAgent>
    </span>
  );
};

export default translate()(TechPaperLink);
