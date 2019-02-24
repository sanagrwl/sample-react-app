import { all } from 'redux-saga/effects'
import { watchGetRootCategories } from './CategoriesSaga';

export default function* rootSaga() {
    yield all([
        watchGetRootCategories()
    ])
  }