import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate, Interpolate } from 'react-i18next';
import s from './styles.scss';

import { closeSubscribe, subscribeRequest } from '../../../redux/modules/common/subscribe';

import FormWindow from '../FormWindow';
import TextInput from '../TextInput';
import Button from '../Button';
import PrivacyPolicyLink from '../../resourses/Links/PrivacyPolicyLink';
import TermsOfUseLink from '../../resourses/Links/TermsOfUseLink';

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
        title={t('subscribe.title')}
        close={() => closeSubscribe()}>
        <form
          id="mk_subscribePopup"
          className={s.form}
          onSubmit={this._handleFormSubmit}>
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
          <div className={s.tip}>
            <Interpolate
              i18nKey="tips.form"
              useDangerouslySetInnerHTML={true}
              tou={<TermsOfUseLink propLabel={t('tips.touPropLabel')}/>}
              pp={<PrivacyPolicyLink propLabel={t('tips.ppPropLabel')}/>}/>
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
