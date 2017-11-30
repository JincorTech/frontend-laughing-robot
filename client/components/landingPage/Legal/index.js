import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import { UserAgent } from '@quentin-sommer/react-useragent';
import TermsOfUseLink from '../../resourses/Links/TermsOfUseLink';
import PrivacyPolicyLink from '../../resourses/Links/PrivacyPolicyLink';
import TokenAgreementLink from '../../resourses/Links/TokenAgreementLink';
import BusinessProfileLink from '../../resourses/Links/BusinessProfileLink';

const Legal = (props) => {
  const { t } = props;

  return (
    <div className={s.legal}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{t('legal.title')}</h2>
          <h4 className={s.subtitle}>{t('legal.subtitle')}</h4>
        </div>

        <div className={s.content}>
          <div className={s.blocks}>
            <div className={s.block}>
              <div className={s.val}>{t('legal.blocks.1.val')}</div>
              <div className={s.label}>{t('legal.blocks.1.label')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{t('legal.blocks.2.val')}</div>
              <div className={s.label}>{t('legal.blocks.2.label')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{t('legal.blocks.3.val')}</div>
              <div className={s.label}>{t('legal.blocks.3.label')}</div>
            </div>
          </div>
          <div className={s.text}>{t('legal.text')}</div>

          <div className={s.image}>
            <UserAgent computer><img src={require('./images/legal.png')}/></UserAgent>
            <UserAgent mobile><img src={require('./images/legalMobile.png')}/></UserAgent>
          </div>

          <div className={s.links}>
            <div className={s.link}><TermsOfUseLink className={s.linkComponent}/></div>
            <div className={s.link}><TokenAgreementLink className={s.linkComponent}/></div>
            <div className={s.link}><PrivacyPolicyLink className={s.linkComponent}/></div>
            <div className={s.link}><BusinessProfileLink className={s.linkComponent}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default translate()(Legal);
