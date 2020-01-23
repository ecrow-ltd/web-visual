/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import PrimitiveStory from '@stories/Primitive.story';
import React from 'react';
import Input from './Input';

/**
 * Input Chapter
 */
PrimitiveStory.add('Input', () => {
  return <Input value={text('value', 'Button', 'COMPONENT')} />;
});
