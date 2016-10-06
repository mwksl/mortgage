import { MortgageForm } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<MortgageForm />', () => {
  it('Should render 4 inputs as a list', () => {
    const renderedComponent = shallow(
      <MortgageForm />
    );
    expect(renderedComponent.find('li').length).toEqual(4);
  });
});
