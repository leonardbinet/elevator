import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import { articlesCategories } from './articlesMock'

const FETCH_CATEGORIES = 'app/ARTICLES/FETCH_CATEGORIES';

// ------------------------------------
// Constants
// ------------------------------------

export const constants = {
  FETCH_CATEGORIES,
};

// ------------------------------------
// Actions
// ------------------------------------

export const fetchCategories = createAction(FETCH_CATEGORIES, () => ({}));

export const actions = {
  fetchCategories,
};


// ------------------------------------
// Reducers
// ------------------------------------

export const reducers = {
  [FETCH_CATEGORIES]: (state) => {
    // should make call to api
    return state.setIn(['categories'], articlesCategories);
  },
};

export const initialState = () => Map({ categories: [] });

export default handleActions(reducers, initialState());
