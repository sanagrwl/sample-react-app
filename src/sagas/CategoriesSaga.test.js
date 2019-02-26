import { testSaga } from 'redux-saga-test-plan';
import service from '../services/CategoriesService'
import actions from '../actions/CategoriesActions';
import {getRootCategories} from './CategoriesSaga';

describe('Categories Saga', () => {
  it('get all root categories', () => {
    const response = {data: [{name: "Air Curtains"}]}
    
    testSaga(getRootCategories)
    .next()
    .call(service.getRootCategories)
    .next(response)
    .put(actions.getRootCatgoriesAPISuccess(response.data))
    .next()
    .isDone();
    
  });  
})

