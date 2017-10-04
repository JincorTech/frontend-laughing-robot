import React from 'react';
import { translate } from 'react-i18next';
import { Helmet } from 'react-helmet';

const HelmetBase = (props) => {
  const { t, children } = props;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      {children}

      <meta itemProp="name" content={t('head.title')}/>
      <meta itemProp="description" content={t('head.description')}/>
      <meta itemProp="image" content={t('head.ogimage')}/>

      <meta name="twitter:card" content={t('head.ogimage')}/>
      <meta name="twitter:site" content="https://jincor.com"/>
      <meta name="twitter:title" content={t('head.title')}/>
      <meta name="twitter:description" content={t('head.description')}/>
      <meta name="twitter:creator" content="@jincor_ico"/>

      <meta name="twitter:image" content={t('head.ogimage')}/>
      <meta name="twitter:image:alt" content={t('head.description')}/>

      <meta property="og:title" content={t('head.title')}/>
      <meta property="og:description" content={t('head.description')}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://jincor.com"/>
      <meta property="og:image" content={t('head.ogimage')}/>
    </Helmet>
  );
};

const TranslatedComponent = translate()(HelmetBase);
export default TranslatedComponent;
