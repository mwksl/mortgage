/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route

 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Helmet from 'react-helmet';

import { selectRates } from './selectors';

import { loadRates } from './actions';

import MortgageForm from 'containers/MortgageForm';

import styles from './styles.css';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /**
   * Initial loading of mortgage rates from Zillow
   */
  componentDidMount() {
    this.props.onLoadRates();
  }

  render() {
    return (
      <article>
      {console.log(this.props.rates)}
        <Helmet
          title="Mortgage Calculator Home"
          meta={[
            { name: 'description', content: 'A React.js and Redux application for calculating mortgages' },
          ]}
        />
        <div className={styles.container}>
          <MortgageForm
            averageRate={this.props.rates.today.fifteenYearFixed}
          />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onLoadRates: React.PropTypes.func,
  rates: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadRates: () => dispatch(loadRates()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  rates: selectRates(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
