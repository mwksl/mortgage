import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

import { HomePage, mapDispatchToProps } from '../index';
import MortgageForm from 'containers/MortgageForm';

describe('<HomePage />', () => {
  it('should render the loading indicator when it\'s loading', () => {
    const renderedComponent = shallow(
      <HomePage loading />
    );
    expect(renderedComponent.contains(MortgageForm)).toEqual(true);
  });
});
