
const prestatairesSelector = (state) => state.prestatairesReducer;
export const prestatairesListSelector = (state) => {
  const prestatairesState = prestatairesSelector(state)
  return prestatairesState.get('prestataires')
};
