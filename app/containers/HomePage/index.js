/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route

 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Helmet from 'react-helmet';

import {
  selectRates,
  selectLoanPeriod,
  selectPropertyValue,
  selectDownPaymentValue,
} from './selectors';

import { loadRates } from './actions';

import MortgageForm from 'containers/MortgageForm';
import Calculator from 'containers/Calculator';

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
        <Helmet
          title="Mortgage Calculator Home"
          meta={[
            { name: 'description', content: 'A React.js and Redux application for calculating mortgages' },
          ]}
        />
        <div className={styles.flexBox}>
          <div className={styles.formContainer}>
            <MortgageForm
              averageRate={this.props.rates.today.fifteenYearFixed}
            />
          </div>
          <div className={styles.calculatorContainer}>
            <Calculator
              propertyValue={this.props.propertyValue}
              downPayment={this.props.downPaymentValue}
              loanPeriod={this.props.loanPeriod}
              APR={this.props.rates.today.fifteenYearFixed}
            />
          </div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onLoadRates: React.PropTypes.func,
  propertyValue: React.PropTypes.number,
  downPaymentValue: React.PropTypes.number,
  loanPeriod: React.PropTypes.number,
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
  loanPeriod: selectLoanPeriod(),
  propertyValue: selectPropertyValue(),
  downPaymentValue: selectDownPaymentValue(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
