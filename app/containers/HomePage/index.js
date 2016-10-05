/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route

 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

import MortgageForm from 'containers/MortgageForm';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.container}>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <MortgageForm />
      </div>
    );
  }
}
