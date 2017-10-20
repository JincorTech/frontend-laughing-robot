import React from 'react';
import classnames from 'classnames/bind';
import s from './styles.scss';

const Button = (props) => {
  const {
    style,
    children,
    ...restProps
  } = props;

  const cx = classnames.bind(s);
  const className = cx(
    'button',
    style
  );

  return (
    <button className={className} {...restProps}>{children}</button>
  );
};

export default Button;
