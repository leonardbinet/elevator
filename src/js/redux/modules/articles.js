import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

// import typeimport { create } from "domain";

import { exampleType } from "../../common/types/example";

const GET_EXAMPLE = "app/example/GET_EXAMPLE";
const UPDATE_EXAMPLE = "app/example/UPDATE_EXAMPLE";
const FETCH_CATEGORIES = "app/articles/categories"

export const constants = {
  GET_EXAMPLE,
  UPDATE_EXAMPLE,
  FETCH_CATEGORIES
};

// ------------------------------------
// Actions
// ------------------------------------
// export const getAwesomeCode = createAction(GET_EXAMPLE, () => ({}));
// export const updateExample = createAction(
//   UPDATE_EXAMPLE,
//   (result: exampleType) => ({ result })
// );
export const fetchCategories = createAction(FETCH_CATEGORIES, () => ({}));

export const actions = {
//  getAwesomeCode,
//  updateExample,
  fetchCategories
};

export const reducers = {
  // [UPDATE_EXAMPLE]: (state, { payload }) =>
  //   state.merge({
  //     ...payload
  //   }),
  [FETCH_CATEGORIES]: (state) => {
    // should make call to api
    const categories = [
      {
        name: 'Simple name',
        description: 'This is a category',
        articles: [
          {slug: 'ascenseur_cool', shortTitle: 'Cool stuff about elevators'},
          {slug: 'ascenseur_not_cool', shortTitle: 'Bad stuff about elevators'}
        ]
      }
    ]
    state.setIn(['categories'], categories)
    }
};

export const initialState = () =>
  Map({
    result: ""
  });

export default handleActions(reducers, initialState());
