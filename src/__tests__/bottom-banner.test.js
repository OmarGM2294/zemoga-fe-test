import React from 'react'

import { create } from 'react-test-renderer'

import BottomBanner from '../components/bottom-banner'

describe('Bottom Banner', () => {
  it('Should match snapshot (it renders correctly)', () => {
    const component = create(<BottomBanner />)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
