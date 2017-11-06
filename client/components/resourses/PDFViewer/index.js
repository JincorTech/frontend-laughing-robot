import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import s from './styles.scss';

import SLink from '../../common/SLink';

class PDFViewer extends Component {
  render() {
    const { t, name, children, download, goBack } = this.props;

    const renderClose = () => {
      if (this.props.history.location.key) {
        return (
          <button type="button" onClick={() => goBack()}>
            {t('pdf.gotomain')}
          </button>
        );
      } else {
        return (
          <SLink href="/">
            {t('pdf.gotomain')}
          </SLink>
        );
      }
    };

    return (
      <div className={s.viewer}>
        <div className={s.menu}>
          <div className={s.inner}>
            <div className={s.left}>
              <div className={s.logo}>
                <img src={require('../../../assets/images/logo.svg')}/>
              </div>
              <div className={s.backButton}>
                {renderClose()}
              </div>
            </div>

            <div className={s.center}>
              {name && <div className={s.name}>{`Jincor ${name}`}</div>}
            </div>

            <div className={s.right}>
              <div className={s.download}>
                <a className={s.button} href={download} download>
                  <span>{t('pdf.download')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={s.body}>{children}</div>
      </div>
    );
  }
}

const WithRouterComponent = withRouter(PDFViewer);
const TranslatedComponent = translate()(WithRouterComponent);
export default connect(
  null,
  {
    goBack
  }
)(TranslatedComponent);
