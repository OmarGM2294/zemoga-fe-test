import React from 'react'

import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'

import Cards from '../containers/cards'
import Card from '../components/card'

const data = [
  {
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
  },
  {
    name: 'Mark Zuckerberg',
    description:
      'Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.',
    category: 'business',
    picture: 'mark@2x.png',
    lastUpdated: '2021-02-14T23:10:19.134Z',
    votes: {
      positive: 418,
      negative: 324,
    },
  },
]

describe('Cards', () => {
  it('Should match snapshot (it renders correctly)', () => {
    const component = create(<Cards data={data} />)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Should show cards', () => {
    const component = shallow(<Cards data={data} />)

    expect(component.find(Card).length).toEqual(2)
  })

  it('Should show an empty state when there is no cards', () => {
    const component = shallow(<Cards data={[]} />)

    expect(component.find(Card).length).toEqual(0)
    expect(component.find('i').text()).toEqual('There is no cards to show')
  })
})
