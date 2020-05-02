import Story from '@story/Story.story';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import Button, { IProps as ButtonIProps } from './Button';

// Indication Select
const selectIndicate = {
  default: 'neutral' as ButtonIProps['indicate'],
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
  label: 'variant',
  options: ['normal', 'tiny'] as Array<ButtonIProps['variant']>,
};

// Button Chapter
Story('Core').add('Button', () => {
  return (
    <Button
      disabled={boolean('disabled', false)}
      indicate={select(
        selectIndicate.label,
        selectIndicate.options,
        selectIndicate.default,
      )}
      variant={select(
        selectVariant.label,
        selectVariant.options,
        selectVariant.default,
      )}
      onClick={action('Clicked (onClick)')}
    >
      {text('text', 'Button')}
    </Button>
  );
});
