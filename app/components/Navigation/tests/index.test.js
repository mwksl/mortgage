import Navigation from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import AppBar from 'material-ui/AppBar';

describe('<Navigation />', () => {
  it('should render <AppBar />', () => {
    const renderedComponent = shallow(
      <Navigation />
    );
    expect(renderedComponent.find(AppBar).length).toEqual(1);
  });
});
