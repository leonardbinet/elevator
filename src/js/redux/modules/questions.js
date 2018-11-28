import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const RECEIVE_QUESTIONS = 'app/QUESTIONS/RECEIVE_QUESTIONS';

// ------------------------------------
// Constants
// ------------------------------------

export const constants = {
  RECEIVE_QUESTIONS,
};

// ------------------------------------
// Actions
// ------------------------------------

export const receiveQuestions = createAction(RECEIVE_QUESTIONS);

export const actions = {
  receiveQuestions,
};


// ------------------------------------
// Reducers
// ------------------------------------

export const reducers = {
  [RECEIVE_QUESTIONS]: (state, action) => {
    return state.setIn(['questions'], action.payload);
  },
};

export const initialState = () => Map({ questions: [] });

export default handleActions(reducers, initialState());
