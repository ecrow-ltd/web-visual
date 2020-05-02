/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
import { array, boolean, number, select, text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import Text from '../text';
import Story from '@story/Story.story';
import React from 'react';
import { CSSObject } from 'styled-components';
import Container, { IProps as IContainerProps } from './Container';

// Indication Select
const selectDirection = {
  default: 'x' as IContainerProps['direction'],
  label: 'direction',
  options: ['x', 'y'] as Array<IContainerProps['direction']>,
};

// // Indication Select
// const selectTheme = {
//   default: 'primary' as IContainerProps['theme'],
//   label: 'theme',
//   options: ['primary', 'secondary', 'tertiary'] as Array<
//     IContainerProps['theme']
//   >,
// };

const exampleStyling: CSSObject = {
  border: '1px solid black',
  boxSizing: 'border-box',
  display: 'flex',
  height: '100%',
};

const One = (props: any) => (
  <div {...props} style={exampleStyling}>
    <Text>ONE</Text>
  </div>
);
const Two = (props: any) => (
  <div {...props} style={exampleStyling}>
    <Text>TWO</Text>
  </div>
);
const Three = (props: any) => (
  <div {...props} style={exampleStyling}>
    <Text>THREE</Text>
  </div>
);

const contentItems = [<One key="1" />, <Two key="2" />, <Three key="3" />];

/**
 * Container Chapter
 */
Story('Core').add('Container', () => {
  return (
    <Container
      direction={select(
        selectDirection.label,
        selectDirection.options,
        selectDirection.default,
      )}
      flex={boolean('flex', true)}
      showBackground={boolean('showBackground', false)}
      sizing={array('sizing', ['1', '2', '1'], ':')}
      spacing={number('spacing', 0)}
    >
      {contentItems.map((item) => item)}
    </Container>
  );
});
