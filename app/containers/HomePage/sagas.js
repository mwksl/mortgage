/**
 * Gets the default mortgage rates from the Zillow API
 */

import ZillowId from 'utils/secrets';

import { take, fork, call, put, select, cancel } from 'redux-saga/effects';
import { selectLoanPeriod } from 'containers/HomePage/selectors';
import request from 'utils/request';

import { ratesLoaded, rateLoadedError } from './actions';
import { LOAD_APR_RATE_REQUEST } from './constants';
import { LOCATION_CHANGE } from 'react-router-redux';

/* Zillow response handler */
export function* getRates() {
  // Get national average rates
  const loanPeriod = yield select(selectLoanPeriod());
  const ZWSID = ZillowId;
  const requestURL = `http://www.zillow.com/webservice/GetRateSummary.htm?zws-id=${ZWSID}&output=json`;

  // Call our request helper (see 'utils/request')
  const rates = yield call(request, requestURL);

  if (!rates.err) {
    yield put(ratesLoaded(rates.data, loanPeriod));
  } else {
    yield put(rateLoadedError(rates.err));
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
