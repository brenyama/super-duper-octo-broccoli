import React, { Component } from 'react';
import styles from './App.css';

export default class App extends Component {
  render() {
    console.log(styles.container);
    return (
      <div className={styles.container}>HELLO WORLD IN REACT!!</div>
    );
  }
}