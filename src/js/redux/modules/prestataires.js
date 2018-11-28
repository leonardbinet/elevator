import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const RECEIVE_PRESTATAIRES = 'app/PRESTATAIRES/RECEIVE_PRESTATAIRES';

// ------------------------------------
// Constants
// ------------------------------------

export const constants = {
  RECEIVE_PRESTATAIRES,
};

// ------------------------------------
// Actions
// ------------------------------------

export const receivePrestataires = createAction(RECEIVE_PRESTATAIRES);

export const actions = {
  receivePrestataires,
};


// ------------------------------------
// Reducers
// ------------------------------------

export const reducers = {
  [RECEIVE_PRESTATAIRES]: (state, action) => {
    return state.setIn(['prestataires'], action.payload);
  },
};

export const initialState = () => Map({ prestataires: [] });

export default handleActions(reducers, initialState());
