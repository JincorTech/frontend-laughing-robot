import React from 'react';
import classnames from 'classnames/bind';
import s from './styles.scss';

const Button = (props) => {
  const {
    style,
    children,
    rounded,
    ...restProps
  } = props;

  const cx = classnames.bind(s);
  const className = cx(
    'button',
    style,
    rounded ? 'rounded' : null
  );

  return (
    <button className={className} {...restProps}>{children}</button>
  );
};

export default Button;
