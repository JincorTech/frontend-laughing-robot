import React from 'react';
import { connect } from 'react-redux';
import { translate, Interpolate } from 'react-i18next';
import { UserAgent } from '@quentin-sommer/react-useragent';
import s from './styles.scss';

import { changeTab } from '../../../redux/modules/landingPage/useCases';

const UseCases = (props) => {
  const { changeTab, activeTab, t } = props;

  const renderTabContent = (tabIndex) => {
    switch (tabIndex) {
      case 1:
        return <Interpolate i18nKey="cases.1.text" useDangerouslySetInnerHTML={true}/>;
      case 2:
        return <Interpolate i18nKey="cases.2.text" useDangerouslySetInnerHTML={true}/>;
      case 3:
        return <Interpolate i18nKey="cases.3.text" useDangerouslySetInnerHTML={true}/>;
    }
  };

  const renderDesktop = () => (
    <div>
      <div className={s.tabs}>
        <div className={activeTab === 1 ? s.active : s.tab} onClick={() => changeTab(1)}>
          {t('cases.1.title')}
        </div>
        <div className={activeTab === 2 ? s.active : s.tab} onClick={() => changeTab(2)}>
          {t('cases.2.title')}
        </div>
        <div className={activeTab === 3 ? s.active : s.tab} onClick={() => changeTab(3)}>
          {t('cases.3.title')}
        </div>
      </div>
      <div className={s.content}>
        <div className={s.text}>
          {renderTabContent(activeTab)}
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className={s.sections}>
      <div className={s.section}>
        <div className={s.sectionTitle}>{t('cases.1.title')}</div>
        <div className={s.text}>{renderTabContent(1)}</div>
      </div>
      <div className={s.section}>
        <div className={s.sectionTitle}>{t('cases.2.title')}</div>
        <div className={s.text}>{renderTabContent(2)}</div>
      </div>
      <div className={s.section}>
        <div className={s.sectionTitle}>{t('cases.3.title')}</div>
        <div className={s.text}>{renderTabContent(3)}</div>
      </div>
    </div>
  );

  return (
    <div className={s.cases}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{t('cases.title')}</h2>
          <h4 className={s.subtitle}>{t('cases.subtitle')}</h4>
        </div>
        <UserAgent computer>{renderDesktop()}</UserAgent>
        <UserAgent mobile>{renderMobile()}</UserAgent>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(UseCases);
export default connect(
  (state) => ({
    activeTab: state.landingPage.useCases.activeTab
  }),
  {
    changeTab
  }
)(TranslatedComponent);
