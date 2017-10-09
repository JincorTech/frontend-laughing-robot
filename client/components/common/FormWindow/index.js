import React, { Component } from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

class FormWindow extends Component {
  constructor(props) {
    super(props);

    this._handleBackdropClick = this._handleBackdropClick.bind(this);
  }

  _handleBackdropClick(e) {
    if (this.popup.contains(e.target)) {
      return;
    }

    this.props.close();
  }

  render() {
    const { title, children, open, close, t } = this.props;

    const renderWindow = () => (
      <div className={s.background} onClick={this._handleBackdropClick}>
        <div className={s.mobileClose} onClick={() => close()}>
          <img src={require('./svg/close.svg')}/>
        </div>

        <div className={s.window} ref={(popup) => this.popup = popup}>
          <div className={s.title}>
            {title}
          </div>
          <div className={s.body}>
            {children}
          </div>
          <div className={s.footer}>
            <button className={s.close} type="button" onClick={() => close()}>
              <img src={require('./svg/close.svg')}/>
              <span>{t('window.cancel')}</span>
            </button>
          </div>
        </div>
      </div>
    );

    return open ? renderWindow() : null;
  }
}

const TranslatedComponent = translate()(FormWindow);
export default TranslatedComponent;
