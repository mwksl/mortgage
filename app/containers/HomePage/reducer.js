/*
 * HomeReducer
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
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  loanPeriod: 10,
  propertyValue: 0,
  downPayment: 0,
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
        .set('propertyValue', action.propertyValue);
    case ADJUST_DOWN_PAYMENT_VALUE:
      return state
        .set('downPayment', action.downPayment);
    default:
      return state;
  }
}

export default appReducer;
