import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import SLink from '../../common/SLink';

const PDFViewer = (props) => {
  const { t, name, children, download } = props;

  return (
    <div className={s.viewer}>
      <div className={s.menu}>
        <div className={s.inner}>
          <div className={s.left}>
            <div className={s.logo}>
              <img src={require('../../../assets/images/logo.svg')}/>
            </div>
            <div className={s.backButton}>
              <SLink href="/">
                {t('pdf.gotomain')}
              </SLink>
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
};

const TranslatedComponent = translate()(PDFViewer);
export default TranslatedComponent;
