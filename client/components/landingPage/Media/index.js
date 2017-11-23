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
            href="https://www.entrepreneur.com/article/305075/"
            target="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/entrepreneur.png')}/>
          </a>
          <a
            href="https://www.forbes.com/sites/rogeraitken/2017/11/21/smart-contracts-on-the-blockchain-can-businesses-reap-the-benefits/#d5f431010744"
            target="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/forbes.png')}/>
          </a>
          <a
            href="https://www.cio.com/article/3231220/internet/smart-contracts-are-winning-over-tech-startups.html"
            target="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/cio.png')}/>
          </a>
          <a
            href="https://youtu.be/bI7qxga2djQ?t=3m27s"
            target="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/cnbc.png')}/>
          </a>
          <a
            href="https://cointelegraph.com/news/smart-business-to-business-payments-could-explode-blockchain-adoption"
            target="_blank"
            rel="nofollow"
            className={s.logo}>
            <img src={require('../../../assets/images/media/cointelegraph.png')}/>
          </a>
        </div>
      </div>
    </div>
  );
};

const TranslatedComponent = translate()(Media);
export default TranslatedComponent;
