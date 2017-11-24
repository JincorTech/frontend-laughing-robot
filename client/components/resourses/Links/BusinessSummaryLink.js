import React from 'react';
import { translate } from 'react-i18next';

export const BusinessSummaryLink = (props) => {
  const { t, i18n, i18nLoadedAt, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <a
      href="/business-summary"
      target="_blank"
      rel="nofollow"
      {...restProps}>
      {t('links.resourses.bsummary.label')}
    </a>
  );
};

export default translate()(BusinessSummaryLink);
