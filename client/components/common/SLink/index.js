import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

const SLink = (props) => {
  const { t, i18n, i18nLoadedAt, href, children, ...restProps } = props; // eslint-disable-line no-unused-vars

  return (
    <Link to={`/${t('lang')}${href}`} {...restProps}>{children}</Link>
  );
};

const TranslatedComponent = translate()(SLink);
export default TranslatedComponent;
