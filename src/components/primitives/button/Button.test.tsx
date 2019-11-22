import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import Button from './Button';

describe('Button', () => {
    test('renders', () => {
        const component = renderer.create(<Button />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});