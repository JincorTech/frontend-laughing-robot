import React from 'react';
import { translate } from 'react-i18next';
import s from './styles.scss';

const Media = (props) => {
  const { t } = props;

  return (
    <div className={s.media}>
      <div className={s.container}>
        <div className={s.text}>
          {t('media.text')}
        </div>

        <div className={s.logos}>
          <a
            href="http://irishtechnews.ie/business-showcase-jincor/"
            taget="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/irishtech.png')}/>
          </a>
          <a
            href="http://www.zerohedge.com/news/2017-10-10/can-lawyers-be-replaced-smart-contracts"
            target="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/zerohedge.png')}/>
          </a>
          <a
            href="https://www.cio.com/article/3231220/internet/smart-contracts-are-winning-over-tech-startups.html"
            target="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/cio.png')}/>
          </a>
          <a
            href="https://vc.ru/27269-cryptocurrency-for-business"
            target="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/vc.png')}/>
          </a>
          <a
            href="https://www.benzinga.com/news/contracts/17/10/10186829/are-smart-contracts-changing-how-we-do-business"
            target="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/benz.png')}/>
          </a>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Media);
export default TranslatedComponent;
