import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import App from './App';

describe('Application', () => {

  let shallow;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
  })

  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });  
})

