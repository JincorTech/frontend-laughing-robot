import React from 'react';
import { Link } from 'react-router-dom';
import i18next from '../../../utils/i18next/client';

const SLink = (props) => {
  const { href, children, ...restProps } = props;
  const { language } = i18next;

  return (
    <Link to={`/${language}${href}`} {...restProps}>{children}</Link>
  );
};

export default SLink;
