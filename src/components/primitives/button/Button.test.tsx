import { mount, render, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
  test('renders', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
