/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import PrimitiveStory from '@stories/Primitive.story';
import React from 'react';
import Text, { IProps as ITextProps } from './Text';

// Variant Select
const selectVariant = {
  default: 'base' as ITextProps['variant'],
  id: 'COMPONENT',
  label: 'variant',
  options: [
    'base',
    'button',
    'title',
    'subtitle',
    'heading1',
    'heading2',
    'heading3',
    'subheading',
    'paragraph',
    'quote',
    'small',
  ] as Array<ITextProps['variant']>,
};

/**
 * Text Chapter
 */
PrimitiveStory.add('Text', () => {
  return (
    <Text
      variant={select(
        selectVariant.label,
        selectVariant.options,
        selectVariant.default,
      )}
    >
      {text('Text', 'Some Sample Text')}
    </Text>
  );
});
