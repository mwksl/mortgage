/*
 *
 * Calculator
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';

import {
  MuiThemeProvider,
  Card,
  CardText,
  Subheader,
} from 'material-ui';

import {
  updateCalculator,
} from 'containers/HomePage/actions';

import {
  selectMonthlyRate,
  selectYearlyRate,
  selectTaxes,
  selectMonthlyPrincipal,
} from 'containers/HomePage/selectors';

import { calculateMonthlyPayment, adjustForPropertyTax } from 'utils/mortgageUtils';

import { VictoryPie } from 'victory-pie';

export class Calculator extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps() {
    const propertyValue = this.props.propertyValue;
    const principal = this.props.principal;
    const interest = this.props.APR / 1200;
    const payments = this.props.loanPeriod * 12;
    const taxRate = this.props.taxRate;
    const insurance = this.props.insuranceAmt;

    const taxes = Math.round(adjustForPropertyTax(propertyValue, taxRate));
    const monthly = calculateMonthlyPayment(principal, interest, payments);
    const yearly = monthly * 12;

    this.props.onUpdateCalculator(monthly, yearly, taxes, insurance);
  }
  render() {
    return (
      <div className={styles.calculator}>
        <MuiThemeProvider>
          <Card>
            <CardText>
              <Subheader>Yearly Payment: ${this.props.yearlyRate}</Subheader>
              <h3>Monthly Payment: ${this.props.monthlyRate}</h3>
              <div className={styles.pieContainer} >
                <VictoryPie
                  data={[
                    { x: 'Principal', y: this.props.monthlyPrincipal },
                    { x: 'Taxes', y: this.props.taxes },
                    { x: 'Insurance', y: this.props.insuranceAmt },
                  ]}
                  labelRadius={this.props.taxRate ? 80 : null}
                  style={{
                    labels: {
                      fontSize: 20,
                      fill: 'white',
                    },
                  }}
                />
              </div>
              <Subheader>Your Monthly Breakdown</Subheader>
              <p>Principal/Interest: ${this.props.monthlyPrincipal}</p>
              <p>Taxes: ${this.props.taxes}</p>
              <p>Insurance: ${this.props.insuranceAmt}</p>
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

Calculator.propTypes = {
  propertyValue: React.PropTypes.number,
  taxRate: React.PropTypes.number,
  principal: React.PropTypes.number,
  loanPeriod: React.PropTypes.number,
  onUpdateCalculator: React.PropTypes.func,
  APR: React.PropTypes.number,
  insuranceAmt: React.PropTypes.number,
  yearlyRate: React.PropTypes.number,
  monthlyRate: React.PropTypes.number,
  taxes: React.PropTypes.number,
  monthlyPrincipal: React.PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateCalculator: (monthly, yearly, taxes, insurance) => dispatch(updateCalculator(monthly, yearly, taxes, insurance)),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  monthlyRate: selectMonthlyRate(),
  yearlyRate: selectYearlyRate(),
  taxes: selectTaxes(),
  monthlyPrincipal: selectMonthlyPrincipal(),
});


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
