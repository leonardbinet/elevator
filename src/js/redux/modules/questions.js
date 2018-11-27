import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import { questionsList } from './questionsMock'

const FETCH_QUESTIONS = 'app/QUESTIONS/FETCH_QUESTIONS';

// ------------------------------------
// Constants
// ------------------------------------

export const constants = {
  FETCH_QUESTIONS,
};

// ------------------------------------
// Actions
// ------------------------------------

export const fetchQuestions = createAction(FETCH_QUESTIONS, () => ({}));

export const actions = {
  fetchQuestions,
};


// ------------------------------------
// Reducers
// ------------------------------------

export const reducers = {
  [FETCH_QUESTIONS]: (state) => {
    // should make call to api
    return state.setIn(['questions'], questionsList);
  },
};

export const initialState = () => Map({ questions: [] });

export default handleActions(reducers, initialState());
