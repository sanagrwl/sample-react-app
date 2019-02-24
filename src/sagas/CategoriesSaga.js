import { takeEvery, put, call } from 'redux-saga/effects';
import actions, {actionTypes} from '../actions/CategoriesActions';
import service from '../services/CategoriesService'

export function* getRootCategories() {    
    const data = yield call(service.getRootCategories)
    yield put(actions.getRootCatgoriesAPISuccess(data))
}

export function* watchGetRootCategories() {
    yield takeEvery(actionTypes.GET_ROOT_CATEGORIES, getRootCategories)
  }