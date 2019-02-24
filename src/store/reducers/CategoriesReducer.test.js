import reducer from './CategoriesReducer'; 
import actions from '../../actions/CategoriesActions';

describe('Categories reducer', () => {

  const initialState = {
    categories: []
  }

  it('should return the initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });  

  it('should assign categories when GET_ROOT_CATEGORIES_API_SUCCESS action type is received', () => {
    const categories = [{name: 1}];
    const action = actions.getRootCatgoriesAPISuccess(categories);  
    const actualState = reducer(initialState, action);
    const expectedState = { categories };
    expect(actualState).toEqual(expectedState);
  });  
})
