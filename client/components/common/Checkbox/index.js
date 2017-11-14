import React from 'react';
import s from './styles.scss';

const Checkbox = (props) => {
  const { style, label, ...restProps } = props;

  return (
    <label className={style === 'black' ? s.black : s.checkbox}>
      <input className={s.input} {...restProps} type="checkbox" />
      <div className={s.box}/>
      {label}
    </label>
  );
};

export default Checkbox;
