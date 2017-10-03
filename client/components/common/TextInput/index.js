import React from 'react';
import s from './styles.scss';

const TextInput = (props) => {
  const { rounded, ...restProps } = props;

  return (
    <input className={rounded ? s.rounded : s.input} {...restProps}/>
  );
};

export default TextInput;
