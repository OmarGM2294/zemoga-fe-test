import React from 'react';

import { create } from 'react-test-renderer';

import Footer from '../components/footer';

describe('Footer', () => {
  it('Should match snapshot', () => {
    const component = create(
      <Footer />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});