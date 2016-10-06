import expect from 'expect';
import homeReducer from '../reducer';
import {
  changeLoanPeriodValue,
} from '../actions';
import { fromJS } from 'immutable';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      loanPeriod: 10,
      propertyValue: 0,
      APRData: fromJS({
        rates: false,
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeLoanPeriodValue action correctly', () => {
    const fixture = 20;
    const expectedResult = state.set('loanPeriod', 20);

    expect(homeReducer(state, changeLoanPeriodValue(fixture))).toEqual(expectedResult);
  });
});
