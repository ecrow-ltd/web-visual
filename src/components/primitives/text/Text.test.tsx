import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import Text from './Text';

describe('Text', () => {
    test('renders', () => {
        const component = renderer.create(<Text />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});