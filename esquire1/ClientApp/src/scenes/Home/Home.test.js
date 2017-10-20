import React from 'react'
import { shallow } from 'enzyme'
import { Home } from './index'

describe('Home scene', () => {
  test('it should render correctly', () => {
    const props = {
      actions: {
        getProjectsRequest: jest.fn()
      },
      projects: [
        { name: 'Project 1' },
        { name: 'Project 2' }
      ]
    }
    expect(shallow(<Home {...props} />)).toMatchSnapshot()
  })
})