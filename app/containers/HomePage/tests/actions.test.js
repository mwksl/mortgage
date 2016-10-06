import expect from 'expect';

import {
  ADJUST_LOAN_PERIOD_SLIDER,
  LOAD_APR_RATE_REQUEST,
  LOAD_APR_RATE_SUCCESS,
  LOAD_APR_RATE_FAILURE,
} from '../constants';

import {
  changeLoanPeriodValue,
  loadRates,
  ratesLoaded,
  ratesLoadedError,
} from '../actions';

describe('Home Actions', () => {
  describe('adjustLoanPeriodSlider', () => {
    it('should return the correct number for the slider', () => {
      const fixture = 20;
      const expectedResult = {
        type: ADJUST_LOAN_PERIOD_SLIDER,
        loanPeriod: fixture,
      };

      expect(changeLoanPeriodValue(fixture)).toEqual(expectedResult);
    });
  });
  describe('loadRates', () => {
    it('should return the proper type for the API', () => {
      const expectedResult = {
        type: LOAD_APR_RATE_REQUEST,
      };

      expect(loadRates()).toEqual(expectedResult);
    });
  });
  describe('ratesLoadedSuccess', () => {
    it('should return the correct type and the passed rates', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_APR_RATE_SUCCESS,
        rates: fixture,
      };

      expect(ratesLoaded(fixture)).toEqual(expectedResult);
    });
  });
  describe('ratesLoadedError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_APR_RATE_FAILURE,
        error: fixture,
      };

      expect(ratesLoadedError(fixture)).toEqual(expectedResult);
    });
  });
});
