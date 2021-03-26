import React from 'react'

import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'

import Header from '../components/header'
import Dropdown from '../components/dropdown'

describe('Header', () => {
  it('Should match snapshot', () => {
    const component = create(<Header />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Should show the search bar on click', () => {
    const component = shallow(<Header />)
    component.find('button[alt="Search"]').simulate('click')
    expect(component.find('input').length).toEqual(1)
  })

  it('Should not show the search bar on start', () => {
    const component = shallow(<Header />)

    expect(component.find('input').length).toEqual(0)
  })

  it('Should hide the search bar on click', () => {
    const component = shallow(<Header />)
    component.find('button[alt="Search"]').simulate('click')
    component.find('button[alt="Search"]').simulate('click')

    expect(component.find('input').length).toEqual(0)
  })

  it('Should have a dropdown component', () => {
    const component = shallow(<Header />)
    expect(component.find(Dropdown).length).toEqual(1)
  })
})
