import {actionTypes as at} from '../../actions/CategoriesActions';

const initialState = {categories: []}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case at.GET_ROOT_CATEGORIES_API_SUCCESS:
        return Object.assign({}, state, {categories: action.payload});
      default:
        return state;
    }
  }

export default reducer;

