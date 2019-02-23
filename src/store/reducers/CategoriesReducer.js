import * as a from '../../actions/CategoriesActions';

const initialState = {categories: []}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case a.GET_ROOT_CATEGORIES_API_SUCCESS:
        return Object.assign({}, state, {categories: action.payload});
      default:
        return state;
    }
  }

export default reducer;

