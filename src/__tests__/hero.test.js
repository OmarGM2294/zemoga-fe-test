import React from 'react'

import { create } from 'react-test-renderer'

import Hero from '../components/hero'

describe('Hero', () => {
  it('Should match snapshot (it renders correctly)', () => {
    const component = create(<Hero />)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
