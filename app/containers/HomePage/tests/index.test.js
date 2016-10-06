import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import HomePage from '../index';
import MortgageForm from 'containers/MortgageForm';

describe('<HomePage />', () => {
  it('should render the MortgageForm', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(<MortgageForm />)).toEqual(true);
  });
});
