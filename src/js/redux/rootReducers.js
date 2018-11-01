import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import articlesReducers from './modules/articles';

export default combineReducers({
  articlesReducers,
  routing,
});
