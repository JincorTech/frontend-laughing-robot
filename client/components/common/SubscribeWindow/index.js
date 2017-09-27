import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import s from './styles.scss';

import { closeSubscribe } from '../../../redux/modules/common/subscribe';

import FormWindow from '../FormWindow';
import TextInput from '../TextInput';
import Button from '../Button';

const SubscribeWindow = (props) => {
  const { open, closeSubscribe, t } = props;

  return (
    <FormWindow
      open={open}
      close={() => closeSubscribe()}>
      <form className={s.form}>
        <div className={s.input}>
          <TextInput placeholder={t('subscribe.email')} name="email"/>
        </div>
        <div className={s.button}>
          <Button type="button" style="primary">{t('subscribe.accept')}</Button>
        </div>
      </form>
    </FormWindow>
  );
};

const TranslatedComponent = translate()(SubscribeWindow);
export default connect(
  (state) => ({
    open: state.common.subscribe.open
  }),
  {
    closeSubscribe
  }
)(TranslatedComponent);
