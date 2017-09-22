import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import { Switch, Route } from 'react-router-dom';
import NLink from '../../components/common/NLink';
import routes from '../../routes';

import { changeLanguage } from '../../redux/modules/app/i18next';

class RootContainer extends Component {
  render() {
    const { t, changeLanguage } = this.props;
    const { pathname } = this.props.location;

    return (
      <div>
        <div>
          <NLink href="/">HomeEN</NLink>
          <NLink href="/about">AboutEN</NLink>
        </div>
        <div>
          change language:
          <button onClick={() => changeLanguage({ lang: 'ru', pathname })}>ru</button>
          <button onClick={() => changeLanguage({ lang: 'en', pathname })}>en</button>
        </div>
        <div>test locale: {t('content.text')}</div>
        <Switch>
          {routes.map(route => <Route key={route.path} {...route} />)}
        </Switch>
      </div>
    );
  }
}

const TranslatedComponent = translate('common')(RootContainer);
const WithRouterComponent = withRouter(TranslatedComponent);
export default connect(
  () => ({}),
  {
    changeLanguage
  }
)(WithRouterComponent);
