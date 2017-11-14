import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const Roadmap = (props) => {
  const { t } = props;

  return (
    <div className={s.roadmap}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{t('roadmap.title')}</h2>
          <h4 className={s.subtitle}>{t('roadmap.subtitle')}</h4>
        </div>

        <div className={s.content}>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.active}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.1.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.1.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.label}>{t('roadmap.blocks.2.label')}</div>
              <div className={s.active}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.2.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.2.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.active}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.3.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.3.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.4.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.4.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.label}>{t('roadmap.blocks.5.label')}</div>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.5.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.5.what')}</div>
          </div>

          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.6.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.6.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.7.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.7.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.8.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.8.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.9.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.9.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.10.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.10.what')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Roadmap);
export default TranslatedComponent;
