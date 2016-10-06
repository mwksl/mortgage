/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages.
 */

import React from 'react';

import styles from './styles.css';

import Navigation from 'components/Navigation';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onClick
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.container}>
        <Navigation />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
