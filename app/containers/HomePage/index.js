/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route

 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Helmet from 'react-helmet';

import MortgageForm from 'containers/MortgageForm';

import styles from './styles.css';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>
        <Helmet
          title="Mortgage Calculator Home"
          meta={[
            { name: 'description', content: 'A React.js and Redux application for calculating mortgages' },
          ]}
        />
        <div className={styles.container}>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <MortgageForm />
        </div>
      </article>
    );
  }
}
