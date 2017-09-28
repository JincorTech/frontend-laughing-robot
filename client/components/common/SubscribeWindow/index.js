import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import s from './styles.scss';

import { closeSubscribe, subscribeRequest } from '../../../redux/modules/common/subscribe';

import FormWindow from '../FormWindow';
import TextInput from '../TextInput';
import Button from '../Button';

class SubscribeWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.email || ''
    };

    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    this.props.subscribeRequest({ email });
  }

  render() {
    const { open, closeSubscribe, t } = this.props;
    const { email } = this.state;

    return (
      <FormWindow
        open={open}
        close={() => closeSubscribe()}>
        <form className={s.form} onSubmit={this._handleFormSubmit}>
          <div className={s.input}>
            <TextInput
              placeholder={t('subscribe.email')}
              name="email"
              value={email}
              onChange={this._handleEmailChange}/>
          </div>
          <div className={s.button}>
            <Button type="submit" style="primary">{t('subscribe.accept')}</Button>
          </div>
        </form>
      </FormWindow>
    );
  }
}

const TranslatedComponent = translate()(SubscribeWindow);
export default connect(
  (state) => ({
    open: state.common.subscribe.open
  }),
  {
    closeSubscribe,
    subscribeRequest
  }
)(TranslatedComponent);
