import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/CategoriesActions';
import * as service from '../services/CategoriesService'

export function* getRootCategories() {    
    const data = yield call(service.getRootCategories)
    yield put(actions.getRootCatgoriesAPISuccess(data))
}

export function* watchIncrementAsync() {
    yield takeEvery(actions.GET_ROOT_CATEGORIES, getRootCategories)
  }