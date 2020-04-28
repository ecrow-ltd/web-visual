import { mount, render, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Text from './Text';

describe('Text', () => {
  test('renders', () => {
    const component = renderer.create(<Text />);
    expect(component).toBeDefined();
  });
});
