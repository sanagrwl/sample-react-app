import React from 'react';
import configureMockStore from 'redux-mock-store';
import {mount} from 'enzyme';
import { Provider } from 'react-redux'
import CategoriesContainer from './CategoriesContainer';
import CategoriesComponent from './CategoriesComponent';
import actions from '../../actions/CategoriesActions';

describe('Categories Container', () => {
    const mockStore = configureMockStore();
    const initialState = {categories: {categories: [{name: 1}]}};
    
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <CategoriesContainer/>
            </Provider>
        )
    })

    it('should fetch categories', () => {
        expect(store.getActions().length).toEqual(1);
        expect(store.getActions()[0]).toEqual(actions.getRootCategories());
    });  

    it('renders categories component with categories', () => {        
        expect(wrapper.find(CategoriesComponent).length).toEqual(1);
        expect(wrapper.find(CategoriesComponent).props().categories).toEqual([{name: 1}]);
    });  


  })
  
  