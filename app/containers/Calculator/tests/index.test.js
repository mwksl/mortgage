import { Calculator, mapDispatchToProps } from '../index';

import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';

import {
  updateCalculator,
} from 'containers/HomePage/actions';

describe('<Calculator />', () => {
  it('should render the yearly rate', () => {
    const renderedComponent = mount(
      <Calculator yearlyRate={15000} />
    );
    expect(
      renderedComponent
        .text()
        .indexOf('Yearly Payment: $15000')
      ).toBeGreaterThan(-1);
  });
  it('should render the monthly rate', () => {
    const renderedComponent = mount(
      <Calculator monthlyRate={1360} />
    );
    expect(
      renderedComponent
        .text()
        .indexOf('Monthly Payment: $1360')
      ).toBeGreaterThan(-1);
  });

  it('should render the monthly principal', () => {
    const renderedComponent = mount(
      <Calculator monthlyPrincipal={850} />
    );
    expect(
      renderedComponent
        .text()
        .indexOf('Principal/Interest: $850')
      ).toBeGreaterThan(-1);
  });
  it('should render the taxes', () => {
    const renderedComponent = mount(
      <Calculator taxes={230} />
    );
    expect(
      renderedComponent
        .text()
        .indexOf('Taxes: $230')
      ).toBeGreaterThan(-1);
  });
  it('should render the insurance', () => {
    const renderedComponent = mount(
      <Calculator insuranceAmt={35} />
    );
    expect(
      renderedComponent
        .text()
        .indexOf('Insurance: $35')
      ).toBeGreaterThan(-1);
  });

  describe('mapDispatchToProps', () => {
    describe('onUpdateCalculator', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        expect(result.onUpdateCalculator).toExist();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        const monthly = 2030;
        const yearly = 17712;
        const taxes = 533;
        const insurance = 208;
        result.onUpdateCalculator(monthly, yearly, taxes, insurance);
        expect(dispatch).toHaveBeenCalledWith(updateCalculator(monthly, yearly, taxes, insurance));
      });
    });
  });
});
