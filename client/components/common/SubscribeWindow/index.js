import React from 'react';
import { connect } from 'react-redux';
import s from './styles.scss';

import { closeSubscribe } from '../../../redux/modules/common/subscribe';

import FormWindow from '../FormWindow';
import TextInput from '../TextInput';
import Button from '../Button';

const SubscribeWindow = (props) => {
  const { open, closeSubscribe } = props;

  return (
    <FormWindow
      open={open}
      close={() => closeSubscribe()}>
      <form className={s.form}>
        <div className={s.input}>
          <TextInput placeholder="e-mail" name="email"/>
        </div>
        <div className={s.button}>
          <Button type="button" style="primary">Get updates</Button>
        </div>
      </form>
    </FormWindow>
  );
};

export default connect(
  (state) => ({
    open: state.common.subscribe.open
  }),
  {
    closeSubscribe
  }
)(SubscribeWindow);
