
const articlesSelector = (state) => state.articlesReducers;
export const categoriesSelector = (state) => {
  const articlesState = articlesSelector(state)
  return articlesState.get('categories')
};
