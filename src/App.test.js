import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store'

import App from './App';

const mockStore = configureMockStore([])
const store = mockStore({})

import { Provider } from 'react-redux'

describe('Application', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });  
})

