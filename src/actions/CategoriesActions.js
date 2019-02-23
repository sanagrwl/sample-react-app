export const actionTypes = {
    GET_ROOT_CATEGORIES: 'GET_ROOT_CATEGORIES',
    GET_ROOT_CATEGORIES_API_SUCCESS: 'GET_ROOT_CATEGORIES_API_SUCCESS'
}

const getRootCategories = () => {
    return {
        type: actionTypes.GET_ROOT_CATEGORIES
    }
}

const getRootCatgoriesAPISuccess = (payload) => {
    return {
        type: actionTypes.GET_ROOT_CATEGORIES_API_SUCCESS,
        payload
    }
}

const actions = {
    getRootCategories,
    getRootCatgoriesAPISuccess
}

export default actions;
