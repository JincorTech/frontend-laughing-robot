import React from 'react';
import s from './styles.scss';

const TextInput = (props) => (
  <input className={s.input} {...props}/>
);

export default TextInput;
