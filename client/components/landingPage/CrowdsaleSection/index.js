import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const CrowdsaleSection = (props) => {
  const { t } = props;

  return (
    <div className={s.crowdsale}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{t('crowdsale.title')}</h2>
          <h4 className={s.subtitle}>{t('crowdsale.subtitle')}</h4>
        </div>

        <div className={s.content}>
          <div className={s.text}>{t('crowdsale.text')}</div>
          <div className={s.blocks}>
            <div className={s.block}>
              <div className={s.val}>{t('crowdsale.blocks.1.val')}</div>
              <div className={s.label}>{t('crowdsale.blocks.1.label')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{t('crowdsale.blocks.2.val')}</div>
              <div className={s.label}>{t('crowdsale.blocks.2.label')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{t('crowdsale.blocks.3.val')}</div>
              <div className={s.label}>{t('crowdsale.blocks.3.label')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{t('crowdsale.blocks.4.val')}</div>
              <div className={s.label}>{t('crowdsale.blocks.4.label')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{t('crowdsale.blocks.5.val')}</div>
              <div className={s.label}>{t('crowdsale.blocks.5.label')}</div>
            </div>
            <div className={s.block}>
              <div className={s.val}>{t('crowdsale.blocks.6.val')}</div>
              <div className={s.label}>{t('crowdsale.blocks.6.label')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(CrowdsaleSection);
export default TranslatedComponent;
