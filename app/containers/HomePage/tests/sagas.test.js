/**
 * Tests for HomePage sagas
 */

import expect from 'expect';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { secretKeys } from '../../../secrets';

import { getRates, getRatesWatcher, zillowData } from '../sagas';

import { LOAD_APR_RATE_REQUEST } from '../constants';
import { ratesLoaded, ratesLoadedError } from '../actions';

import request from 'utils/request';

const ZWSID = secretKeys.zillowID;

describe('getRates Saga', () => {
  let getRatesGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getRatesGenerator = getRates();

    const requestURL = `http://www.zillow.com/webservice/GetRateSummary.htm?zws-id=${ZWSID}&output=json`;
    const callDescriptor = getRatesGenerator.next().value;
    expect(callDescriptor).toEqual(call(request, requestURL));
  });

  it('should dispatch the ratesLoaded action if it makes a successful request', () => {
    const response = {
      data: [{
        response: {},
      }],
    };
    const putDescriptor = getRatesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(ratesLoaded(response.data.response)));
  });

  it('should call the rateLoadingError action if it makes an unsuccessful request', () => {
    const response = {
      err: 'An error',
    };
    const putDescriptor = getRatesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(ratesLoadedError(response.err)));
  });

  describe('getRatesWatcher Saga', () => {
    const getRatesWatcherGenerator = getRatesWatcher();

    it('should watch for LOAD_APR_RATE_REQUEST actions', () => {
      const takeDescriptor = getRatesWatcherGenerator.next().value;
      expect(takeDescriptor).toEqual(take(LOAD_APR_RATE_REQUEST));
    });

    it('should invoke getRates sage on receiving the actions', () => {
      const callDescriptor = getRatesWatcherGenerator.next(put(LOAD_APR_RATE_REQUEST)).value;
      expect(callDescriptor).toEqual(call(getRates));
    });
  });

  describe('zillowData Saga', () => {
    const zillowDataSaga = zillowData();

    let forkDescriptor;

    it('should async fork the getRatesWatcher saga', () => {
      forkDescriptor = zillowDataSaga.next();
      expect(forkDescriptor.value).toEqual(fork(getRatesWatcher));
    });

    it('should yield until LOCATION_CHANGE action call', () => {
      const takeDescriptor = zillowDataSaga.next();
      expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
    });

    it('should finally cancel() the forked saga',
      function* zillowDataSagaCancel() {
        // reuse the open fork
        forkDescriptor = zillowDataSaga.next(put(LOCATION_CHANGE));
        expect(forkDescriptor.value).toEqual(cancel(forkDescriptor));
      }
    );
  });
});

