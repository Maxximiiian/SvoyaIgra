import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({

  auth: authReducer,
  loading: loadingReducer,
  quest: questionReducer
  // category: categoryReducer

});

export default rootReducer;
