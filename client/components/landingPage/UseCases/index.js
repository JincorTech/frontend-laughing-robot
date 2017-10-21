import React from 'react';
import { connect } from 'react-redux';
import { translate, Interpolate } from 'react-i18next';
import s from './styles.scss';

import { changeTab } from '../../../redux/modules/landingPage/useCases';

import SLink from '../../common/SLink';

const UseCases = (props) => {
  const { changeTab, activeTab, t } = props;

  const renderTabContent = (tab) => {
    switch (tab) {
      case 1:
        return (
          <Interpolate
            i18nKey="cases.preview.1.text"
            useDangerouslySetInnerHTML={true}/>
        );
      case 2:
        return (
          <Interpolate
            i18nKey="cases.preview.2.text"
            useDangerouslySetInnerHTML={true}/>
        );
      case 3:
        return (
          <Interpolate
            i18nKey="cases.preview.3.text"
            useDangerouslySetInnerHTML={true}/>
        );
    }
  };

  return (
    <div className={s.cases}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{t('cases.title')}</h2>
        </div>

        <div className={s.body}>
          <div className={s.text}>{renderTabContent(activeTab)}</div>

          <div className={s.button}>
            <SLink to="/cases" className={s.buttonElement}>
              <img src={require('./svg/more.svg')}/>
              {t('cases.more')}
            </SLink>
          </div>

          <div className={s.tabs}>
            <div className={s.inner}>
              <div className={activeTab === 1 ? s.active : s.tab} onClick={() => changeTab(1)}>
                <div className={s.icon}>
                  <img src={require('./svg/lock.svg')}/>
                </div>

                <div className={s.label}>
                  {t('cases.preview.1.title')}
                </div>
              </div>

              <div className={activeTab === 2 ? s.active : s.tab} onClick={() => changeTab(2)}>
                <div className={s.icon}>
                  <img src={require('./svg/contract.svg')}/>
                </div>

                <div className={s.label}>
                  {t('cases.preview.2.title')}
                </div>
              </div>

              <div className={activeTab === 3 ? s.active : s.tab} onClick={() => changeTab(3)}>
                <div className={s.icon}>
                  <img src={require('./svg/hammer.svg')}/>
                </div>

                <div className={s.label}>
                  {t('cases.preview.3.title')}
                </div>
              </div>
            </div>
          </div>
        </div>
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
