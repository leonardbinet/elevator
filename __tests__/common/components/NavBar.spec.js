import React from 'react'

import { render } from 'enzyme';

import { NavBar } from  '../../../src/js/common/components/navbar'

describe('NavBar', () => {
  
  it('should have 1 main nav', () => {
    const wrapper = render(<NavBar />)
    console.log(wrapper.find('.collapse'))
  })
})
