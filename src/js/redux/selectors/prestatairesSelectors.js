
const prestatairesSelector = (state) => state.prestatairesReducers;

export const prestatairesListSelector = (state) => {
  const prestatairesState = prestatairesSelector(state)
  return prestatairesState.get('prestataires')
};
