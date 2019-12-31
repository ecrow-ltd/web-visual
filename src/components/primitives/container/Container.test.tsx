import { mount, render, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Container from './Container';

describe('Container', () => {
  test('renders', () => {
    const component = renderer.create(<Container />);
    expect(component).toBeDefined();
  });
});
