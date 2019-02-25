import {
  LOAD_ALL_ESTATES,
  LOAD_ALL_ESTATES_SUCCESS,
  LOAD_ALL_ESTATES_ERROR,
  FILTER_ESTATES,
  FILTER_ESTATES_SUCCESS,
} from './constants';

export function loadEstates() {
  return {
    type: LOAD_ALL_ESTATES,
  };
}

export function estatesLoaded(estates) {
  return {
    type: LOAD_ALL_ESTATES_SUCCESS,
    estates,
  };
}

export function setFilter(filter) {
  return {
    type: FILTER_ESTATES,
    filter,
  };
}

export function setFilterSucess(filter) {
  return {
    type: FILTER_ESTATES_SUCCESS,
    filter,
  };
}

export function estatesLoadingError(error) {
  return {
    type: LOAD_ALL_ESTATES_ERROR,
    error,
  };
}
