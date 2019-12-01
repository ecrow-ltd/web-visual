import { mount, render, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import COMPONENT_NAME from './COMPONENT_NAME';

describe('COMPONENT_NAME', () => {
  test('renders', () => {
    const component = renderer.create(<COMPONENT_NAME />);
    expect(component).toBeDefined();
  });
});
