import { createSelector } from 'reselect';

const selectApp = state => state.get('app');

const selectRouter = state => state.get('router');

const makeSelectEstates = () =>
  createSelector(selectApp, globalState => globalState.get('estates'));

const makeSelectLoading = () =>
  createSelector(selectApp, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectApp, globalState => globalState.get('error'));

  const makeSelectFilter = () =>
  createSelector(selectApp, globalState => globalState.get('filter'));


export {
  selectApp,
  makeSelectEstates,
  makeSelectLoading,
  makeSelectError,
  selectRouter,
  makeSelectFilter,
};
