import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import COMPONENT_NAME from './COMPONENT_NAME';

describe('COMPONENT_NAME', () => {
    test('renders', () => {
        const component = renderer.create(<COMPONENT_NAME />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});