/**
 * Gets the default mortgage rates from the Zillow API
 */

import { secretKeys } from '../../secrets';

import { take, fork, call, put, cancel } from 'redux-saga/effects';
// import { selectLoanPeriod } from 'containers/HomePage/selectors';
import request from 'utils/request';

import { ratesLoaded, ratesLoadedError } from './actions';
import { LOAD_APR_RATE_REQUEST } from './constants';
import { LOCATION_CHANGE } from 'react-router-redux';

/* Zillow response handler */
export function* getRates() {
  // Get national average rates
  const ZWSID = secretKeys.zillowID;
  // Use crossorigin.me to prevent a CORS error while testing
  const requestURL = `https://crossorigin.me/http://www.zillow.com/webservice/GetRateSummary.htm?zws-id=${ZWSID}&output=json`;

  // Call our request helper (see 'utils/request')
  const rates = yield call(request, requestURL);

  if (!rates.err) {
    yield put(ratesLoaded(rates.data.response));
  } else {
    yield put(ratesLoadedError(rates.err));
  }
}

/**
 * Watches for LOAD_APR_RATE_REQUEST action and calls handler
 */
export function* getRatesWatcher() {
  while (yield take(LOAD_APR_RATE_REQUEST)) {
    yield call(getRates);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* zillowData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getRatesWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default[
  zillowData,
];
