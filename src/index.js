import React from 'react';
import { render } from 'react-dom';
import { createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Root from './containers/Root.js';
import routes from './routes';
import ZAFClient from 'zendesk_app_framework_sdk';

var client = ZAFClient.init();

const rootElement = document.getElementById('root');

// Zendesk hosting does not allow for urls to be manipulated; we need this here.s
const memoryHistory = createMemoryHistory();

// client.invoke is some magical methods that is only available exists in the zendesk environment.
try {
  client.invoke('resize', {width: '600px', height: '320px'});
} catch(e) {
  console.log('cannot resize zendesk client when developing outside of zendesk');
}

const store = configureStore(window.__PRELOADED_STATE__);
const history = syncHistoryWithStore(memoryHistory, store);

render(
  <Root history={ history } routes={ routes } store={ store } />,
  rootElement
);

export { client, memoryHistory };
