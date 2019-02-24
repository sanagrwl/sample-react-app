import actions, {actionTypes as at} from './CategoriesActions';

describe('Categories action types', () => {

    it('should match action name to its value', () => {
        expect(at.GET_ROOT_CATEGORIES).toEqual("GET_ROOT_CATEGORIES")
        expect(at.GET_ROOT_CATEGORIES_API_SUCCESS).toEqual("GET_ROOT_CATEGORIES_API_SUCCESS")
    });  
})  

describe('Categories actions', () => {

  it('should create an action get root categories', () => {
    const action = actions.getRootCategories();
    const expected = {
        type: at.GET_ROOT_CATEGORIES
    }
    expect(action).toEqual(expected);
  });  

  it('should create a success action for getting root categories', () => {
    const action = actions.getRootCatgoriesAPISuccess();
    const expected = {
        type: at.GET_ROOT_CATEGORIES_API_SUCCESS
    }
    expect(action).toEqual(expected);
  });  
})

