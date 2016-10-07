/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectRates = () => createSelector(
  selectHome(),
  (homeState) => homeState.getIn(['APRData', 'rates'])
);

const selectLoanPeriod = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('loanPeriod')
);

const selectPropertyValue = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('propertyValue')
);

const selectDownPaymentValue = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('downPayment')
);

const selectAPR = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('APR')
);

const selectInsurance = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('insuranceAmt')
);

const selectPrincipal = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('principal')
);

const selectTaxRate = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('taxRate')
);

const selectMonthlyRate = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('monthlyRate')
);

const selectYearlyRate = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('yearlyRate')
);

const selectTaxes = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('taxes')
);

const selectMonthlyPrincipal = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('monthlyPrincipal')
);

export {
  selectHome,
  selectRates,
  selectPropertyValue,
  selectLoanPeriod,
  selectDownPaymentValue,
  selectAPR,
  selectInsurance,
  selectPrincipal,
  selectTaxRate,
  selectMonthlyRate,
  selectYearlyRate,
  selectTaxes,
  selectMonthlyPrincipal,
};
