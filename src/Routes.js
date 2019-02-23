import React from 'react';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';

const routes = {
    "HOME": "/",
    "CATEGORIES": "/categories"
}

export const routesConfig = [
    {
        path: routes.HOME,
        exact: true,
        component: () => <HomePage/>
    },
    {
        path: routes.CATEGORIES,
        exact: true,
        component: () => <CategoriesPage/>
    }
];
  

export default routes; 