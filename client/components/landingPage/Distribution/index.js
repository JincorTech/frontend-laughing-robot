import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const Distribution = (props) => {
  const { t } = props;

  return (
    <div className={s.distribution}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{t('distribution.title')}</h2>
        </div>

        <div className={s.content}>
          <div className={s.blocks}>
            <div className={s.block}>
              <div className={s.val}>4%</div>
              <div className={s.label}>{t('distribution.presale')}</div>
              <div className={s.progress}>
                <div className={s.filled} style={{ width: '4%' }}/>
              </div>
            </div>

            <div className={s.block}>
              <div className={s.val}>8%</div>
              <div className={s.label}>{t('distribution.incentives')}</div>
              <div className={s.progress}>
                <div className={s.filled} style={{ width: '8%' }}/>
              </div>
            </div>

            <div className={s.block}>
              <div className={s.val}>12%</div>
              <div className={s.label}>{t('distribution.team')}</div>
              <div className={s.progress}>
                <div className={s.filled} style={{ width: '12%' }}/>
              </div>
            </div>

            <div className={s.block}>
              <div className={s.val}>76%</div>
              <div className={s.label}>{t('distribution.crowdsale')}</div>
              <div className={s.progress}>
                <div className={s.filled} style={{ width: '76%' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Distribution);
export default TranslatedComponent;
