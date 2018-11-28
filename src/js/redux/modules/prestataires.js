import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import { prestatairesList } from './prestatairesMock'

const FETCH_PRESTATAIRES = 'app/PRESTATAIRES/FETCH_PRESTATAIRES';

// ------------------------------------
// Constants
// ------------------------------------

export const constants = {
  FETCH_PRESTATAIRES,
};

// ------------------------------------
// Actions
// ------------------------------------

export const fetchPrestataires = createAction(FETCH_PRESTATAIRES, () => ({}));

export const actions = {
  fetchPrestataires,
};


// ------------------------------------
// Reducers
// ------------------------------------

export const reducers = {
  [FETCH_PRESTATAIRES]: (state) => {
    // should make call to api
    return state.setIn(['prestataires'], prestatairesList);
  },
};

export const initialState = () => Map({ prestataires: [] });

export default handleActions(reducers, initialState());
