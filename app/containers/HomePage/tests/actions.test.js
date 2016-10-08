import expect from 'expect';

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
} from '../constants';

import {
  changeLoanPeriodValue,
  changeDownPaymentValue,
  changePropertyValue,
  updateTaxRate,
  changeAPR,
  changeInsurance,
  updatePrincipal,
  updateCalculator,
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
  describe('changeDownPaymentValue', () => {
    it('should return the updated down payment', () => {
      const fixture = 50000;
      const expectedResult = {
        type: ADJUST_DOWN_PAYMENT_VALUE,
        downPayment: fixture,
      };

      expect(changeDownPaymentValue(fixture)).toEqual(expectedResult);
    });
  });
  describe('updateTaxRate', () => {
    it('should return the updated tax rate value', () => {
      const fixture = 0.0026;
      const expectedResult = {
        type: ADJUST_PROPERTY_TAX,
        taxRate: fixture,
      };

      expect(updateTaxRate(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeAPR', () => {
    it('should return the updated apr value', () => {
      const fixture = 0.0036;
      const expectedResult = {
        type: ADJUST_APR,
        APR: fixture,
      };

      expect(changeAPR(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeInsurance', () => {
    it('should return the updated insurance', () => {
      const fixture = 2500;
      const expectedResult = {
        type: ADJUST_INSURANCE,
        insuranceAmt: fixture,
      };

      expect(changeInsurance(fixture)).toEqual(expectedResult);
    });
  });
  describe('updatePrincipal', () => {
    it('should return the updated property value', () => {
      const fixture = 250000;
      const expectedResult = {
        type: UPDATE_PRINCIPAL,
        propertyValue: fixture,
        downPayment: undefined,
      };

      expect(updatePrincipal(fixture, undefined)).toEqual(expectedResult);
    });
    it('should return the updated down payment value', () => {
      const fixture = 50000;
      const expectedResult = {
        type: UPDATE_PRINCIPAL,
        propertyValue: undefined,
        downPayment: fixture,
      };

      expect(updatePrincipal(undefined, fixture)).toEqual(expectedResult);
    });
  });
  describe('updateCalculator', () => {
    it('should return the updated monthly rate value', () => {
      const fixture = 1350;
      const expectedResult = {
        type: UPDATE_CALCULATOR,
        monthlyRate: fixture,
        yearlyRate: undefined,
        taxes: undefined,
        insuranceAmt: undefined,
      };

      expect(updateCalculator(fixture, undefined, undefined, undefined)).toEqual(expectedResult);
    });
    it('should return the updated yearly rate value', () => {
      const fixture = 20000;
      const expectedResult = {
        type: UPDATE_CALCULATOR,
        monthlyRate: undefined,
        yearlyRate: fixture,
        taxes: undefined,
        insuranceAmt: undefined,
      };

      expect(updateCalculator(undefined, fixture, undefined, undefined)).toEqual(expectedResult);
    });
    it('should return the updated taxes', () => {
      const fixture = 500;
      const expectedResult = {
        type: UPDATE_CALCULATOR,
        monthlyRate: undefined,
        yearlyRate: undefined,
        taxes: fixture,
        insuranceAmt: undefined,
      };

      expect(updateCalculator(undefined, undefined, fixture, undefined)).toEqual(expectedResult);
    });
    it('should return the updated insurance value', () => {
      const fixture = 50;
      const expectedResult = {
        type: UPDATE_CALCULATOR,
        monthlyRate: undefined,
        yearlyRate: undefined,
        taxes: undefined,
        insuranceAmt: fixture,
      };

      expect(updateCalculator(undefined, undefined, undefined, fixture)).toEqual(expectedResult);
    });
  });
  describe('changePropertyValue', () => {
    it('should return the updated property value', () => {
      const fixture = 250000;
      const expectedResult = {
        type: ADJUST_PROPERTY_VALUE,
        propertyValue: fixture,
      };

      expect(changePropertyValue(fixture)).toEqual(expectedResult);
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
