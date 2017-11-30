import 'babel-polyfill';
import path from 'path';
import Express from 'express';
import favicon from 'serve-favicon';
import sm from 'sitemap';
import i18next from 'i18next';
import Backend from 'i18next-node-fs-backend';
import serveStatic from 'serve-static';
import compression from 'compression';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import { UserAgentProvider } from '@quentin-sommer/react-useragent';
import request from 'request';
import render from './render';

import routes from 'routes';
import configureStore from 'redux/configureStore';

import App from 'containers/app/RootContainer';
import ErrorPage from 'components/common/ErrorPage';

const i18nextMiddleware = require('i18next-express-middleware');

const { PORT, APPLICATION_PORT } = process.env;
const app = new Express();
const port = PORT || APPLICATION_PORT || 3000;
const sitemap = sm.createSitemap({
  hostname: 'https://jincor.com',
  cacheTime: 600000,
  urls: [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/faq', changefreq: 'daily', priority: 0.7 },
    { url: '/whitepaper', changefreq: 'daily', priority: 0.5 },
    { url: '/business-summary', changefreq: 'daily', priority: 0.5 },
    { url: '/privacy-policy', changefreq: 'daily', priority: 0.5 },
    { url: '/terms-and-conditions', changefreq: 'daily', priority: 0.5 }
  ]
});

// gzip
app.use(compression());

// Use this middleware to serve up static files built into dist
app.use('/dist', serveStatic(path.join(__dirname, '../dist')));
app.use('/static', serveStatic(path.join(__dirname, '/static')));
app.use('/locales', serveStatic(path.join(__dirname, '../locales')));

// Sitemap
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(sitemap.toString());
});

// i18next middleware
i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(Backend)
  .init({
    whitelist: ['en', 'ru'],
    fallbackLng: 'en',
    preload: ['en', 'ru'],
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ['path'],
      lookupCookie: 'i18next'
    },
    backend: {
      loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
      jsonIndent: 2
    }
  }, () => {
    i18nextMiddleware.addRoute(i18next, '/:lng', ['en', 'ru'], app, 'get', handleRender);
  });

app.use(i18nextMiddleware.handle(i18next));

app.use(favicon(__dirname + '/static/favicon.ico'));

// whitepaper
app.get('/whitepaper', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=whitepaper_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/whitepaper_jincor.pdf').pipe(res);
});

app.get('/:lang/whitepaper', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=whitepaper_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/whitepaper_jincor.pdf').pipe(res);
});

// tech paper
app.get('/technical-paper', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=technical_paper_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/technical_paper_jincor.pdf').pipe(res);
});

app.get('/:lang/technical-paper', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=technical_paper_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/technical_paper_jincor.pdf').pipe(res);
});

// brand resources
app.get('/brand-resources', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=brand_resources_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/brand_resources_jincor.pdf').pipe(res);
});

app.get('/:lang/brand-resources', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=brand_resources_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/brand_resources_jincor.pdf').pipe(res);
});

// terms & conditions
app.get('/agreement', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=terms_conditions_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/terms_and_conditions_jincor.pdf').pipe(res);
});

app.get('/:lang/agreement', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=terms_conditions_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/terms_and_conditions_jincor.pdf').pipe(res);
});

// token sale agreement
app.get('/token-sale-agreement', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=token_sale_agreement_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/token_sale_agreement_jincor.pdf').pipe(res);
});

app.get('/:lang/token-sale-agreement', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=token_sale_agreement_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/token_sale_agreement_jincor.pdf').pipe(res);
});

// business summary
app.get('/business-summary', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=business_summary_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/business_summary_jincor.pdf').pipe(res);
});

app.get('/:lang/business-summary', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=business_summary_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/business_summary_jincor.pdf').pipe(res);
});

// privacy policy
app.get('/privacy-policy', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=privacy_policy_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/privacy_policy_jincor.pdf').pipe(res);
});

app.get('/:lang/privacy-policy', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=privacy_policy_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/privacy_policy_jincor.pdf').pipe(res);
});

// contribution guide
app.get('/contribution-guide', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=contribution_guide_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/contribution_guide_jincor.pdf').pipe(res);
});

app.get('/:lang/contribution-guide', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=contribution_guide_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/contribution_guide_jincor.pdf').pipe(res);
});

// business profile
app.get('/business-profile', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=business_profile_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/business_profile_jincor.pdf').pipe(res);
});

app.get('/:lang/business-profile', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'filename=business_profile_jincor.pdf');
  request('https://s3.eu-west-2.amazonaws.com/jincor-ico/docs/business_profile_jincor.pdf').pipe(res);
});

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // This can come from the server somewhere if you want to pre-populate the
  // app's initial state.
  const initialState = {};
  const locale = req.locale;
  const resources = i18next.getResourceBundle(locale, 'common');
  const i18nextClient = { locale, resources };
  const i18nServer = i18next.cloneInstance();
  i18nServer.changeLanguage(locale);

  // Get user agent
  const ua = req.headers['user-agent'];

  // Create a new Redux store instance
  const store = configureStore(initialState);

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  // See react-router's Server Rendering section:
  // https://reacttraining.com/react-router/web/guides/server-rendering
  const matches = routes.reduce((matches, route) => {
    const { path } = route;
    const match = matchPath(req.url, { path, exact: true, strict: false });

    if (match) {
      const wc = route.component && route.component.WrappedComponent;

      matches.push({
        route,
        match,
        fetchData: (wc && wc.fetchData) || (() => Promise.resolve())
      });
    }

    return matches;
  }, []);

  // No matched route, render a 404 page.
  if (!matches.length) {
    res.status(404).send(render(<I18nextProvider i18n={i18nServer}><ErrorPage/></I18nextProvider>, finalState));
    return;
  }

  // Otherwise, there is a match, so render the provider and router context
  const component = (
    <I18nextProvider i18n={i18nServer}>
      <Provider store={store}>
        <UserAgentProvider ua={ua}>
          <StaticRouter context={{}} location={req.url}>
            <App />
          </StaticRouter>
        </UserAgentProvider>
      </Provider>
    </I18nextProvider>
  );

  // an array of fetchData promises.
  const fetchData = matches.map(match => {
    const { fetchData, ...rest } = match; // eslint-disable-line no-unused-vars

    // return fetch data Promise, excluding unnecessary fetchData method
    return match.fetchData({ store, ...rest });
  });

  // Execute the render only after all promises have been resolved.
  Promise
    .all(fetchData)
    .then(() => {
      const state = store.getState();
      res.status(200).send(render(component, state, i18nextClient, ua));
    });

}

app.listen(port, '0.0.0.0', (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`Application server mounted locally on port ${port}.`);
  }
});
