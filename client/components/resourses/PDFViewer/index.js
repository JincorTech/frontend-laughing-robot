import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import SLink from '../../common/SLink';

const PDFViewer = (props) => {
  const { t, name, children, download } = props;

  return (
    <div className={s.viewer}>
      <div className={s.header}>
        <div className={s.container}>
          <div className={s.back}>
            <SLink href="/" className={s.backButton}>
              <img src={require('./images/backarr.svg')}/>
              <span>{t('pdf.gotomain')}</span>
            </SLink>
          </div>

          {name && <div className={s.name}>{`Jincor ${name}`}</div>}

          <div className={s.download}>
            <a href={download} download>
              <img src={require('./images/downloadarr.svg')}/>
              <span>{t('pdf.download')}</span>
            </a>
          </div>
        </div>
      </div>
      <div className={s.body}>{children}</div>
    </div>
  );
};

const TranslatedComponent = translate()(PDFViewer);
export default TranslatedComponent;
