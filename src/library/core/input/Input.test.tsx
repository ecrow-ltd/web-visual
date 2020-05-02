import { mount, render, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input';

describe('Input', () => {
  test('renders', () => {
    const component = renderer.create(<Input />);
    expect(component).toBeDefined();
  });
});
