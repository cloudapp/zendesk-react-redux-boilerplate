import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Root from './containers/Root.js';
import routes from './routes';
import ZAFClient from 'zendesk_app_framework_sdk';

var client = ZAFClient.init();

const rootElement = document.getElementById('root');

// client.invoke is some magical methods that is only available exists in the zendesk environment.
try {
  client.invoke('resize', {width: '600px', height: '320px'});
} catch(e) {
  console.log('cannot resize zendesk client when developing outside of zendesk');
}

const store = configureStore(window.__PRELOADED_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root history={ history } routes={ routes } store={ store } />,
  rootElement
);

export { client };
