import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends Component {

  createElement(Component, props) {
    return <Component { ...this.props.store } />;
  }

  get content() {
    return (
      <Router history={ this.props.history } >
        { this.props.routes }
      </Router>
    );
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <div style={{ height: '100%' }}>
          { this.content }
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  routes: React.PropTypes.element.isRequired,
  store: React.PropTypes.object.isRequired
};
