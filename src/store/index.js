import { combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import RootSaga from '../sagas';
import CategoriesReducer from './reducers/CategoriesReducer';


const rootReducer= combineReducers({
    categories: CategoriesReducer
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(RootSaga)

export default store;
