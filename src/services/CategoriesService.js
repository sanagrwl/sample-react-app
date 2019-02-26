import API from './api';

const getRootCategories = () => {
    return API.get("/categories")
}

const service = {
    getRootCategories
}

export default service;