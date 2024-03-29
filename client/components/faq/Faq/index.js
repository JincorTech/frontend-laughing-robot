import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import { translate, Interpolate } from 'react-i18next';

import HelmetBase from '../../../components/common/HelmetBase';
import FaqBlock from '../FaqBlock';
import SLink from '../../common/SLink';

import s from './styles.scss';

const Faq = (props) => {
  const { t, goBack } = props;

  const renderClose = () => {
    if (props.history.location.key) {
      return (
        <button className={s.close} type="button" onClick={() => goBack()}>
          <img src={require('../../../assets/images/common/closePopup.svg')}/>
        </button>
      );
    } else {
      return (
        <SLink className={s.close} to="/">
          <img src={require('../../../assets/images/common/closePopup.svg')}/>
        </SLink>
      );
    }
  };

  return (
    <div className={s.faq}>
      <HelmetBase>
        <title>Jincor FAQ</title>
        <meta name="description" content={t('head.description')} />
      </HelmetBase>
      <div className={s.head}>
        <div className={s.title}>{t('faq.title')}</div>
      </div>
      <div className={s.body}>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>{t('faq.titles.1')}</h3>
          <FaqBlock title={t('faq.questions.1.q')}>
            <Interpolate i18nKey="faq.questions.1.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.2.q')}>
            <Interpolate i18nKey="faq.questions.2.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.3.q')}>
            <Interpolate i18nKey="faq.questions.3.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.4.q')}>
            <Interpolate i18nKey="faq.questions.4.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.5.q')}>
            <Interpolate i18nKey="faq.questions.5.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.6.q')}>
            <Interpolate i18nKey="faq.questions.6.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.7.q')}>
            <Interpolate i18nKey="faq.questions.7.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.8.q')}>
            <Interpolate i18nKey="faq.questions.8.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.9.q')}>
            <Interpolate i18nKey="faq.questions.9.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.10.q')}>
            <Interpolate i18nKey="faq.questions.10.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
        </div>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>{t('faq.titles.2')}</h3>
          <FaqBlock title={t('faq.questions.11.q')}>
            <Interpolate i18nKey="faq.questions.11.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.12.q')}>
            <Interpolate i18nKey="faq.questions.12.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.13.q')}>
            <Interpolate i18nKey="faq.questions.13.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.14.q')}>
            <Interpolate i18nKey="faq.questions.14.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.15.q')}>
            <Interpolate i18nKey="faq.questions.15.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.16.q')}>
            <Interpolate i18nKey="faq.questions.16.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.17.q')}>
            <Interpolate i18nKey="faq.questions.17.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.18.q')}>
            <Interpolate i18nKey="faq.questions.18.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.19.q')}>
            <Interpolate i18nKey="faq.questions.19.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
        </div>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>{t('faq.titles.3')}</h3>
          <FaqBlock title={t('faq.questions.20.q')}>
            <Interpolate i18nKey="faq.questions.20.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.21.q')}>
            <Interpolate i18nKey="faq.questions.21.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.22.q')}>
            <Interpolate i18nKey="faq.questions.22.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.23.q')}>
            <Interpolate i18nKey="faq.questions.23.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.24.q')}>
            <Interpolate i18nKey="faq.questions.24.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
        </div>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>{t('faq.titles.4')}</h3>
          <FaqBlock title={t('faq.questions.25.q')}>
            <Interpolate i18nKey="faq.questions.25.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.26.q')}>
            <Interpolate i18nKey="faq.questions.26.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.27.q')}>
            <Interpolate i18nKey="faq.questions.27.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.28.q')}>
            <Interpolate i18nKey="faq.questions.28.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
        </div>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>{t('faq.titles.5')}</h3>
          <FaqBlock title={t('faq.questions.29.q')}>
            <Interpolate i18nKey="faq.questions.29.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.30.q')}>
            <Interpolate i18nKey="faq.questions.30.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.31.q')}>
            <Interpolate i18nKey="faq.questions.31.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.32.q')}>
            <Interpolate i18nKey="faq.questions.32.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
        </div>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>{t('faq.titles.6')}</h3>
          <FaqBlock title={t('faq.questions.33.q')}>
            <Interpolate i18nKey="faq.questions.33.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
          <FaqBlock title={t('faq.questions.34.q')}>
            <Interpolate i18nKey="faq.questions.34.a" useDangerouslySetInnerHTML={true}/>
          </FaqBlock>
        </div>
      </div>

      {renderClose()}
    </div>
  );
};

const WithRouterComponent = withRouter(Faq);
const TranslatedComponent = translate()(WithRouterComponent);
export default connect(
  null,
  {
    goBack
  }
)(TranslatedComponent);
