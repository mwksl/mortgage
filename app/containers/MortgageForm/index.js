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
  changeLoanPeriodValue,
} from 'containers/HomePage/actions';

/* HomePage selectors */
import {
  selectLoanPeriod,
} from 'containers/HomePage/selectors';

import {
  MuiThemeProvider,
  TextField,
  Subheader,
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
                  hintText="$426,000"
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="Down Payment"
                  hintText="$83,000"
                />
              </li>
              <Subheader>{`Loan Period: ${this.props.loanPeriod} years`}</Subheader>
              <li>
                <Slider
                  min={10}
                  max={60}
                  step={10}
                  onChange={this.props.onChangeLoanPeriod}
                  value={this.props.loanPeriod}
                />
              </li>
              <li>
                <TextField
                  floatingLabelText="APR"
                  defaultValue="Default Value"
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
  onChangeLoanPeriod: React.PropTypes.func,
  loanPeriod: React.PropTypes.number,
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeLoanPeriod: (evt, value) => {
      dispatch(changeLoanPeriodValue(value));
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  loanPeriod: selectLoanPeriod(),
});

export default connect(mapStateToProps, mapDispatchToProps)(MortgageForm);
