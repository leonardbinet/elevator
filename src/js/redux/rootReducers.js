import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import articlesReducers from './modules/articles';
import questionsReducers from './modules/questions';
import prestatairesReducers from './modules/prestataires';

export default combineReducers({
  articlesReducers,
  questionsReducers,
  prestatairesReducers,
  routing,
});
