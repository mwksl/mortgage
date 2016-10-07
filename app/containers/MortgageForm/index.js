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
} from 'containers/HomePage/actions';

/* HomePage selectors */
import {
  selectLoanPeriod,
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
                  hintText="$250,000"
                  onChange={this.props.onChangePropertyValue}
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="Down Payment"
                  hintText="$40,000 or 16%"
                  onChange={this.props.onChangeDownPayment}
                />
              </li>
              <p>{`Loan Period: ${this.props.loanPeriod} years`}</p>
              <li>
                <Slider
                  min={10}
                  max={60}
                  step={10}
                  onChange={this.props.onChangeLoanPeriod}
                  value={this.props.loanPeriod}
                  style={{ padding: '0 10%' }}
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="APR"
                  defaultValue={this.props.averageRate}
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="Property Tax"
                  hintText="$6,400 or 2.56%"
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="Private Mortgage Insurance"
                  hintText="$2500"
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
  loanPeriod: React.PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangePropertyValue: (evt) => dispatch(changePropertyValue(evt.target.value)),
    onChangeLoanPeriod: (evt, value) => dispatch(changeLoanPeriodValue(value)),
    onChangeDownPayment: (evt) => dispatch(changeDownPaymentValue(evt.target.value)),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  loanPeriod: selectLoanPeriod(),
});

export default connect(mapStateToProps, mapDispatchToProps)(MortgageForm);
