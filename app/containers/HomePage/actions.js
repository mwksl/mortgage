/*
 * Homepage actions
 *
 */

import {
  ADJUST_LOAN_PERIOD_SLIDER,
  LOAD_APR_RATE_REQUEST,
  LOAD_APR_RATE_SUCCESS,
  LOAD_APR_RATE_FAILURE,
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

/**
 * Load APR rates at a national average
 *
 * @return {object} An action object with a type of LOAD_APR_RATE_REQUEST
 */
export function loadRates() {
  return {
    type: LOAD_APR_RATE_REQUEST,
  };
}

/**
 * Dispatched when the rates are loaded by the request saga
 *
 * @param  {array}   rates      The Zillow rate data
 * @param  {integer} loanPeriod The current loan period
 *
 * @return {object}      An action object with a type of
 *                          LOAD_APR_RATE_SUCCESS passing
 *                          the loan rates
 */
export function ratesLoaded(rates, loanPeriod) {
  return {
    type: LOAD_APR_RATE_SUCCESS,
    rates,
    loanPeriod,
  };
}

export function ratesLoadedError(error) {
  return {
    type: LOAD_APR_RATE_FAILURE,
    error,
  };
}
