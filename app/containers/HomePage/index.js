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
  selectPropertyValue,
  selectLoanPeriod,
  selectPrincipal,
  selectAPR,
  selectTaxRate,
  selectInsurance,
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
    // Stub out for testing and errors
    let rates = 3.25;
    if (this.props.rates || this.props.rates.today) {
      rates = this.props.rates.today.fifteenYearFixed;
    }
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
              averageRate={Number(rates)}
            />
          </div>
          <div className={styles.calculatorContainer}>
            <Calculator
              propertyValue={this.props.propertyValue}
              principal={this.props.principal}
              loanPeriod={this.props.loanPeriod}
              APR={this.props.apr ? this.props.apr : rates}
              taxRate={this.props.taxRate}
              insuranceAmt={this.props.insuranceAmt}
            />
          </div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onLoadRates: React.PropTypes.func,
  propertyValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  principal: React.PropTypes.number,
  loanPeriod: React.PropTypes.number,
  apr: React.PropTypes.number,
  insuranceAmt: React.PropTypes.number,
  taxRate: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
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
  propertyValue: selectPropertyValue(),
  loanPeriod: selectLoanPeriod(),
  principal: selectPrincipal(),
  apr: selectAPR(),
  insuranceAmt: selectInsurance(),
  taxRate: selectTaxRate(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
