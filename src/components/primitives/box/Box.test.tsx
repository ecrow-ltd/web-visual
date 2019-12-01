import { mount, render, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Box from './Box';

describe('Box', () => {
  test('renders', () => {
    const component = renderer.create(<Box />);
    expect(component).toBeDefined();
  });
});
