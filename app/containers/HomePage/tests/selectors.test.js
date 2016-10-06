import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectHome,
  selectLoanPeriod,
} from '../selectors';

describe('selectGlobal', () => {
  const globalSelector = selectHome();
  it('should select the HomePage state', () => {
    const homeState = fromJS({});
    const mockedState = fromJS({
      home: homeState,
    });
    expect(globalSelector(mockedState)).toEqual(homeState);
  });
});

describe('selectLoanPeriod', () => {
  const currentUserSelector = selectLoanPeriod();
  it('should select the current loan period in years', () => {
    const loanPeriod = 20;
    const mockedState = fromJS({
      home: {
        loanPeriod,
      },
    });
    expect(currentUserSelector(mockedState)).toEqual(loanPeriod);
  });
});
