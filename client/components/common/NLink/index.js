import React from 'react';
import { Link } from 'react-router-dom';
import i18next from '../../../utils/i18next/client';

const NLink = (props) => {
  const { language } = i18next;
  const { href, children } = props;

  return (
    <Link to={`/${language}${href}`}>{children}</Link>
  );
};

export default NLink;
