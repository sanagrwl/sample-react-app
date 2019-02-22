import { combineReducers, createStore} from 'redux';
import CounterReducer from './reducers/CounterReducer';

const rootReducer= combineReducers({
    counter: CounterReducer
});

const store = createStore(rootReducer);

export default store;
