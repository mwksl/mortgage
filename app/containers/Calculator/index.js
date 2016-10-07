/*
 *
 * Calculator
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

import {
  MuiThemeProvider,
  Card,
  CardText,
} from 'material-ui';

export class Calculator extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.calculator}>
        <MuiThemeProvider>
          <Card>
            <CardText>
              <h1>${this.props.propertyValue}</h1>
              <h1>{this.props.downPayment}</h1>
              <h1>{this.props.loanPeriod} years</h1>
              <h1>{this.props.APR}</h1>
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

Calculator.propTypes = {
  propertyValue: React.PropTypes.number,
  downPayment: React.PropTypes.number,
  loanPeriod: React.PropTypes.number,
  APR: React.PropTypes.number,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}


export default connect(null, mapDispatchToProps)(Calculator);
