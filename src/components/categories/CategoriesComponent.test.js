import React from 'react'
import {shallow} from 'enzyme';
import CategoriesComponent from './CategoriesComponent';

describe('Categories Component', () => {

    const categories = [
        {name: 'watches'},
        {name: 'abrasives'},
        {name: 'air curtains'},
    ]

    it('renders categories', () => {
        const wrapper = shallow(<CategoriesComponent categories={categories}/>);
        
        const listItems = wrapper.find("li")
        expect (listItems.length).toEqual(3);
        expect (listItems.get(0).props.children).toEqual("watches");
        expect (listItems.get(1).props.children).toEqual("abrasives");
        expect (listItems.get(2).props.children).toEqual("air curtains");
    });  
  })
  
  