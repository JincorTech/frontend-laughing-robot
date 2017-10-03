import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import { AppContainer } from 'react-hot-loader';
import { UserAgentProvider } from '@quentin-sommer/react-useragent';
import createHistory from 'history/createBrowserHistory';

import App from './containers/app/RootContainer';
import configureStore from './redux/configureStore';
import i18next from './utils/i18next/client';
import { initGA } from './utils/analytics';

const history = createHistory();

initGA(history);

/* Images
 * This space is reserved for images that are required by server rendering,
 * e.g. the favicon and any other images that need to be in the base HTML file.
 */
require('./assets/favicons/apple-touch-icon.png');
require('./assets/favicons/favicon-32x32.png');
require('./assets/favicons/favicon-16x16.png');
require('./assets/favicons/manifest.json');
require('./assets/favicons/safari-pinned-tab.svg');

// The root element of your app
const rootElement = document.getElementById('app');

// Get consts from express
const initialState = window.__INITIAL_STATE__;
const i18nextLocale = window.__i18n.locale;
const i18nextRes = window.__i18n.resources;
const ua = window.__UA__;

const store = configureStore(initialState, history);
i18next.changeLanguage(i18nextLocale);
i18next.addResourceBundle(i18nextLocale, 'common', i18nextRes, true);

const render = (Component) => {
  ReactDOM.render(
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <AppContainer>
          <UserAgentProvider ua={ua}>
            <ConnectedRouter history={history}>
              <Component />
            </ConnectedRouter>
          </UserAgentProvider>
        </AppContainer>
      </Provider>
    </I18nextProvider>,
    rootElement
  );
};

render(App);

if (module.hot) {
  // We need to re-require the app.
  module.hot.accept('./containers/app/RootContainer', () => {
    render(require('./containers/app/RootContainer').default);
  });
}
