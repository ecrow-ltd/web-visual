/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import Text from '@primitives/text';
import PrimitiveStory from '@stories/Primitive.story';
import React from 'react';
import Box, { IProps as IBoxProps } from './Box';

// Indication Select
const selectIndicate = {
  default: 'base' as IBoxProps['theme'],
  id: 'COMPONENT',
  label: 'theme',
  options: ['base', 'destructive'] as Array<IBoxProps['theme']>,
};

const One = (props: any) => (
  <div
    {...props}
    style={{
      alignItems: 'center',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      margin: 1,
    }}
  >
    <Text>ONE</Text>
  </div>
);
const Two = (props: any) => (
  <div
    {...props}
    style={{
      alignItems: 'center',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      margin: 1,
    }}
  >
    <Text>TWO</Text>
  </div>
);
const Three = (props: any) => (
  <div
    {...props}
    style={{
      alignItems: 'center',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      margin: 1,
    }}
  >
    <Text>THREE</Text>
  </div>
);

const contentItems = [<One key="1" />, <Two key="2" />, <Three key="3" />];

/**
 * Box Chapter
 */
PrimitiveStory.add('Box', () => {
  return (
    <Box
      theme={select(
        selectIndicate.label,
        selectIndicate.options,
        selectIndicate.default,
        selectIndicate.id,
      )}
    >
      {contentItems.map((item) => item)}
    </Box>
  );
});
