// cache the main layout template with lodash
import { template } from 'lodash';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';

const { NODE_ENV } = process.env;
const compile = template(require('../client/assets/layouts/index.html'));
const env = NODE_ENV || 'development';

export default function render(component, initialState = {}, i18next, ua = null) {
  if (env === 'development') {
    global.ISOTools.refresh();
  }

  const assets = global.ISOTools.assets();
  const favicons = {
    apple: assets.assets['./client/assets/favicons/apple-touch-icon.png'],
    f32: assets.assets['./client/assets/favicons/favicon-32x32.png'],
    f16: assets.assets['./client/assets/favicons/favicon-16x16.png'],
    manifest: assets.assets['./client/assets/favicons/manifest.json'],
    tb: assets.assets['./client/assets/favicons/safari-pinned-tab.svg']
  };
  const vendorJs = assets.javascript.vendor;
  const appJs = assets.javascript.app;
  const html = renderToString(component);
  const helmet = Helmet.renderStatic();
  const vendorCss = assets.styles.vendor;
  const appCss = assets.styles.app;

  return compile(
    { html, helmet, favicons, vendorCss, appCss, vendorJs, appJs, initialState, i18next, ua }
  );
}
