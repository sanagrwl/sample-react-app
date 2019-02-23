import { combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import RootSaga from '../sagas';
import DashboardReducer from './reducers/DashboardReducer';
import CategoriesReducer from './reducers/CategoriesReducer';


const rootReducer= combineReducers({
    dashboard: DashboardReducer,
    categories: CategoriesReducer
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(RootSaga)

export default store;
