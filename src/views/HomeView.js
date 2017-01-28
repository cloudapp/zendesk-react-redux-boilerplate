import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { getMessage } from '../actions.message.js';

import styles from './HomeView.scss';

export class HomeView extends Component {

  componentDidMount() {
    this.props.getWelcomeMessage();
  }

  render () {
    return (
      <section className={ styles.welcome }>
        Random Welcome Message: { this.props.welcomeMessage }
      </section>
    );
  }
}

HomeView.propTypes = {
  getWelcomeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  welcomeMessage: state.welcomeMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getWelcomeMessage: dispatch(getMessage()),
})

HomeView.contextTypes = {
  store: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
