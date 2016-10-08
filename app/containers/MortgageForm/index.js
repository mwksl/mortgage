/*
 *
 * MortgageForm
 *
 * This hold the form elements for the calculator
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';

/* HomePage actions */
import {
  changePropertyValue,
  changeLoanPeriodValue,
  changeDownPaymentValue,
  changeAPR,
  changeInsurance,
  updateTaxRate,
  updatePrincipal,
} from 'containers/HomePage/actions';

/* HomePage selectors */
import {
  selectLoanPeriod,
  selectDownPaymentValue,
  selectPropertyValue,
} from 'containers/HomePage/selectors';

import {
  MuiThemeProvider,
  TextField,
  Slider,
} from 'material-ui';

export class MortgageForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.mortgageForm}>
        <MuiThemeProvider>
          <form>
            <ul className={styles.formList}>
              <li>
                <TextField
                  floatingLabelText="Property Value"
                  hintText="e.g. $250,000"
                  onChange={(evt) => this.props.onChangePropertyValue(evt, this.props.downPayment)}
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="Down Payment"
                  hintText="e.g. $50,000 or 20%"
                  onChange={(evt) => this.props.onChangeDownPayment(evt, this.props.propertyValue)}
                />
              </li>
              <p>{`Loan Period: ${this.props.loanPeriod} years`}</p>
              <li>
                <Slider
                  min={10}
                  max={60}
                  step={5}
                  defaultValue={15}
                  onChange={this.props.onChangeLoanPeriod}
                  value={this.props.loanPeriod}
                  style={{ padding: '0 10%' }}
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="APR"
                  defaultValue={this.props.averageRate}
                  onChange={this.props.onChangeAPR}
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="Property Tax"
                  hintText="e.g. $6,400 or 2.56%"
                  onChange={this.props.onChangeTax}
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="Private Mortgage Insurance"
                  hintText="e.g. $2500"
                  onChange={this.props.onChangeInsurance}
                />
              </li>
            </ul>
          </form>
        </MuiThemeProvider>
      </div>
    );
  }
}

MortgageForm.propTypes = {
  averageRate: React.PropTypes.number,
  onChangePropertyValue: React.PropTypes.func,
  onChangeLoanPeriod: React.PropTypes.func,
  onChangeDownPayment: React.PropTypes.func,
  onChangeAPR: React.PropTypes.func,
  onChangeTax: React.PropTypes.func,
  onChangeInsurance: React.PropTypes.func,
  loanPeriod: React.PropTypes.number,
  propertyValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  downPayment: React.PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangePropertyValue: (evt, downPayment) => {
      const propertyValue = evt.target.value.replace(/[^0-9.-]+/g, '');
      dispatch(changePropertyValue(propertyValue));
      dispatch(updatePrincipal(propertyValue, downPayment));
    },
    onChangeLoanPeriod: (evt, value) => dispatch(changeLoanPeriodValue(value)),
    onChangeDownPayment: (evt, propertyValue) => {
      let downPayment = evt.target.value;
      // If user enters a percentage sign
      if (downPayment.match(/%$/) || downPayment < 100) {
        const downPaymentCleaned = downPayment.replace(/%$/, '');
        downPayment = propertyValue * (downPaymentCleaned / 1200);
      // If a percentage is entered as a decimal
      } else if (downPayment < 1) {
        downPayment *= propertyValue;
      // Fallback to replace any non numberic values
      } else {
        downPayment = parseFloat(downPayment.replace(/[^0-9.-]+/g, ''));
      }
      dispatch(changeDownPaymentValue(downPayment));
      dispatch(updatePrincipal(propertyValue, downPayment));
    },
    onChangeAPR: (evt) => dispatch(changeAPR(evt.target.value)),
    onChangeTax: (evt) => {
      let taxRate = evt.target.value.replace(/[^0-9.-]+/g, '');
      if (taxRate > 100) {
        taxRate /= 12;
      } else if (taxRate < 10) { // Highest median tax rate is 2.7%, be realistic
        taxRate /= 1200;
      }
      dispatch(updateTaxRate(taxRate));
    },
    onChangeInsurance: (evt) => dispatch(changeInsurance(evt.target.value)),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  loanPeriod: selectLoanPeriod(),
  propertyValue: selectPropertyValue(),
  downPayment: selectDownPaymentValue(),
});

export default connect(mapStateToProps, mapDispatchToProps)(MortgageForm);
