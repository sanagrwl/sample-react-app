import { actionTypes as at } from '../../actions/DashboardActions';

const initialState = {drawerOpen: false}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case at.OPEN_DRAWER:
        return Object.assign({}, state, {drawerOpen: true});
      case at.CLOSE_DRAWER:
        return Object.assign({}, state, {drawerOpen: false});
      default:
        return state;
    }
  }

export default reducer;

