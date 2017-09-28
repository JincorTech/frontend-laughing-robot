import React from 'react';
import { translate } from 'react-i18next';
import { Helmet } from 'react-helmet';

const HelmetBase = (props) => {
  const { t, children } = props;

  /*
    В зависимости от выбранного языка (роута) нам нужно отдать картинку краулеру.
    Язык в объект i18next на клиенте выставиться не успевает, поэтому там всегда ENG.
    Сервер устанавливает локаль в серверный i18next и передает этот JSON на клиент
    и уже оттуда мы достаем строку и узнаем какой язык нам поставил сервер.
  */
  const getCrawlerImage = () => {
    switch (t('lang')) {
      case 'en':
        return require('../../../assets/images/crawler/en.png');
      case 'ru':
        return require('../../../assets/images/crawler/ru.png');
      default:
        return require('../../../assets/images/crawler/en.png');
    }
  };

  return (
    <Helmet>
      <meta charSet="utf-8" />
      {children}

      <meta itemProp="name" content={t('head.title')}/>
      <meta itemProp="description" content={t('head.description')}/>
      <meta itemProp="image" content={getCrawlerImage()}/>

      <meta name="twitter:card" content={getCrawlerImage()}/>
      <meta name="twitter:site" content="https://jincor.com"/>
      <meta name="twitter:title" content={t('head.title')}/>
      <meta name="twitter:description" content={t('head.description')}/>
      <meta name="twitter:creator" content="@jincor_ico"/>

      <meta name="twitter:image" content={getCrawlerImage()}/>
      <meta name="twitter:image:alt" content={t('head.description')}/>

      <meta property="og:title" content={t('head.title')}/>
      <meta property="og:description" content={t('head.description')}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://jincor.com"/>
      <meta property="og:image" content={getCrawlerImage()}/>
    </Helmet>
  );
};

const TranslatedComponent = translate()(HelmetBase);
export default TranslatedComponent;
