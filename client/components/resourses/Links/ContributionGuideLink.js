import React from 'react';
import { translate } from 'react-i18next';

export const ContributionGuideLink = (props) => {
  const { t, i18n, i18nLoadedAt, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <a
      href="/contribution-guide"
      target="_blank"
      rel="nofollow"
      {...restProps}>
      {t('links.resourses.contribGuide.label')}
    </a>
  );
};

export default translate()(ContributionGuideLink);
