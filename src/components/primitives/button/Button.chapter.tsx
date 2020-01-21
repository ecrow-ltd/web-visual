import PrimitiveStory from '@stories/Primitive.story';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import Button, { IProps as ButtonIProps } from './Button';

// Indication Select
const selectIndicate = {
  default: 'neutral' as ButtonIProps['indicate'],
  id: 'COMPONENT',
  label: 'indicate',
  options: [
    'neutral',
    'positive',
    'negative',
    'creative',
    'destructive',
  ] as Array<ButtonIProps['indicate']>,
};

// Variant Select
const selectVariant = {
  default: 'normal' as ButtonIProps['variant'],
  id: 'COMPONENT',
  label: 'variant',
  options: ['normal', 'tiny'] as Array<ButtonIProps['variant']>,
};

// Button Chapter
PrimitiveStory.add('Button', () => {
  return (
    <Button
      disabled={boolean('disabled', false, 'COMPONENT')}
      indicate={select(
        selectIndicate.label,
        selectIndicate.options,
        selectIndicate.default,
        selectIndicate.id,
      )}
      variant={select(
        selectVariant.label,
        selectVariant.options,
        selectVariant.default,
        selectVariant.id,
      )}
      onClick={action('Clicked (onClick)')}
    >
      {text('text', 'Button', 'COMPONENT')}
    </Button>
  );
});
