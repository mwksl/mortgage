/*
 * Homepage actions
 *
 */

import {
  ADJUST_LOAN_PERIOD_SLIDER,
} from './constants';

/**
 * Change, and update the value of the loan period
 * @param {integer} loanPeriod  The number of years the mortgage will be paid out over
 *
 * @return {object}             An action object with a type of ADJUST_LOAN_PERIOD_SLIDER
 *                              passing the loan period
 */
export function changeLoanPeriodValue(loanPeriod) {
  return {
    type: ADJUST_LOAN_PERIOD_SLIDER,
    loanPeriod,
  };
}
