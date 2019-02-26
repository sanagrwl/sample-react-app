import React from 'react'
import {shallow} from 'enzyme';
import CategoriesPage from './CategoriesPage';
import Categories from '../components/categories';

describe('Categories Page', () => {

    it('renders Categories component', () => {
        const wrapper = shallow(<CategoriesPage />);
        expect(wrapper.find(Categories).length).toEqual(1);
    });  
  })
  
  