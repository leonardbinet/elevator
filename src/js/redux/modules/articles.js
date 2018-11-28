import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';


const RECEIVE_CATEGORIES = 'app/ARTICLES/RECEIVE_CATEGORIES';

// ------------------------------------
// Constants
// ------------------------------------

export const constants = {
  RECEIVE_CATEGORIES,
};

// ------------------------------------
// Actions
// ------------------------------------

export const receiveCategories = createAction(RECEIVE_CATEGORIES);

export const actions = {
  receiveCategories,
};


// ------------------------------------
// Reducers
// ------------------------------------

export const reducers = {
  [RECEIVE_CATEGORIES]: (state, action) => {
    return state.setIn(['categories'], action.payload);
  },
};

export const initialState = () => Map({ categories: [] });

export default handleActions(reducers, initialState());
