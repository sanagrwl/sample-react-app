import { take, put, call } from 'redux-saga/effects';
import * as actions from '../actions/CategoriesActions';
import service from '../services/CategoriesService'

export function* getAllRootCategories() {
    while (true) {
        yield take(actions.GET_ROOT_CATEGORIES)
        const data = yield call(service.getRootCategories)
        yield put(actions.getRootCatgoriesAPISuccess(data))
      }
}