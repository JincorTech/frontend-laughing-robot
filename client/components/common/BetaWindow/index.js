import React from 'react';
import { connect } from 'react-redux';
import s from './styles.scss';

import { closeBeta } from '../../../redux/modules/common/beta';

import FormWindow from '../FormWindow';
import TextInput from '../TextInput';
import Button from '../Button';

const BetaWindow = (props) => {
  const { open, closeBeta } = props;

  return (
    <FormWindow
      open={open}
      close={() => closeBeta()}>
      <form className={s.form}>
        <div className={s.input}>
          <TextInput placeholder="Your name" name="name"/>
        </div>
        <div className={s.input}>
          <TextInput placeholder="Company name" name="company"/>
        </div>
        <div className={s.input}>
          <TextInput placeholder="Position" name="position"/>
        </div>
        <div className={s.input}>
          <TextInput placeholder="e-mail" name="email"/>
        </div>
        <div className={s.button}>
          <Button type="button" style="primary">Apply for beta!</Button>
        </div>
      </form>
    </FormWindow>
  );
};

export default connect(
  (state) => ({
    open: state.common.beta.open
  }),
  {
    closeBeta
  }
)(BetaWindow);
