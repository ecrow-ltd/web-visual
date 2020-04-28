/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
// import { boolean, select, text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import PrimitiveStory from '@story/Primitive.story';
import React from 'react';
import Touchable from './Touchable';

/**
 * Touchable Chapter
 */
PrimitiveStory.add('Touchable', () => {
  return <Touchable />;
});
