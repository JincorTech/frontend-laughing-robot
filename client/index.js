import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';

import App from './containers/app/RootContainer';
import configureStore from './redux/configureStore';
import i18next from './utils/i18next/client';

const history = createHistory();

/* Images
 * This space is reserved for images that are required by server rendering,
 * e.g. the favicon and any other images that need to be in the base HTML file.
 */
require('./assets/favicon.png');

// The root element of your app
const rootElement = document.getElementById('app');

// Creates the Redux store based on the initial state passed down by the server
// rendering.
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, history);
i18next.changeLanguage(window.__i18n.locale);
i18next.addResourceBundle(window.__i18n.locale, 'common', window.__i18n.resources, true);

const render = (Component) => {
  ReactDOM.render(
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <AppContainer>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
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
