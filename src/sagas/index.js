import { all } from 'redux-saga/effects'
import { getAllRootCategories } from './CategoriesSaga';

export default function* rootSaga() {
    yield all([
        getAllRootCategories()
    ])
  }