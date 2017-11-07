import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import WhitePaperLink from '../../resourses/Links/WhitePaperLink';
import TechPaperLink from '../../resourses/Links/TechPaperLink';
import TermsOfUseLink from '../../resourses/Links/TermsOfUseLink';
import PrivacyPolicyLink from '../../resourses/Links/PrivacyPolicyLink';
import BusinessSummaryLink from '../../resourses/Links/BusinessSummaryLink';

const Resources = (props) => {
  const { t } = props;

  return (
    <div className={s.resources}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{t('resources.title')}</h2>
          <h4 className={s.subtitle}>{t('resources.subtitle')}</h4>
        </div>

        <div className={s.body}>
          <div className={s.link}><WhitePaperLink className={s.linkComponent}/></div>
          <div className={s.link}><TechPaperLink className={s.linkComponent}/></div>
          <div className={s.link}><BusinessSummaryLink className={s.linkComponent}/></div>
          <div className={s.link}><TermsOfUseLink className={s.linkComponent}/></div>
          <div className={s.link}><PrivacyPolicyLink className={s.linkComponent}/></div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Resources);
export default TranslatedComponent;
