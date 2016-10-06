/*
 * Test the MortgageForm
 */

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { MortgageForm, mapDispatchToProps } from '../index';
import { changeLoanPeriodValue } from '../../HomePage/actions';

describe('<MortgageForm />', () => {
  it('Should render 6 inputs for the calculator as a list', () => {
    const renderedComponent = shallow(
      <MortgageForm />
    );
    expect(renderedComponent.find('li').length).toEqual(6);
  });

  describe('matchDispatchToProps', () => {
    describe('onChangeLoanPeriod', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeLoanPeriod).toExist();
      });

      it('should dispatch changeLoanPeriod when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        const loanPeriod = 20;
        result.onChangeLoanPeriod(event, loanPeriod);
        expect(dispatch).toHaveBeenCalledWith(changeLoanPeriodValue(loanPeriod));
      });
    });
  });
});

