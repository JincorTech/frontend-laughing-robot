import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate, Interpolate } from 'react-i18next';
import s from './styles.scss';

import { closeBeta, betaRequest } from '../../../redux/modules/common/beta';

import FormWindow from '../FormWindow';
import TextInput from '../TextInput';
import Button from '../Button';
import PrivacyPolicyLink from '../../resourses/Links/PrivacyPolicyLink';
import TermsOfUseLink from '../../resourses/Links/TermsOfUseLink';
import Checkbox from '../Checkbox';

class BetaWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agree: false,
      email: this.props.email || '',
      name: this.props.name || '',
      company: this.props.company || '',
      position: this.props.position || ''
    };

    this._handleAgreeToggle = this._handleAgreeToggle.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleCompanyChange = this._handleCompanyChange.bind(this);
    this._handlePositionChange = this._handlePositionChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleAgreeToggle() {
    this.setState((prevState) => ({ agree: !prevState.agree }));
  }

  _handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  _handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  _handleCompanyChange(e) {
    this.setState({ company: e.target.value });
  }

  _handlePositionChange(e) {
    this.setState({ position: e.target.value });
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    const { email, name, company, position } = this.state;
    this.props.betaRequest({ email, name, company, position });
  }

  render() {
    const { t, open, closeBeta } = this.props;
    const { email, name, company, position, agree } = this.state;

    return (
      <FormWindow
        open={open}
        title={t('beta.title')}
        close={() => closeBeta()}>
        <form
          id="mk_betaPopup"
          className={s.form}
          onSubmit={this._handleFormSubmit}>
          <div className={s.input}>
            <TextInput
              placeholder={t('beta.name')}
              name="name"
              value={name}
              onChange={this._handleNameChange}/>
          </div>
          <div className={s.input}>
            <TextInput
              placeholder={t('beta.company')}
              name="company"
              value={company}
              onChange={this._handleCompanyChange}/>
          </div>
          <div className={s.input}>
            <TextInput
              placeholder={t('beta.position')}
              name="position"
              value={position}
              onChange={this._handlePositionChange}/>
          </div>
          <div className={s.input}>
            <TextInput
              placeholder={t('beta.email')}
              name="email"
              value={email}
              onChange={this._handleEmailChange}/>
          </div>
          <div className={s.button}>
            <Button disabled={!agree} type="submit" style="primary" size="small">{t('beta.accept')}</Button>
          </div>
          <div className={s.tip}>
            <Checkbox
              onChange={this._handleAgreeToggle}
              checked={agree}
              label={
                <Interpolate
                  i18nKey="tips.form"
                  useDangerouslySetInnerHTML={true}
                  tou={<TermsOfUseLink propLabel={t('tips.touPropLabel')}/>}
                  pp={<PrivacyPolicyLink propLabel={t('tips.ppPropLabel')}/>}/>
              }/>
          </div>
        </form>
      </FormWindow>
    );
  }
}

const TranslatedComponent = translate()(BetaWindow);
export default connect(
  (state) => ({
    open: state.common.beta.open
  }),
  {
    closeBeta,
    betaRequest
  }
)(TranslatedComponent);
