/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
// import { boolean, select, text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import PrimitiveStory from '@stories/Primitive.story';
import React from 'react';
import Container from './Container';

/**
 * Container Chapter
 */
PrimitiveStory.add('Container', () => {
  return <Container />;
});
