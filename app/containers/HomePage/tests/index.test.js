import expect from 'expect';
// import { shallow } from 'enzyme';
// import React from 'react';

import { mapDispatchToProps } from '../index';
import { loadRates } from '../actions';


describe('<HomePage />', () => {
  describe('mapDispatchToProps', () => {
    describe('onLoadRates', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoadRates).toExist();
      });

      it('should dispatch loadRates when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        result.onLoadRates();
        expect(dispatch).toHaveBeenCalledWith(loadRates());
      });
    });
  });
});
