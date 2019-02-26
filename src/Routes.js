import React from 'react';
import CategoriesPage from './pages/CategoriesPage';

const routes = {
    "HOME": "/"
}

export const routesConfig = [
    {
        path: routes.HOME,
        exact: true,
        component: () => <CategoriesPage/>
    }
];
  

export default routes; 