import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// make root reducers from all reducer
export default combineReducers({
    count: counterReducer
});