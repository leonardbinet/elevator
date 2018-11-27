
const questionsSelector = (state) => state.questionsReducers;
export const questionsListSelector = (state) => {
  const questionsState = questionsSelector(state)
  return questionsState.get('questions')
};
