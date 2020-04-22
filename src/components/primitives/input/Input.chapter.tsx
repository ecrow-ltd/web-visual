/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import PrimitiveStory from '@stories/Primitive.story';
import React from 'react';
import Input, { IProps as IInputProps } from './Input';

// Variant Select
const selectVariant = {
  default: 'base' as IInputProps['variant'],
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
  ] as Array<IInputProps['variant']>,
};

/**
 * Input Chapter
 */
PrimitiveStory.add('Input', () => {
  return (
    <Input
      editable={boolean('editable', true)}
      title={text('title', 'Title')}
      information={text(
        'information',
        'This is additional information about the UI input.',
      )}
      value={'Example'}
      variant={select(
        selectVariant.label,
        selectVariant.options,
        selectVariant.default,
      )}
      testMode={true}
    />
  );
});
