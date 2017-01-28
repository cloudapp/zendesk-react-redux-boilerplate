import React, { Component } from 'react';
import { Link } from 'react-router';

import WelcomeMessage from '../components/WelcomeMessage.js';
import styles from './Home.scss';


export class HomeView extends Component {

  render () {
    return (
      <section className={ styles.container }>
        <WelcomeMessage />
        <Link to='/insert'>Insert Message</Link>
      </section>
    );
  }
}

export default HomeView
