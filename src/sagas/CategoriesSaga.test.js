import { testSaga } from 'redux-saga-test-plan';
import * as service from '../services/CategoriesService'
import * as actions from '../actions/CategoriesActions';
import {getRootCategories} from './CategoriesSaga';

describe('Categories Saga', () => {
  it('get all root categories', () => {
    const payload = [{name: "Air Curtains"}]
    testSaga(getRootCategories)
    .next()
    .call(service.getRootCategories)
    .next(payload)
    .put(actions.getRootCatgoriesAPISuccess(payload))
    .next()
    .isDone();
    
  });  
})

