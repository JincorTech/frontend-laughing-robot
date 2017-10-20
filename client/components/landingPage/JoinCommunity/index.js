import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate, Interpolate } from 'react-i18next';
import s from './styles.scss';

import { subscribeRequest } from '../../../redux/modules/common/subscribe';

import PrivacyPolicyLink from '../../resourses/Links/PrivacyPolicyLink';
import TermsOfUseLink from '../../resourses/Links/TermsOfUseLink';

class JoinCommunity extends Component {
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
    const { t } = this.props;
    const { email } = this.state;

    return (
      <div className={s.community}>
        <div className={s.container}>
          <h2 className={s.title}>{t('community.title')}</h2>
          <h4 className={s.subtitle}>{t('community.subtitle')}</h4>

          <form
            id="mk_subscribe"
            className={s.form}
            onSubmit={this._handleFormSubmit}>
            <div className={s.input}>
              <input
                className={s.inputElement}
                placeholder="e-mail"
                name="email"
                value={email}
                onChange={this._handleEmailChange}/>
            </div>
            <div className={s.button}>
              <button
                className={s.buttonElement}
                type="submit">{t('community.button')}</button>
            </div>
            <div className={s.tip}>
              <Interpolate
                i18nKey="tips.form"
                useDangerouslySetInnerHTML={true}
                tou={<TermsOfUseLink propLabel={t('tips.touPropLabel')}/>}
                pp={<PrivacyPolicyLink propLabel={t('tips.ppPropLabel')}/>}/>
            </div>
          </form>

          <div className={s.socials}>
            <a className={s.social} href="" target="_blank">
              <img src={require('../../../assets/images/socials/telegram.svg')}/>
            </a>

            <a className={s.social} href="" target="_blank">
              <img src={require('../../../assets/images/socials/twitter.svg')}/>
            </a>

            <a className={s.social} href="" target="_blank">
              <img src={require('../../../assets/images/socials/reddit.svg')}/>
            </a>

            <a className={s.social} href="" target="_blank">
              <img src={require('../../../assets/images/socials/medium.svg')}/>
            </a>

            <a className={s.social} href="" target="_blank">
              <img src={require('../../../assets/images/socials/facebook.svg')}/>
            </a>

            <a className={s.social} href="" target="_blank">
              <img src={require('../../../assets/images/socials/instagram.svg')}/>
            </a>

            <a className={s.social} href="" target="_blank">
              <img src={require('../../../assets/images/socials/github.svg')}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const TranslatedComponent = translate()(JoinCommunity);
export default connect(
  null,
  {
    subscribeRequest
  }
)(TranslatedComponent);
