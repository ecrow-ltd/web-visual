import { mount, render, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Touchable from './Touchable';

describe('Touchable', () => {
  test('renders', () => {
    const component = renderer.create(<Touchable />);
    expect(component).toBeDefined();
  });
});
