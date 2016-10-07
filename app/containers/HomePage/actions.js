/*
 * Homepage actions
 *
 */

import {
  ADJUST_LOAN_PERIOD_SLIDER,
  ADJUST_DOWN_PAYMENT_VALUE,
  ADJUST_PROPERTY_VALUE,
  ADJUST_APR,
  ADJUST_PROPERTY_TAX,
  ADJUST_INSURANCE,
  LOAD_APR_RATE_REQUEST,
  LOAD_APR_RATE_SUCCESS,
  LOAD_APR_RATE_FAILURE,
  UPDATE_PRINCIPAL,
  UPDATE_CALCULATOR,
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
 * Change, and update the APR
 * @param {integer} APR   The APR rate of the mortgage
 *
 * @return {object}       An action object with a type of ADJUST_LOAN_PERIOD_SLIDER
 *                        passing the loan period
 */
export function updateTaxRate(taxRate) {
  return {
    type: ADJUST_PROPERTY_TAX,
    taxRate,
  };
}

/**
 * Change, and update the Tax Rate
 * @param {integer} taxRate   The property tax rate
 *
 * @return {object}           An action object with a type of ADJUST_TAX_R
 *                            passing the tax rate
 */
export function changeAPR(APR) {
  return {
    type: ADJUST_APR,
    APR,
  };
}

/**
 * Change, and update the Insurance
 * @param {integer} insuranceAmt   The amount paid for private mortgage insurance
 *
 * @return {object}                An action object with a type of ADJUST_INSURANCE
 *                                 passing the tax rate
 */
export function changeInsurance(insuranceAmt) {
  return {
    type: ADJUST_INSURANCE,
    insuranceAmt,
  };
}

/**
 * Update the principal value on the loan
 * @param {integer} propertyValue The value of the property the mortgage is for
 * @param {integer} downPayment   The down payment on the property
 *
 * @return {object}               An action object with a type of UPDATE_PRINCIPAL
 */
export function updatePrincipal(propertyValue, downPayment) {
  return {
    type: UPDATE_PRINCIPAL,
    propertyValue,
    downPayment,
  };
}

/**
 * Update the calculator with the proper values
 * @param {integer} monthlyRate The monthly payments on the mortgage
 * @param {integer} yearlyRate  The yearly payments on the mortgage
 * @param {number}  taxes       The monthly tax payments
 *
 * @return {object}               An action object with a type of UPDATE_CALCULATOR
 */
export function updateCalculator(monthlyRate, yearlyRate, taxes, insuranceAmt) {
  return {
    type: UPDATE_CALCULATOR,
    monthlyRate,
    yearlyRate,
    taxes,
    insuranceAmt,
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
