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
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.july2017.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.july2017.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.label}>{t('roadmap.blocks.august2017.label')}</div>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.august2017.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.august2017.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.october2017.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.october2017.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.label}>{t('roadmap.blocks.november2017.label')}</div>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.november2017.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.november2017.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.december2017.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.december2017.what')}</div>
          </div>

          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.january2018.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.january2018.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.april2018.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.april2018.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.june2018.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.june2018.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.q32018.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.q32018.what')}</div>
          </div>
          <div className={s.block}>
            <div className={s.line}>
              <div className={s.point}/>
            </div>
            <div className={s.date}>{t('roadmap.blocks.q42018.date')}</div>
            <div className={s.what}>{t('roadmap.blocks.q42018.what')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Roadmap);
export default TranslatedComponent;
