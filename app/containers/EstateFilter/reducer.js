import { fromJS } from 'immutable';

import {
  LOAD_ALL_ESTATES_SUCCESS,
  LOAD_ALL_ESTATES,
  LOAD_ALL_ESTATES_ERROR,
  FILTER_ESTATES_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  filter: {
    priceFrom: '',
    priceTo: '',
    squreFrom: '',
    squreTo: '',
    isHouse: false,
    isTownhouse: false,
    isAppartment: false,
    isRoom: false,
    isElite: false,
    isEuro: false,
    isRegular: false,
    isNothing: false,
  },
  estates: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_ESTATES:
      return state
        .set('loading', true)
        .set('error', false)
    case LOAD_ALL_ESTATES_SUCCESS:
      return state.set('loading', false).set('estates', action.estates);
    case LOAD_ALL_ESTATES_ERROR:
      return state.set('error', action.error).set('loading', false);
    case FILTER_ESTATES_SUCCESS:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}

export default appReducer;
