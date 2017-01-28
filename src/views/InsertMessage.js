import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import { insertMessage } from '../actions/messages.js';

import styles from './InsertMessage.scss';

export class InsertMessageView extends Component {

  render () {
    return (
      <div className={ styles.container }>
        <Link className={ styles.toHome } to='/'>Go Home</Link>
        <div className={ styles.instructions }>Press the button to insert into the ticket editor.</div>
        <button className={ styles.button } onClick={ this.props.insertMessage }>
          Click to insert message
        </button>
        { this.props.hasSuccess &&
          <div className={ styles.success }>{ this.props.resultMessage }</div>
        }
        { !this.props.hasSuccess && 
          <div className={ styles.failure }>{ this.props.resultMessage }</div>
        }
      </div>
    );
  }
}

InsertMessageView.propTypes = {
  insertMessage: PropTypes.func,
  resultMessage: PropTypes.string,
  hasSuccess: PropTypes.bool,
};

const mapStateToProps = state => ({
  resultMessage: state.successMessage,
  hasSuccess: state.hasSuccess,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  insertMessage: () => dispatch(insertMessage('hello world')),
})

InsertMessageView.contextTypes = {
  store: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(InsertMessageView);
