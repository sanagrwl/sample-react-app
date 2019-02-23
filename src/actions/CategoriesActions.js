export const GET_ROOT_CATEGORIES = 'GET_ROOT_CATEGORIES';
export const GET_ROOT_CATEGORIES_API_SUCCESS = 'GET_ROOT_CATEGORIES_API_SUCCESS';

export function getRootCategories() {
    return {
        type: GET_ROOT_CATEGORIES
    }
}

export function getRootCatgoriesAPISuccess(payload) {
    return {
        type: GET_ROOT_CATEGORIES_API_SUCCESS,
        payload
    }
}