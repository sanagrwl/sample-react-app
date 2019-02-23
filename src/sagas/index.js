import { all } from 'redux-saga/effects'
import { getRootCategories } from './CategoriesSaga';

export default function* rootSaga() {
    yield all([
        getRootCategories()
    ])
  }