import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import s from './styles.scss';

import { closeBeta, betaRequest } from '../../../redux/modules/common/beta';

import FormWindow from '../FormWindow';
import TextInput from '../TextInput';
import Button from '../Button';

class BetaWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.email || '',
      name: this.props.name || '',
      company: this.props.company || '',
      position: this.props.position || ''
    };

    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleCompanyChange = this._handleCompanyChange.bind(this);
    this._handlePositionChange = this._handlePositionChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
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
    const { email, name, company, position } = this.state;

    return (
      <FormWindow
        open={open}
        close={() => closeBeta()}>
        <form className={s.form} onSubmit={this._handleFormSubmit}>
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
            <Button type="submit" style="primary">{t('beta.accept')}</Button>
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
