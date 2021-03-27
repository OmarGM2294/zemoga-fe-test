import React from 'react'

import { create } from 'react-test-renderer'

import Card from '../components/card'

const data = {
  name: 'Kanye West',
  description:
    'Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.',
  category: 'entertainment',
  picture: 'kanye@2x.png',
  lastUpdated: '2020-03-10T23:08:57.892Z',
  votes: {
    positive: 23,
    negative: 36,
  },
}

describe('Card', () => {
  it('Should match snapshot (it renders correctly)', () => {
    const component = create(<Card data={data} type={'List'} />)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
