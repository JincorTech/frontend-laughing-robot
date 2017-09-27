import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import s from './styles.scss';

import { closeBeta } from '../../../redux/modules/common/beta';

import FormWindow from '../FormWindow';
import TextInput from '../TextInput';
import Button from '../Button';

const BetaWindow = (props) => {
  const { open, closeBeta, t } = props;

  return (
    <FormWindow
      open={open}
      close={() => closeBeta()}>
      <form className={s.form}>
        <div className={s.input}>
          <TextInput placeholder={t('beta.name')} name="name"/>
        </div>
        <div className={s.input}>
          <TextInput placeholder={t('beta.company')} name="company"/>
        </div>
        <div className={s.input}>
          <TextInput placeholder={t('beta.position')} name="position"/>
        </div>
        <div className={s.input}>
          <TextInput placeholder={t('beta.email')} name="email"/>
        </div>
        <div className={s.button}>
          <Button type="button" style="primary">{t('beta.accept')}</Button>
        </div>
      </form>
    </FormWindow>
  );
};

const TranslatedComponent = translate()(BetaWindow);
export default connect(
  (state) => ({
    open: state.common.beta.open
  }),
  {
    closeBeta
  }
)(TranslatedComponent);
