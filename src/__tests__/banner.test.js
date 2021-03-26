import React from 'react';

import { create } from 'react-test-renderer';

import Banner from '../components/banner';

describe('Banner', () => {
  it('Should match snapshot', () => {
    const component = create(
      <Banner />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});