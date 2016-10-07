/*
 * HomeReducer
 *
 */

import {
  ADJUST_LOAN_PERIOD_SLIDER,
  ADJUST_DOWN_PAYMENT_VALUE,
  ADJUST_PROPERTY_VALUE,
  ADJUST_APR,
  ADJUST_PROPERTY_TAX,
  ADJUST_INSURANCE,
  UPDATE_PRINCIPAL,
  UPDATE_CALCULATOR,
  LOAD_APR_RATE_REQUEST,
  LOAD_APR_RATE_SUCCESS,
  LOAD_APR_RATE_FAILURE,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  loanPeriod: 10,
  propertyValue: 0,
  downPayment: 0,
  APR: 0,
  taxRate: 0,
  insuranceAmt: 0,
  principal: 0,
  monthlyPayment: 0,
  yearlyPayment: 0,
  tax: 0,
  monthlyPrincipal: 0,
  APRData: fromJS({
    rates: false,
  }),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_APR_RATE_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['APRData', 'rates'], false);
    case LOAD_APR_RATE_SUCCESS:
      return state
        .setIn(['APRData', 'rates'], action.rates)
        .set('loading', false);
    case LOAD_APR_RATE_FAILURE:
      return state
        .set('error', action.error)
        .set('loading', false);
    case ADJUST_LOAN_PERIOD_SLIDER:
      return state
        .set('loanPeriod', action.loanPeriod);
    case ADJUST_PROPERTY_VALUE:
      return state
        .set('propertyValue', parseFloat(action.propertyValue.replace(/\$|,/g, '')));
    case ADJUST_DOWN_PAYMENT_VALUE:
      return state
        .set('downPayment', action.downPayment);
    case ADJUST_APR:
      return state
        .set('APR', Number(action.APR));
    case ADJUST_INSURANCE:
      return state
        .set('insuranceAmt', Math.round(action.insuranceAmt.replace(/[^0-9.-]+/g, '') / 12));
    case ADJUST_PROPERTY_TAX:
      return state
        .set('taxRate', action.taxRate);
    case UPDATE_PRINCIPAL:
      return state
        .set('principal', action.propertyValue - action.downPayment);
    case UPDATE_CALCULATOR:
      return state
        .set('monthlyRate', action.monthlyRate + action.taxes + action.insuranceAmt)
        .set('yearlyRate', action.yearlyRate)
        .set('taxes', action.taxes)
        .set('monthlyPrincipal', action.monthlyRate);
    default:
      return state;
  }
}

export default appReducer;
