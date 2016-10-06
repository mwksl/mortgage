/*
 * HomeReducer
 *
 */

import {
  ADJUST_LOAN_PERIOD_SLIDER,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loanPeriod: 10,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADJUST_LOAN_PERIOD_SLIDER:
      return state
        .set('loanPeriod', action.loanPeriod);
    default:
      return state;
  }
}

export default appReducer;
