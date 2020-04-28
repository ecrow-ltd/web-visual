/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import Story from '@story/Story.story';
import React from 'react';
import Text, { IProps as ITextProps } from './Text';

// Variant Select
const selectVariant = {
  default: 'base' as ITextProps['variant'],
  id: 'COMPONENT',
  label: 'variant',
  options: [
    'base',
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
Story('Core').add('Text', () => {
  return (
    <Text
      value={text('value', 'Some Sample Text')}
      selectable={boolean('selectable', true)}
      variant={select(
        selectVariant.label,
        selectVariant.options,
        selectVariant.default,
      )}
    />
  );
});
