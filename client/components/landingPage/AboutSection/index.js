import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

import WhitePaperLink from '../../resourses/Links/WhitePaperLink';
import YellowPaperLink from '../../resourses/Links/YellowPaperLink';
import TermsAndConditionsLink from '../../resourses/Links/TermsAndConditionsLink';
import PrivacyPolicyLink from '../../resourses/Links/PrivacyPolicyLink';
import BusinessSummaryLink from '../../resourses/Links/BusinessSummaryLink';
import DisclaimerLink from '../../resourses/Links/DisclaimerLink';

const AboutSection = ({ t }) => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <div className={s.what}>
          <h2 className={s.title}>{t('about.whatIs.title')}</h2>
          <h4 className={s.subtitle}>{t('about.whatIs.subtitle')}</h4>
          <div className={s.content}>
            <div className={s.text}>{t('about.whatIs.text')}</div>
          </div>
        </div>
        <div className={s.resourses}>
          <h2 className={s.title}>{t('about.resourses.title')}</h2>
          <h4 className={s.subtitle}>{t('about.resourses.subtitle')}</h4>
          <div className={s.content}>
            <div className={s.links}>
              <div><WhitePaperLink/></div>
              <div><YellowPaperLink className={s.disabled}/></div>
              <div><BusinessSummaryLink/></div>
              <div><TermsAndConditionsLink className={s.disabled}/></div>
              <div><PrivacyPolicyLink className={s.disabled}/></div>
              <div><DisclaimerLink className={s.disabled}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(AboutSection);
export default TranslatedComponent;
