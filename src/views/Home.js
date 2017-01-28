import React, { Component } from 'react';
import { Link } from 'react-router';

import WelcomeMessage from '../components/WelcomeMessage.js';
import styles from './Home.scss';


export class HomeView extends Component {

  render () {
    return (
      <section className={ styles.container }>
        <WelcomeMessage />
        <Link className={ styles.toMessage } to='/insert'>Navigate to Insert Message</Link>
      </section>
    );
  }
}

export default HomeView
