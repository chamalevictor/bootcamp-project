import RootReducer from './RootReducer';
import {createStore} from 'redux';

const store = createStore(RootReducer);

export default store;
