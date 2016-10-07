/*
 * Homepage actions
 *
 */

import {
  ADJUST_LOAN_PERIOD_SLIDER,
  ADJUST_DOWN_PAYMENT_VALUE,
  ADJUST_PROPERTY_VALUE,
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
 * Change, and update the value of the loan period
 * @param {number} downPayment  The down payment on the property
 *
 * @return {object}             An action object with a type of ADJUST_DOWN_PAYMENT_VALUE
 *                              passing the loan period
 */
export function changeDownPaymentValue(downPayment) {
  return {
    type: ADJUST_DOWN_PAYMENT_VALUE,
    downPayment,
  };
}

/**
 * Change, and update the value of the property
 * @param {integer} propertyValue   The appraised value of the property entered
 *
 * @return {object}                 An action object with a type of ADJUST_LOAN_PERIOD_SLIDER
 *                                  passing the loan period
 */
export function changePropertyValue(propertyValue) {
  return {
    type: ADJUST_PROPERTY_VALUE,
    propertyValue,
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
export function ratesLoaded(rates) {
  return {
    type: LOAD_APR_RATE_SUCCESS,
    rates,
  };
}

export function ratesLoadedError(error) {
  return {
    type: LOAD_APR_RATE_FAILURE,
    error,
  };
}
