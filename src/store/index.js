import { combineReducers, createStore} from 'redux';
import DashboardReducer from './reducers/DashboardReducer';

const rootReducer= combineReducers({
    dashboard: DashboardReducer
});

const store = createStore(rootReducer);

export default store;
