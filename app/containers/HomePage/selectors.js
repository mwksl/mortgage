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

export {
  selectHome,
  selectRates,
  selectPropertyValue,
  selectLoanPeriod,
  selectDownPaymentValue,
};
