import {
  OPEN_DRAWER, CLOSE_DRAWER
} from '../../actions/DashboardActions';

const initialState = {drawerOpen: false}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_DRAWER:
        return Object.assign({}, state, {drawerOpen: true});
      case CLOSE_DRAWER:
        return Object.assign({}, state, {drawerOpen: false});
      default:
        return state;
    }
  }

export default reducer;
