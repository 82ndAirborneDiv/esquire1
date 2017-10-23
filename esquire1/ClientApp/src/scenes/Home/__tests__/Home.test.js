import React from 'react'
import { shallow } from 'enzyme'
import { Home } from '../'

const props = {
  actions: {
    getProjectsRequest: jest.fn(),
    addProjectRequest: jest.fn()
  },
  projects: [
    { name: 'Project 1' },
    { name: 'Project 2' }
  ]
}

describe('Home scene', () => {
  test('it should render correctly', () => {
    expect(shallow(<Home {...props} />)).toMatchSnapshot()
  })
  
  test('it should handle ADD PROJECT button click event', () => {
    let wrapper = shallow(<Home {...props} />)
    wrapper.find('MainButton').simulate('click')
    expect(props.actions.addProjectRequest).toHaveBeenCalled()
  })
})