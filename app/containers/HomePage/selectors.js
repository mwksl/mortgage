/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectLoanPeriod = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('loanPeriod')
);

export {
  selectHome,
  selectLoanPeriod,
};
