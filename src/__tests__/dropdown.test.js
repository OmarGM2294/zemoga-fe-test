import React from 'react';
import Image from 'next/image';

import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import Dropdown from '../components/dropdown';

const dropdown = (
  <Dropdown
    event={
      <button>
        <Image
          src="/images/hamburger.svg"
          layout="fill"
        />
      </button>}>
      <ul>
        <li>
          <a href="#">Past Trials</a>
        </li>
        <li>
          <a href="#">How It Works</a>
        </li>
        <li>
          <a href="#">Login / Sign Up</a>
        </li>
      </ul>
  </Dropdown>
)

describe('Dropdown', () => {
  it('Should match snapshot', () => {
    const component = create(
      dropdown
    );
    
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should show hamburger menu on click', () => {
    const component = shallow(
      dropdown
    );
    component.find('div > div:first-child').simulate('click');
    expect(component.find('ul').length).toEqual(1);
  });

  it('Should hide hamburger menu on click', () => {
    const component = shallow(
      dropdown
    );
    component.find('div > div:first-child').simulate('click');
    component.find('div > div:first-child').simulate('click');
    expect(component.find('ul').length).toEqual(0);
  });

  it('Should not render hamburger menu on start', () => {
    const component = shallow(
      dropdown
    );
    expect(component.find('ul').length).toEqual(0);
  });
});