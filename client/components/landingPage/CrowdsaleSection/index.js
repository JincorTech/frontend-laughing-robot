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
          <div className={s.table}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr className={s.row}><td>{t('crowdsale.table.1row.1ceil')}</td><td>{t('crowdsale.table.1row.2ceil')}</td></tr>
                <tr className={s.row}><td>{t('crowdsale.table.2row.1ceil')}</td><td>{t('crowdsale.table.2row.2ceil')}</td></tr>
                <tr className={s.row}><td>{t('crowdsale.table.3row.1ceil')}</td><td>{t('crowdsale.table.3row.2ceil')}</td></tr>
                <tr className={s.row}><td>{t('crowdsale.table.4row.1ceil')}</td><td>{t('crowdsale.table.4row.2ceil')}</td></tr>
                <tr className={s.row}><td>{t('crowdsale.table.5row.1ceil')}</td><td>{t('crowdsale.table.5row.2ceil')}</td></tr>
                <tr className={s.row}><td>{t('crowdsale.table.6row.1ceil')}</td><td>{t('crowdsale.table.6row.2ceil')}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={s.distribution}>
          <h4 className={s.distTitle}>{t('crowdsale.distribution.title')}</h4>
          <div className={s.distArea}>
            <div className={s.item}>
              <div className={s.number}>{t('crowdsale.distribution.1col.num')}</div>
              <div className={s.description}>{t('crowdsale.distribution.1col.desc')}</div>
            </div>
            <div className={s.item}>
              <div className={s.number}>{t('crowdsale.distribution.2col.num')}</div>
              <div className={s.description}>{t('crowdsale.distribution.2col.desc')}</div>
            </div>
            <div className={s.item}>
              <div className={s.number}>{t('crowdsale.distribution.3col.num')}</div>
              <div className={s.description}>{t('crowdsale.distribution.3col.desc')}</div>
            </div>
            <div className={s.item}>
              <div className={s.number}>{t('crowdsale.distribution.4col.num')}</div>
              <div className={s.description}>{t('crowdsale.distribution.4col.desc')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(CrowdsaleSection);
export default TranslatedComponent;
