import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

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
    const categories = [
      {
        name: 'Simple name',
        description: 'This is a category',
        articles: [
          { slug: 'ascenseur_cool', shortTitle: 'Cool stuff about elevators' },
          {
            slug: 'ascenseur_not_cool',
            shortTitle: 'Bad stuff about elevators',
          },
        ],
      },
    ];
    return state.setIn(['categories'], categories);
  },
};

export const initialState = () => Map({ categories: [] });

export default handleActions(reducers, initialState());
